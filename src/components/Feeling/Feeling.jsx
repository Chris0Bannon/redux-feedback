import React, {Component} from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {
  nextHandler = event => {
    console.log("you clicked the next button");

    this.props.history.push("/understanding");
  };

  render() {
    return (
      <div>
        <h1>Hello From Feeling</h1>
        <p>
          Welcome to your daily feedback. Please tell us on a scale of 1 to 5, 1
          being the worst possible amount of anguish and existential torment
          possible, and 5 meaning that you have accepted your eternal fate.
          Please Click the NEXT button to proceed
        </p>
        <button onClick={this.nextHandler}>NEXT</button>
      </div>
    );
  }
}

export default connect()(Feeling);