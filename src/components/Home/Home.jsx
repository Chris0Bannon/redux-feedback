import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return <h1>Hello From Home</h1>;
  }
}

export default connect()(Comments);
