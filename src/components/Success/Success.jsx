import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import CssBaseLine from "@material-ui/core/CssBaseline";
import {connect} from 'react-redux';

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
            <h1>
              Your information has been successfully submitted and
              recorded!
            </h1>
            <p>
              Go ahead and run through the feedback loop like a million
              more times.
            </p>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleNext}
            >
              DO IT AGAIN
            </Button>
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


export default connect()(Success);