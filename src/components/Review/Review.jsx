import React, { Component } from "react";
import { connect } from "react-redux";

import Button from '@material-ui/core/Button'


class Review extends Component {


    nextHandler = event => {
    console.log("you clicked the next button");

    this.props.history.push("/");
  };



  render() {

// let ratings = this.props.reduxStore.feedback.map(rating => {
//     return (
//       <div>
//         <p>You have rated your feeling as: {rating.feeling}</p>
//         <p>you have rated your level of understanding as: {rating.understanding}</p>
//          <p>you have rated your feeling of being supported as: {rating.supported}</p>
//         <p>you have left this comment: {rating.comments}</p>
//       </div>
//     );
// })
    return (
      <div>
        <h1>Hello From Review</h1>
        <p>
          Welcome to your daily feedback. You may review and reflect upon
          your feedback entries that are displayed below. Please Click the
          SUBMIT button to finish your daily feedback Thank you for you
          submission and your suffering!
        </p>
        <div>
          <p>You have rated your feeling as: {this.props.reduxStore.feedback.feeling}</p>
          <p>
            you have rated your level of understanding as:
            {this.props.reduxStore.feedback.understanding}
          </p>
          <p>
            you have rated your feeling of being supported as:
            {this.props.reduxStore.feedback.supported}
          </p>
          <p>you have left this comment: {this.props.reduxStore.feedback.comments}</p>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.nextHandler}
        >
          SUBMIT
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = reduxStore => {
    return {
        reduxStore
    }
}

export default connect(mapStoreToProps)(Review);
