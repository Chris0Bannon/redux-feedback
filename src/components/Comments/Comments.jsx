import React, { Component } from "react";
import { connect } from "react-redux";

class Comments extends Component {
  nextHandler = event => {
    console.log("you clicked the next button");

    this.props.history.push("/review");
  };

  render() {
    return (
      <div>
        <h1>Hello From Comments</h1>
        <p>
          Welcome to your daily feedback. Use the text input field below to
          share any additional comments about your suffering that you may wish
          to share with your overseers. Please Click the NEXT button to proceed
        </p>
        <button onClick={this.nextHandler}>NEXT</button>
      </div>
    );
  }
}

export default connect()(Comments);
