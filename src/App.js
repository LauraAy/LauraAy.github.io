import React from 'react';
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Test from './pages/Test'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
function App() {
  return(
    <Router>
      <Route exact path="/Portfolio/" component={Home} />
      <Route exact path="/Portfolio/portfoliopage" component={Portfolio} />
      <Route exact path="/Portfolio/contact" component={Contact} />
      <Route exact path="/Portfolio/test" component={Test} />
    </ Router>

  );
}

export default App;
