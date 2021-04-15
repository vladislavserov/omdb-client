import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './App.css';
import Main from './pages/Main';
import Film from './pages/Film'
import store from './store/store'


// http://www.omdbapi.com/?s=titanic&apikey=7019ebd8



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" ><Main /></Route>
          <Route exact path="/film/:filmId"><Film /></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;