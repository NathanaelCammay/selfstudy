// creating a calculator class

class Calculator {
    // constructor to set value of previous and current text elements
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement;
      this.currentOperandTextElement = currentOperandTextElement;
      this.clear();
    }
    //clear method will clear
    clear() {
      this.currentOperand = "";
      this.previousOperand = "";
      this.operation = undefined;
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  
    // appendNumber ensures that the current number in the view is now the operand
    appendNumber(number) {
      if (number === "." && this.currentOperand.includes(".")) {
        return; // returns nothing if conditions are met
      }
  
      this.currentOperand = this.currentOperand.toString() + number.toString();
      //treats number as string and appends
      // instead of using a mathematical compution
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === "") {
        return; // makes sure you don't execute function past return word if currentOperand is empty
      }
  
      if (this.previousOperand !== "") {
        this.compute(); // automatically computes if prevOperand isn't empty
      }
  
      this.operation = operation; //tells calculator which calculator to use
      this.previousOperand = this.currentOperand; // tells calculator to move currentOperand to previousOperand value
      this.currentOperand = ""; // clears the currentOperand value
    }
  
    compute() {
      let computation;
      const prev = parseFloat(this.previousOperand); // converting string to number
      const current = parseFloat(this.currentOperand); // converting string to number
      if (isNan(prev) || isNan(current)) {
        return;
      }
  
      //this switch statement goes through every computation based on the button pressed
      switch (this.operation) {
        case "+":
          computation = prev + current;
          break;
        case "-":
          computation = prev - current;
          break;
        case "*":
          computation = prev * current;
          break;
        case "÷":
          computation = prev / current;
          break;
  
        default:
          return;
      }
  
      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = "";
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString();
      const integerDigits = parseFloat(stringNumber.split(".")[0]);
      const decimalDigits = stringNumber.split(".")[1];
  
      let integerDisplay;
      if (isNaN(integerDigits)) {
        integerDisplay = "";
      } else {
        integerDisplay = integerDigits.toLocaleString("en", {
          maximumFractionDigits: 0,
        });
      }
  
      if (decimalDigits !== null) {
        return `${integerDisplay}.${decimalDigits}`;
      } else {
        return integerDisplay;
      }
    }
  
    //will update display whenever relative buttons are pressed
    updateDisplay() {
      this.currentOperandTextElement.innerText = this.getDisplayNumber(
        this.currentOperand
      );
  
      // if operation is present display prev text element
      if (this.operation !== null) {
        this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
          this.previousOperand
        )} ${this.operation}`;
        //appends operation symbol to previous number
      } else {
        this.previousOperandTextElement.innerText = "";
      }
    }
  }
  
  // storing the html objects into variables
  const numberButtons = document.querySelectorAll("[data-number]");
  const operationButtons = document.querySelectorAll("[data-operation]");
  const equalsButton = document.querySelector("[data-equals]");
  const deleteButton = document.querySelector("[data-delete]");
  const allClearButton = document.querySelector("[data-all-clear]");
  const previousOperandTextElement = document.querySelector(
    "[data-previous-operand]"
  );
  const currentOperandTextElement = document.querySelector(
    "[data-current-operand]"
  );
  
  // make above variables operate on calculator
  
  // create instance object of calculator class
  
  const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
  );
  
  //CONFIGURE BUTTON CLICK EVENTS
  
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // listens to whenever we click on a number button
      calculator.appendNumber(button.innerText); // add number of whatever is inside button
      calculator.updateDisplay(); // calla update method from Calculator class
    });
  });
  
  operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // listens to whenever we click on an operation button
      calculator.chooseOperation(button.innerText); // add number of whatever is inside button
      calculator.updateDisplay(); // calla update method from Calculator class
    });
  });
  
  equalsButton.addEventListener("click", (button) => {
    calculator.compute(); // get computed value returned once compute executes
    calculator.updateDisplay(); //update display with computed value
  });
  
  allClearButton.addEventListener("click", (button) => {
    calculator.clear(); // clears operation window
    calculator.updateDisplay(); //update display
  });
  
  allClearButton.addEventListener("click", (button) => {
    calculator.delete(); // deletes last character when pressed
    calculator.updateDisplay(); //update display
  });