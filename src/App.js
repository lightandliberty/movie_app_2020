import React from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom' // HashRouter와 Route 컴포넌트 사용
import About from './routes/About'; // About 컴포넌트 임포트
import Home from './routes/Home';
import Navigation from './components/Navigation.js';
import Detail from './routes/Detail.js';

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/> {/* '/'인 경우는 표시되지 않으므로, */}
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;