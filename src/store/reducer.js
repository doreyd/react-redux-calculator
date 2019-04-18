const initialState = {
  operandOne: "",
  operator: "",
  operandTwo: ""
};

// determining which operation is to be applied
const pickOperation = op => {
  let functionToUse;
  if (op === "+") functionToUse = (a, b) => a + b;
  if (op === "-") functionToUse = (a, b) => a - b;
  if (op === "x") functionToUse = (a, b) => a * b;
  if (op === "/") functionToUse = (a, b) => a / b;
  return functionToUse;
};

// compute the final result
const computedValue = usedState =>
  pickOperation(usedState.operator)(
    parseFloat(usedState.operandOne),
    parseFloat(usedState.operandTwo)
  ).toString();

// change sign of operand
const plusMinusFunc = operandOriginal => {
  let operandFinal;
  if (operandOriginal === "") operandFinal = "-";
  else if (operandOriginal === "-") operandFinal = "";
  else operandFinal = (-parseFloat(operandOriginal)).toString();
  return operandFinal;
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    // add to, take from and clear the first operand
    case "OPERAND_ONE":
      if (action.value !== "." || !newState.operandOne.includes("."))
        newState.operandOne += action.value;
      break;
    case "REDUCE_OPERAND_ONE":
      newState.operandOne = newState.operandOne.slice(0, -1);
      break;
    case "CLEAR_OPERAND_ONE":
      newState.operandOne = "";
      break;

    // add to, take from and clear the operator
    case "OPERATOR":
      newState.operator = action.value;
      break;
    case "REDUCE_OPERATOR":
      newState.operator = "";
      break;
    case "CLEAR_OPERATOR":
      newState.operator = "";
      break;

    // add to, take from and clear the second operand
    case "OPERAND_TWO":
      if (action.value !== "." || !newState.operandTwo.includes("."))
        newState.operandTwo += action.value;
      break;
    case "REDUCE_OPERAND_TWO":
      newState.operandTwo = newState.operandTwo.slice(0, -1);
      break;
    case "CLEAR_OPERAND_TWO":
      newState.operandTwo = "";
      break;

    // clear all and show result
    case "CLEAR_ALL":
      newState.operandOne = "";
      newState.operator = "";
      newState.operandTwo = "";
      break;
    case "TOTAL":
      newState.operandOne =
        newState.operandTwo !== ""
          ? computedValue(newState)
          : newState.operandOne;
      newState.operator = "";
      newState.operandTwo = "";
      break;

    // change sign of active operand
    case "PLUS_MINUS":
      if (newState.operator === "")
        newState.operandOne = plusMinusFunc(newState.operandOne);
      else newState.operandTwo = plusMinusFunc(newState.operandTwo);
      break;
  }
  return newState;
};

export default reducer;
