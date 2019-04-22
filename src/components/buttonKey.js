import React, { Component } from "react";
import { connect } from "react-redux";

class ButtonKey extends Component {
  render() {
    return (
      <div
        className="buttonKey"
        onClick={() => this.props.executeKey(this.props.name)}
      >
        {this.props.name}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    operandOne: state.operandOne,
    operator: state.operator,
    operandTwo: state.operandTwo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    executeKey: val => dispatch({ type: "EXECUTE_KEY", value: val })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonKey);
