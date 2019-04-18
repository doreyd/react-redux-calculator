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
