if (this.props.name === "=") {
  this.props.addition();
} else if (this.props.name === "+-") {
  this.props.plusMinus();
} else if (this.props.name === "C") {
  this.props.clearAll();
} else if (this.props.name === "CE") {
  let elem = this.props;
  eraseLast(elem);
} else if (this.props.name === "<=") {
  let elem = this.props;
  backErase(elem);
}

let elem = this.props;
let funcLib = [
  ["=", elem.addition],
  ["+-", elem.plusMinus],
  ["C", elem.clearAll],
  ["CE", elem.eraseLast],
  ["<=", elem.backErase]
];

let obj = {
  operandOne: state.operandOne,
  operator: state.operator,
  operandTwo: state.operandTwo
};

export default [
  ["CE",eraseLastOperand , "func"],
  ["C",eraseAll , "func"],
  ["<=", eraseLastDigit, "func"],
  ["/", concate,"op"],
  [7, concate, "num"],
  [8, concate,"num"],
  [9, concate,"num"],
  ["x", concate,"op"],
  [4, concate,"num"],
  [5, concate,"num"],
  [6, concate,"num"],
  ["-", concate,"op"],
  [1, concate,"num"],
  [2, concate,"num"],
  [3, concate,"num"],
  ["+", concate,"op"],
  ["+-", plusMinus, "mod"],
  [0, concate,"num"],
  [".", concate,"num"],
  ["=", total, "func"]
];



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