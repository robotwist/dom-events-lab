const calculator = document.querySelector('#calculator'); //select calc id
const display = document.querySelector('.display'); // Get display element
let currentNumber = ''; // Store current number being entered
let previousNumber = ''; // Store previous number for calculations
let operation = '+, -, *, /'; // Store pending operation (+, -, *, /)

function calculate(num1, num2, op) { //define calc funct
  if (op === '+') {
    return parseFloat(num1) + parseFloat(num2); //return string as num
  } else if (op === '-') {
    return parseFloat(num1) - parseFloat(num2);
  } else if (op === '*') {
    return parseFloat(num1) * parseFloat(num2);
  } else if (op === '/') {
    return parseFloat(num1) / parseFloat(num2);
  }  if (parseFloat(num2) === 0); //div by 0 handling
      return 'Error!'
  } 
  // still need  other error handling

calculator.addEventListener('click', (event) => { //upon click target text
  const buttonText = event.target.innerText; //call this buttonText

  if (/\d/.test(buttonText)) { //est 0-9 as options
    currentNumber += buttonText; //then add to current number
    display.textContent = currentNumber; //update display to num clicked
  } else if (buttonText === 'C') { // unless Clear button pressed
    currentNumber = ''; //clear current
    previousNumber = ''; //clear previous
    operation = null; //clear current operation
    display.textContent = '0'; // Clear the display to 0
  } else if (['+', '-', '*', '/'].includes(buttonText)) { // if Operator buttons
    operation = buttonText; //set current op as button text
    previousNumber = currentNumber; //store current as previous
    currentNumber = ''; // Reset current number for next input
  } else if (buttonText === '=') { // Equals button
    if (currentNumber && previousNumber && operation) {
      const result = calculate(previousNumber, currentNumber, operation);
      display.textContent = result; //update display to show result
      currentNumber = result.toString(); // Update current number for next calculation
      previousNumber = ''; //clear
      operation = null; //clear
    }
  }
});
