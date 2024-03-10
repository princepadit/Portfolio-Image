// Get the calculator display and buttons
const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.calculator-display');
const buttons = calculator.querySelector('.calculator-buttons');

// Add an event listener to the buttons container
button.addEventListener('click', (event) => {
  // Get the button that was clicked
  const button = event.target;

  // If the button is not a button element, exit early
  if (!button.matches('button')) {
    return;
  }

  // Get the button's value and type
  const buttonValue = button.getAttribute('data-value');
  const buttonType = button.getAttribute('data-type');

  // Handle number buttons
  if (buttonType === 'number') {
    if (display.textContent === '0') {
      display.textContent = buttonValue;
    } else {
      display.textContent += buttonValue;
    }
  }

  // Handle operator buttons
  if (buttonType === 'operator') {
    // Get the previous operator and operand from the display
    const prevOperator = display.getAttribute('data-operator');
    const prevOperand = parseFloat(display.getAttribute('data-operand'));

    // Get the current operand from the display
    const currentOperand = parseFloat(display.textContent);

    // Calculate the result based on the previous operator and operands
    let result;
    if (prevOperator === '+') {
      result = prevOperand + currentOperand;
    } else if (prevOperator === '-') {
      result = prevOperand - currentOperand;
    } else if (prevOperator === '*') {
      result = prevOperand * currentOperand;
    } else if (prevOperator === '/') {
      result = prevOperand / currentOperand;
    }

    // Display the result and store it as the previous operand
    display.textContent = result;
    display.setAttribute('data-operand', result);
  }

  // Handle clear button
  if (buttonType === 'clear') {
    display.textContent = '0';
    display.removeAttribute('data-operand');
    display.removeAttribute('data-operator');
  }

  // Handle decimal button
  if (buttonType === 'decimal') {
    if (!display.textContent.includes('.')) {
      display.textContent += '.';
    }
  }

  // Store the current operator in the display
  if (buttonType === 'operator') {
    display.setAttribute('data-operator', buttonValue);
    display.setAttribute('data-operand', parseFloat(display.textContent));
  }
});
