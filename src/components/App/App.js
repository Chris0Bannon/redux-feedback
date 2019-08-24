import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

import Review from '../Review/Review';
import Comments from '../Comments/Comments';
import Supported from '../Supported/Supported';
import Understanding from '../Understanding/Understanding';
import Feeling from '../Feeling/Feeling';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />
        </div>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/feeling" component = {Feeling} />
        <Route path = "/understanding" component = {Understanding} />
        <Route path = "/supported" component = {Supported} />
        <Route path = "/comments" component = {Comments} />
        <Route path = "/review" component = {Review} />
      </Router>
    );
  }
}

export default App;
