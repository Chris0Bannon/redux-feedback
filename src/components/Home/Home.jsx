import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  nextHandler = event => {
    console.log("you clicked the next button");

    this.props.history.push("/feeling");
  };

  render() {
    return (
      <div>
        <h1>Hello From Home</h1>
        <p>
          Welcome to your daily feedback. Never forget that
          you are here forever! Please click the NEXT button to continue!
        </p>
        <button onClick={this.nextHandler}>NEXT</button>
      </div>
    );
  }
}

export default connect()(Home);
