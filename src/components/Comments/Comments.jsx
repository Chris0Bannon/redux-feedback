import React, { Component } from "react";
import { connect } from "react-redux";


import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import CssBaseLine from "@material-ui/core/CssBaseline";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'

class Comments extends Component {
  state = {
    comments: ""
  };

  backHandler = event => {
    event.preventDefault();
    console.log("clicked back");
    this.props.history.push("/supported");
  };

  nextHandler = event => {
    if (this.state.comments === "") {
      return alert("Yo, you gotta tell us a thing.  That's the entire point of all this.  This is our punishment to you know.  We didn't want to do our feedback either but look where that landed us");
    } else {
      console.log("you clicked the next button");
      this.props.dispatch({
        type: "ADD_COMMENTS",
        payload: this.state
      });
      this.props.history.push("/review");
    }
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
        <Grid style={{ textAlign: "center" }}>
          <h1>Please leave us your Comments!</h1>
          <p>
            Use the text input field below
            to share any additional comments about your suffering that you
            may wish to share with your overseers. When you have finished, please Click the NEXT
            button to proceed!
          </p>
          <form onSubmit={this.nextHandler}>
            <TextField
              id="outlined-multiline-static"
              label="Please Type Your Comments Here!"
              multiline
              rows="6"
              defaultValue= ""
              margin="normal"
              variant="outlined"
              onChange={this.handleChange}
            />
            <br />
            <Button
              variant="contained"
              color="secondary"
              onClick={this.backHandler}
            >
              Back
            </Button>
            <Button variant="contained" color="primary" type="submit">
              NEXT
            </Button>
          </form>
        </Grid>
      </div>
    );
  }
}

export default connect()(Comments);
