let calculatorFunc = require("./controller");

const initialState = {
  operandOne: "",
  operator: "",
  operandTwo: ""
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "EXECUTE_KEY":
      let obj = calculatorFunc(
        newState.operandOne,
        newState.operator,
        newState.operandTwo,
        action.value.toString()
      );
      newState.operandOne = obj.operandOne;
      newState.operator = obj.operator;
      newState.operandTwo = obj.operandTwo;
      break;
  }
  return newState;
};

export default reducer;
