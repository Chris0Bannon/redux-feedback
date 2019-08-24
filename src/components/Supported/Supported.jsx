import React, {Component} from 'react':
import {connection} from 'react-redux';

class Supported extends Component {


    render() {

            return(
                <h1>Hello From Supported</h1>
            )

    }

}

export default connect()(Supported);