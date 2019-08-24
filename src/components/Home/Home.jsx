import React, { Component } from "react";
import { connect } from "react-redux";

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import CssBaseLine from '@material-ui/core/CssBaseline';


class Home extends Component {
  nextHandler = event => {
    event.preventDefault();
    console.log("you clicked the next button");

    this.props.history.push("/feeling");
  };


  render() {
    return (
      <div>
        <CssBaseLine />
        <h1>Hello From Home</h1>
        <p>
          Welcome to your daily feedback. Never forget that you are here
          forever! Please click the NEXT button to continue!
        </p>
        
          <Button variant="contained" color="primary" type="submit">
            NEXT
          </Button>
      </div>
    );
  }
}

export default connect()(Home);
