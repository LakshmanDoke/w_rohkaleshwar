import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './Temple/main';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route path="/" component={Main} exact={true} strict></Route>
      </Router> 
    </React.Fragment>
  );
}

export default App;
