import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comments extends Component {


    render() {

            return(
                <h1>Hello From Comments</h1>
            )

    }

}

export default connect()(Comments);