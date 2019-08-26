import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import CssBaseLine from "@material-ui/core/CssBaseline";
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid'
import goat from '../Images/goat_small.jpg';

class Success extends Component {

handleNext = () => {

     this.props.dispatch({
       type: "RESET",
     });
    this.props.history.push("/");

}



    render(){
        return (
          <div>
            <CssBaseLine />
            <Grid style={{ textAlign: "center" }}>
              <h1 className= "titleText">Thank you!</h1>
              <p>
                Your suffering has been successfully submitted and
                recorded!You've earned a Goat! LOL Why is this even in the repo?? Enjoy the accompanying
                sense of pride and accomplishment
              </p>
              <img src={goat} alt="" />
              <p>
                Go ahead and run through the feedback loop like a
                million more times. There is nothing else you will ever
                doo!!!
              </p>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleNext}
              >
                DO IT AGAIN
              </Button>
            </Grid>
          </div>
        );
    }
}


export default connect()(Success);