import React, { Component } from "react";
import { connect } from "react-redux";

class Screen extends Component {
  render() {
    return <div className="screen">{this.props.screenValue}</div>;
  }
}
const mapStateToProps = state => {
  return {
    screenValue: `${state.operandOne} ${state.operator} ${state.operandTwo}`
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // addValue: () => dispatch("ADD_VALUE")
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen);
