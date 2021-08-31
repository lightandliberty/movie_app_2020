import React from 'react';

class App extends React.Component{
  state = {
    isLoading: true,    // 변수 생성시 굳이 앞에 안 붙여도 되는 듯.
  };

  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }

  componentDidMount(){  // 첫번째 인자로 setTimeout()을 전달
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000)  // 두번째 인자로 6000밀리초
  }

}

export default App;