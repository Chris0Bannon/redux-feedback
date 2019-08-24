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
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b71c1c"
    },
    secondary: {
      main: "#b71c1c"
    },
    background: {
      default: "#b71c1c"
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Feedback Hell!</h1>
              <h4>This is forever!</h4>
              <h4>
                Don't forget it!
              </h4>
            </header>
            <br />
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/feeling" component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/supported" component={Supported} />
          <Route path="/comments" component={Comments} />
          <Route path="/review" component={Review} />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
