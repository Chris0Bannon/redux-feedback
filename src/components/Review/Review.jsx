import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios';

import Button from '@material-ui/core/Button'
import CssBaseLine from "@material-ui/core/CssBaseline";
import Grid from '@material-ui/core/Grid';

class Review extends Component {
  state = {
    feeling: this.props.reduxStore.feedback.feeling.feeling,
    understanding: this.props.reduxStore.feedback.understanding.understanding,
    support: this.props.reduxStore.feedback.supported.supported,
    comments: this.props.reduxStore.feedback.comments.comments
  };
  backHandler = event => {
    event.preventDefault();
    console.log("clicked back");
    this.props.history.push("/comments");
  };

  nextHandler = event => {
    console.log("you clicked the next button", this.state);
    axios
      .post("/results", this.state)
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
        <Grid style={{ textAlign: "center" }}>
          <h2 className = "titleText">Review your Submission</h2>
          <p>
            Take this moment to review and reflect upon your previous
            choices that are displayed below. Please click the SUBMIT key to finalize your
            answers. Thank you for you submission and your suffering!
          </p>
          <div>
            <p>
              You scored your feelings today as
               <span>
                {" "}
              {this.props.reduxStore.feedback.feeling.feeling}
              {" "}
              </span>
              out of 5. We are pleased with your level of misery.
            </p>
            <p>
              You scored your feeling of understanding as
              <span>
                {" "}
                {this.props.reduxStore.feedback.understanding.understanding}
                {" "}
              </span>
               out of 5.  We are glad to see you are clearly confused.
            </p>
            <p>
              you scored your feeling of being supported as
               <span>
                {" "}
              {this.props.reduxStore.feedback.supported.supported}
              {" "}
              </span>
              out 5. Congrats! You are a loser even in hell!
            </p>
            <p>
              Sadly, this is all you had to say for yourself:
                {" "}
              {this.props.reduxStore.feedback.comments.comments}
              
            </p>
          </div>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.backHandler}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.nextHandler}
          >
            SUBMIT
          </Button>
        </Grid>
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
