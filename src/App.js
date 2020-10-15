import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Main from './Main';
import Film from './Film'


// http://www.omdbapi.com/?s=titanic&apikey=7019ebd8

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" ><Main/></Route>
        <Route exact path="/film/:filmId"><Film/></Route>
      </Switch>
    </Router>
  );
}

export default App;