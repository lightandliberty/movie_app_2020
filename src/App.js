import React from 'react';
import axios from 'axios';
import Movie from './Movie';  // Movie컴포넌트를 임포트
import './App.css';   // App컴포넌트에는 App.css를 임포트

class App extends React.Component{
  state = {
    isLoading: true,    // 변수 생성시 굳이 앞에 안 붙여도 되는 듯.
    movies: [], // 이렇게 변수 이름만 써도 생성되는 듯. 로딩된 영화 데이터를 저장.
  };

  getMovies = async () => { //  괄호 앞에 붙여 getMovies()함수는 시간이 필요해라고 말하기.
    // 실제 시간이 필요한 대상 앞에 await를 붙임. 기다려 달라고 말하는 것.

  const
  {
    data:
    {
      data:
      {       // data:안에 data:안에. (즉 data-> data-> 안에서 movies를 생성. 구조분해할당(변수)으로 저장하는 듯.
        movies
      },
    },
  } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
  // this.setState({movies: movies}); 는 축약가능하므로, // 첫번째 movies는 state고, 두번째 movies는 구조분해할당으로 얻은 movies변수
  this.setState({ movies, isLoading: false }); // 영화 Data를 얻어 왓으면, isLoading = false
  //  console.log(movies);

    // const movies = await axios.get('https://yts.mx/api/v2/list_movies.json'); // 반환 값 저장
    // console.log(movies.data.data.movies);  // 얻어온 데이터를 출력
}

  render(){
    const { isLoading, movies } = this.state;
    return ( // JSX의 가장 바깥쪽을 section으로 감쌈.
      <section class = "container">
      {isLoading ? (
        // 여기는 loading을 위한 곳
        <div class = "loader">
          <span class="loader__text">Loading...</span>
        </div>
      ) : (
        // Movie 컴포넌트들을 이 엘리먼트로 감쌈.
        <div class = "movies">
          {
            movies.map((movie) => 
             (
              <Movie
              key = {movie.id}
              id = {movie.id}
              year = {movie.year}
              title = {movie.title}
              summary = {movie.summary}
              poster = {movie.medium_cover_image}
              />
             )
            ) // 여기까지가 map()
          }   // 여기서 movie 컴포넌트를 반환하면 됨.
        </div>
    )}
    </section>
    ); //이 부분이 return()부분. // 이 부분에 영화 데이터를 출력.
  } // 이 부분이 render()부분




  componentDidMount(){
    this.getMovies();
  }

} // 클래스형 컴포넌트 

export default App;
