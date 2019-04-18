import React, { Component } from "react";
import ButtonKey from "./buttonKey";
import Screen from "./screen";
import keyBoard from "./keyboardList";

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Screen />
        {keyBoard.map(x => {
          return <ButtonKey key={x[0]} name={x[0]} keyType={x[1]} />;
        })}
      </div>
    );
  }
}

export default Calculator;
