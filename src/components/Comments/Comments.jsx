import React, { Component } from "react";
import { connect } from "react-redux";


import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import CssBaseLine from "@material-ui/core/CssBaseline";
import TextField from '@material-ui/core/TextField';


class Comments extends Component {
  state = {
    comments: ''
  };

  nextHandler = event => {
    console.log("you clicked the next button");
      this.props.dispatch({
        type: "ADD_COMMENTS",
        payload: this.state
      });
    this.props.history.push("/review");
  };

  handleChange = event => {
    console.log("you changed in the form");
    console.log(event.target.value);
     this.setState({
       comments: event.target.value
     });
  };

  render() {
    return (
      <div>
        <CssBaseLine />
        <h1>Hello From Comments</h1>
        <p>
          Welcome to your daily feedback. Use the text input field below to
          share any additional comments about your suffering that you may
          wish to share with your overseers. Please Click the NEXT button to
          proceed
        </p>
        <form onSubmit={this.nextHandler}>
          <TextField
            id="outlined-multiline-static"
            label="Please Type Your Comments Here!"
            multiline
            rows="5"
            defaultValue=""
            margin="normal"
            variant="outlined"
            onChange={this.handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            NEXT
          </Button>
        </form>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.backHandler}
        >
          Back
        </Button>
      </div>
    );
  }
}

export default connect()(Comments);
