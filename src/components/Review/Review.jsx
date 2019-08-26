import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios';

import Button from '@material-ui/core/Button'
import CssBaseLine from "@material-ui/core/CssBaseline";

class Review extends Component {
  
    state = {
      feeling: this.props.reduxStore.feedback.feeling.feeling,
      understanding: this.props.reduxStore.feedback.understanding.understanding,
      support: this.props.reduxStore.feedback.supported.supported,
      comments:  this.props.reduxStore.feedback.comments.comments
  }

    nextHandler = event => {
    console.log("you clicked the next button", this.state);
    axios.post('/results', this.state)
        .then(response => {
            console.log(response); 
             this.props.history.push("/success");
        })
        .catch(error => {
            console.log(error);
        });

    
  };





  render() {



    return (
      <div>
        <CssBaseLine />
        <h1>Hello From Review</h1>
        <p>
          Welcome to your daily feedback. You may review and reflect upon
          your feedback entries that are displayed below. Please Click the
          SUBMIT button to finish your daily feedback> Thank you for you
          submission and your suffering!
        </p>
        <div>
          <p>
            you gave yoourself a feeling score of :
            {this.props.reduxStore.feedback.feeling.feeling}
          </p>
          <p>
            you gave yourself a understanding score of:{" "}
            {this.props.reduxStore.feedback.understanding.understanding}
          </p>
          <p>
            you felt you were suportted this much:
            {this.props.reduxStore.feedback.supported.supported}
          </p>
          <p>
            and you had this to say for yourself:
            {this.props.reduxStore.feedback.comments.comments}
          </p>
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
