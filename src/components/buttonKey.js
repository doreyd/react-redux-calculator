import React, { Component } from "react";
import { connect } from "react-redux";

let backErase = elem => {
  if (elem.operandTwo !== "") elem.reduceOperandTwo();
  else {
    if (elem.operator !== "") elem.reduceOperator();
    else {
      if (elem.operandOne !== "") elem.reduceOperandOne();
    }
  }
};

let eraseLast = elem => {
  if (elem.operandTwo !== "") elem.clearOperandTwo();
  else {
    if (elem.operator !== "") elem.clearOperator();
    else {
      if (elem.operandOne !== "") elem.clearOperandOne();
    }
  }
};

let funcLib = [
  ["=", elem => elem.total()],
  ["+-", elem => elem.plusMinus()],
  ["C", elem => elem.clearAll()],
  ["CE", elem => eraseLast(elem)],
  ["<=", elem => backErase(elem)]
];
const applyFuncLib = elem => {
  funcLib.forEach(x => {
    if (x[0] === elem.name) x[1](elem);
  });
};
class ButtonKey extends Component {
  executeKey = props => {
    let elem = this.props;
    if (elem.keyType === "num") {
      if (elem.operator === "") elem.changeOperandOne(elem.name);
      else elem.changeOperandTwo(elem.name);
    }
    if (elem.keyType === "op") elem.changeOperator(elem.name);
    applyFuncLib(elem);
  };

  render() {
    return (
      <div className="buttonKey" onClick={this.executeKey}>
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
    changeOperandOne: val => dispatch({ type: "OPERAND_ONE", value: val }),
    reduceOperandOne: () => dispatch({ type: "REDUCE_OPERAND_ONE" }),
    clearOperandOne: () => dispatch({ type: "CLEAR_OPERAND_ONE" }),
    changeOperator: val => dispatch({ type: "OPERATOR", value: val }),
    reduceOperator: () => dispatch({ type: "REDUCE_OPERATOR" }),
    clearOperator: () => dispatch({ type: "CLEAR_OPERATOR" }),
    changeOperandTwo: val => dispatch({ type: "OPERAND_TWO", value: val }),
    reduceOperandTwo: () => dispatch({ type: "REDUCE_OPERAND_TWO" }),
    clearOperandTwo: () => dispatch({ type: "CLEAR_OPERAND_TWO" }),
    clearAll: () => dispatch({ type: "CLEAR_ALL" }),
    plusMinus: () => dispatch({ type: "PLUS_MINUS" }),
    total: () => dispatch({ type: "TOTAL" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonKey);
