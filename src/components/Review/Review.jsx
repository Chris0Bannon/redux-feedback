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
          Welcome to your daily feedback. You may review and reflect upon
          your feedback entries that are displayed below. Please Click the
          SUBMIT button to finish your daily feedback> Thank you for you
          submission and your suffering!
        </p>
        <div>
            <p>you gave yoourself a feeling score of :{this.props.reduxStore.feedback.feeling.feeling}</p>
            <p>you gave yourself a understanding score of: {this.props.reduxStore.feedback.understanding.understanding}</p>
            <p>you felt you were suportted this much:{this.props.reduxStore.feedback.supported.supported}</p>
            <p>and you had this to say for yourself:{this.props.reduxStore.feedback.comments.comments}</p>
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
