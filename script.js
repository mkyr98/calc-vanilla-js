const clrButton = document.getElementById("clr");
clrButton.addEventListener("click", () => {
  first.innerText = "";
  operand.innerText = "";
  second.innerText = "";
});

const plusMinus = document.getElementById("plusMinus");
plusMinus.addEventListener("click", () => {
  let currentNumber;
  if (operand.innerText) {
    currentNumber = +second.innerText;
    second.innerText = (-currentNumber).toString();
  } else {
    currentNumber = +first.innerText;
    first.innerText = (-currentNumber).toString();
  }
});

const first = document.getElementById("first");
const second = document.getElementById("second");
const operand = document.getElementById("operand");

const operands = Array.from(document.getElementsByClassName("operand"));
operands.forEach((button) => {
  button.addEventListener("click", () => {
    applyOperand(button.innerText);
  });
});

const digits = Array.from(document.getElementsByClassName("number"));
digits.forEach((number) => {
  number.addEventListener("click", () => {
    setNumber(number.innerText);
  });
});

const setNumber = (digit) => {
  if (operand.innerText) {
    if (digit !== "0" || second.innerText.length) second.innerText += digit;
  } else {
    if (digit !== "0" || first.innerText.length) first.innerText += digit;
  }
};

const applyOperand = (operandSymbol) => {
  if (second.innerText.length) {
    let result;
    switch (operand.innerText) {
      case "*":
        result = +first.innerText * +second.innerText;
        break;
      case "/":
        result = +first.innerText / +second.innerText;
        break;
      case "+":
        result = +first.innerText + +second.innerText;
        break;
      case "-":
        result = +first.innerText - +second.innerText;
        break;
    }
    first.innerText = result.toString();
    second.innerText = "";
  }
  if (first.innerText.length) {
    if (operandSymbol !== "=") {
      operand.innerText = operandSymbol;
    } else {
      operand.innerText = "";
    }
    second.innerText = "";
  }
};

