import React from 'react';
// 여긴 어디?
class App extends React.Component{
  state = {
    isLoading: true,    // 변수 생성시 굳이 앞에 안 붙여도 되는 듯.
    movies: [], // 이렇게 변수 이름만 써도 생성되는 듯. 로딩된 영화 데이터를 저장.
  };

  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>; // 이 부분에 영화 데이터를 출력.
  }

  componentDidMount(){  // 첫번째 인자로 setTimeout()을 전달
    // 영화 데이터 로딩! 영화 데이터 로딩이 완료되면,
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000)  // 두번째 인자로 6000밀리초
  }

}

export default App;
