import React, {Component} from 'react';
import {connect} from 'react-redux';

class Understanding extends Component {


    render() {

            return(
                <h1>Hello From Understanding</h1>
            )

    }

}

export default connect()(Understanding);