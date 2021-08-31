import React from 'react';
import axios from 'axios';

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
  } = await axios.get('https://yts.mx/api/v2/list_movies.json');
  // this.setState({movies: movies}); 는 축약가능하므로, // 첫번째 movies는 state고, 두번째 movies는 구조분해할당으로 얻은 movies변수
  this.setState({ movies, isLoading: false }); // 영화 Data를 얻어 왓으면, isLoading = false
  console.log(movies);

    // const movies = await axios.get('https://yts.mx/api/v2/list_movies.json'); // 반환 값 저장
    // console.log(movies.data.data.movies);  // 얻어온 데이터를 출력
}

  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>; // 이 부분에 영화 데이터를 출력.
  }



  componentDidMount(){
    this.getMovies();
  }

}

export default App;
