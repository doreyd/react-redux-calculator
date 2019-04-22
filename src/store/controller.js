module.exports = function(operandOne, operator, operandTwo, value) {
  // change sign of operand
  const changeSign = oldValue => {
    let newValue;
    if (oldValue === "") newValue = "-";
    else if (oldValue === "-") newValue = "";
    else newValue = (-parseFloat(oldValue)).toString();
    return newValue;
  };

  // concatenating to operands
  const concatVal = (elem, val) => {
    let newElem;
    if (val !== "." || !elem.includes(".")) newElem = elem += val;
    else newElem = elem;
    return newElem;
  };

  const processDigit = () => {
    if (operator === "") operandOne = concatVal(operandOne, value);
    else operandTwo = concatVal(operandTwo, value);
  };

  // erasing the last character, last operand or all operands
  const eraseLastCharacter = elem => elem.slice(0, -1);
  const eraseOperand = () => "";
  const eraseAll = () => {
    operandOne = "";
    operator = "";
    operandTwo = "";
  };

  const coreEraseFunc = funcApplied => {
    if (operandTwo !== "") operandTwo = funcApplied(operandTwo);
    else {
      if (operator !== "") operator = funcApplied(operator);
      else {
        if (operandOne !== "") operandOne = funcApplied(operandOne);
      }
    }
  };

  const eraseLastCharac = () => coreEraseFunc(eraseLastCharacter);
  const eraseLastOperand = () => coreEraseFunc(eraseOperand);

  // change sign of last operand
  const plusMinus = () => {
    if (operator === "") operandOne = changeSign(operandOne);
    else operandTwo = changeSign(operandTwo);
  };

  // change operator
  const changeOperator = () => (operator = value);

  //
  const total = () => {
    operandOne = operandTwo === "" ? operandOne : computedValue();
    operator = "";
    operandTwo = "";
  };

  let digitLib = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  let operationLib = [
    ["+", changeOperator],
    ["-", changeOperator],
    ["x", changeOperator],
    ["/", changeOperator],
    ["=", total],
    ["+-", plusMinus],
    ["C", eraseAll],
    ["CE", eraseLastOperand],
    ["<=", eraseLastCharac]
  ];

  const pickOperation = op => {
    let functionToUse;
    if (op === "+") functionToUse = (a, b) => a + b;
    else if (op === "-") functionToUse = (a, b) => a - b;
    else if (op === "x") functionToUse = (a, b) => a * b;
    else if (op === "/") functionToUse = (a, b) => a / b;
    return functionToUse;
  };

  // compute the final result
  const computedValue = () =>
    pickOperation(operator)(
      parseFloat(operandOne),
      parseFloat(operandTwo)
    ).toString();

  const processOperation = val => {
    operationLib.forEach(x => {
      if (x[0] === val) x[1]();
    });
  };

  const executeKeyValue = () => {
    if (digitLib.includes(value)) processDigit();
    else processOperation(value);
  };
  executeKeyValue();
  return {
    operandOne: operandOne,
    operator: operator,
    operandTwo: operandTwo
  };
};
