import React, { Component } from "react";
import { connect } from "react-redux";

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
        <button onClick={this.nextHandler}>SUBMIT</button>
      </div>
    );
  }
}

export default connect()(Review);
