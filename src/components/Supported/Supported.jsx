import React, {Component} from 'react';
import {connect} from 'react-redux';

import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import CssBaseLine from "@material-ui/core/CssBaseline";



class Supported extends Component {
  state = {
    supported: 0
  };

  nextHandler = event => {
    event.preventDefault();
    console.log("you clicked the next button");

    this.props.history.push("/comments");
  };

  handleChange = event => {
    console.log("you changed in the form");
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <h1>Hello From Supported</h1>
        <p>
          Welcome to your daily feedback. Please use a scale of 1 to 5 to
          describe to your overseers how supported you feel by our staff. Use a
          scale where a score of 1 will represent your complete sense of earned
          abandonment, and where a score of 5 represents your total dependency
          on others to achieve any sense of self actualization. Please Click the
          NEXT button to proceed
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
          <Button variant="contained" color="primary" type="submit">
            NEXT
          </Button>
        </form>
      </div>
    );
  }
}

export default connect()(Supported);