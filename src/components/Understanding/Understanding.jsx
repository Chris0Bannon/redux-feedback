import React, {Component} from 'react';
import {connect} from 'react-redux';

class Understanding extends Component {


  nextHandler = event => {
    console.log("you clicked the next button");

    this.props.history.push("/Supported");
  };

    render() {

            return(
                <div>
                   <h1>Hello From Feeling</h1>
        <p>
          Welcome to your daily feedback. Please use a scale of 1 to 5 to describe to your overseers the level of understanding you have for your punishment, Where a score of 1
          will represent your complete denial of your soul's failings, and where a score of 5 represents
          complete and shameful regret for your transgressions.
          Please Click the NEXT button to proceed
        </p>
        <button onClick={this.nextHandler}>NEXT</button>
      </div>

            )

    }

}

export default connect()(Understanding);