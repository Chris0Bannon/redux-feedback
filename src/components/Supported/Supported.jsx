import React, { Component } from "react";
import { connect } from "react-redux";

import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

class Supported extends Component {
  state = {
    supported: 0
  };

  backHandler = event => {
    event.preventDefault();
    console.log("clicked back");
    this.props.history.push("/understanding");
  };

  nextHandler = event => {
    event.preventDefault();
    if (this.state.supported === 0) {
      return alert("Yo, you gotta tell us a thing.  That's the entire point of all this.  This is our punishment to you know.  We didn't want to do our feedback either but look where that landed us");
    } else {
      console.log("you clicked the next button");
      this.props.dispatch({
        type: "ADD_SUPPORTED",
        payload: this.state
      });
      console.log(this.state);
      this.props.history.push("/comments");
    }
  };

  handleChange = event => {
    console.log("you changed in the form");
    console.log(event.target.value);
    this.setState({
      supported: event.target.value
    });
  };

  render() {
    return (
      <div>
        <CssBaseLine />
        <Grid style={{ textAlign: "center" }}>
          <h1 className = "titleText">Hello From Supported</h1>
          <p>
            Please use a scale of 1 to 5 to
            describe to your overseers how supported you feel by our staff.
            Use a scale where a score of 1 will represent your complete
            sense of earned abandonment, and where a score of 5 represents
            your total dependency on others to achieve any sense of self
            actualization. Please Click the NEXT button to proceed
          </p>
          <form onSubmit={this.nextHandler}>
            <RadioGroup
              aria-label="Rating"
              name="Rating"
              onChange={this.handleChange}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="1"
                onClick={this.handleRadioDelivery}
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="2"
                onClick={this.handleRadioPickup}
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="3"
                onClick={this.handleRadioPickup}
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="4"
                onClick={this.handleRadioPickup}
              />
              <FormControlLabel
                value="5"
                control={<Radio />}
                label="5"
                onClick={this.handleRadioPickup}
              />
            </RadioGroup>
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

export default connect()(Supported);
