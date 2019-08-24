import React, {Component} from 'react';
import {connect} from 'react-redux';

class Supported extends Component {
  nextHandler = event => {
    console.log("you clicked the next button");

    this.props.history.push("/comments");
  };

  render() {
    return (
      <div>
        <h1>Hello From Supported</h1>
        <p>
          Welcome to your daily feedback. Please use a scale of 1 to 5 to
          describe to your overseers how supported you feel by our staff. Use a scale where a score of 1 will represent your complete
          sense of earned abandonment, and where a score of 5 represents
          your total dependency on others to achieve any sense of self actualization. Please Click
          the NEXT button to proceed
        </p>
        <button onClick={this.nextHandler}>NEXT</button>
      </div>
    );
  }
}

export default connect()(Supported);