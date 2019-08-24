import React, {Component} from 'react':
import {connection} from 'react-redux';

class Comments extends Component {


    render() {

            return(
                <h1>Hello From Review</h1>
            )

    }

}

export default connect()(Comments);