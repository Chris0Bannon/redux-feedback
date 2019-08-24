import React, { Component } from "react";
import { connect } from "react-redux";
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import CssBaseLine from '@material-ui/core/CssBaseline';


class Home extends Component {
  nextHandler = event => {
    event.preventDefault();
    console.log("you clicked the next button");

    this.props.history.push("/feeling");
  };

handleChange = event => {
    console.log('you changed in the form');
    console.log(event.target.value);
    
}

  render() {
    return (
      <div>
          <CssBaseLine />
        <h1>Hello From Home</h1>
        <p>
          Welcome to your daily feedback. Never forget that you are here
          forever! Please click the NEXT button to continue!
        </p>
        <form onSubmit={this.nextHandler}>
          <RadioGroup aria-label="Rating" name="Rating" onChange = {this.handleChange}>
            <FormControlLabel
              value= "1"
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
        </form>
        <Button variant="contained" color="primary" type="submit">
          NEXT
        </Button>
      </div>
    );
  }
}

export default connect()(Home);
