import React, { Component } from "react";
import { connect } from "react-redux";

import Button from '@material-ui/core/Button'
class Review extends Component {
  nextHandler = event => {
    console.log("you clicked the next button");

    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Hello From Review</h1>
        <p>
          Welcome to your daily feedback. You may review and reflect upon your
          feedback entries that are displayed below. Please Click the SUBMIT
          button to finish your daily feedback>  Thank you for you submission and your suffering!
        </p>
        <Button variant = "contained" color ="primary" onClick={this.nextHandler}>SUBMIT</Button>
      </div>
    );
  }
}

export default connect()(Review);
