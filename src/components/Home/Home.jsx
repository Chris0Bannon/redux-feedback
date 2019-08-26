import React, { Component } from "react";
import { connect } from "react-redux";


import Button from "@material-ui/core/Button";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

class Home extends Component {
  nextHandler = event => {
    event.preventDefault();
    console.log("you clicked the next button");

    this.props.history.push("/feeling");
  };

  render() {
    return (
      <div>
        <CssBaseLine />
        <Grid style={{ textAlign: "center" }}>
          <h1>Welcome Home!</h1>
          <p>
            Welcome to your daily feedback! Follow the prompts to share how you are feeling! The best part is that this feedback loop never ends!Please click the NEXT button to
            begin!
          </p>
        </Grid>
        <Grid style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.nextHandler}
          >
            NEXT
          </Button>
        </Grid>
      </div>
    );
  }
}

export default connect()(Home);
