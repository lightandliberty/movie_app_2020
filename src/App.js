import React from 'react';

class App extends React.Component{
  state = {
    count: 0,
  };
  
  // 생성될 때 호출
  constructor(props)
  {
    super(props);
    console.log('constructed. I\'m constructor()');
  }  
  
  render(){
    console.log('now rendering. I\'m rendering()');
     return (
     <div>
        <h1>The number is: {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
     </div>
      );
   }
   // render() -> componentDidMount() 실행 됨.
  componentDidMount(){
    console.log('component rendered I\'m componentDidMount()');
  }  
  
  // render() -> componentDidUpdate() 실행 됨.
  componentDidUpdate()
  {
    console.log("I just updated. I'm componentDidUpdate()");
  }  
  
  componentWillUnmount()
  {
    console.log("Destructed. I'm componentWillUnmount");
  }

  add = () => {
    console.log('add');
    this.setState(current => (
      {
        count: current.count + 1,   // { index: current.count -1 } 객체를 반환
      }
    ));  // 새로운 state {count: 1} 을 인자로 넘겨 줌.
  }
  
  minus = () => {
    console.log('minus');
    this.setState(current => (
      {
        count: current.count -1,  // { index: current.count -1 } 객체를 반환
      }
    )); // 새로운 state {count: -1} 을 인자로 넘겨 줌.
  }


}

export default App;
