import React from 'react';
//import Potato from './Potato';  // ./는 같은 경로. App.js와 Potato.js는 같은 폴더이므로.

function Food(){
  return <h1>I love Potato</h1>;
}

function App() {
  return (
    <div>
       <h1>Hello</h1>
       <Food fav = "kimchi" />
    </div>
  );
}

export default App;
