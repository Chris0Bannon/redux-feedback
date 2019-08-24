import React, {Component} from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {


    render() {

            return(
                <h1>Hello From Feeling</h1>
            )

    }

}

export default connect()(Feeling);