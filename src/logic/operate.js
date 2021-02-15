import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let intOne;
  let intTwo;
  let total;
  if (numberOne) {
    const bigNumberOne = new Big(numberOne);
    intOne = parseInt(bigNumberOne, 10);
  }
  if (numberTwo) {
    const bigNumberTwo = new Big(numberTwo);
    intTwo = parseInt(bigNumberTwo, 10);
  }

  switch (operation) {
    case '+':
      total = intOne + intTwo;
      break;
    case '−':
      total = intOne - intTwo;
      break;
    case '÷':
      total = intOne / intTwo;
      break;
    case '×':
      total = intOne * intTwo;
      break;
    case '%':
      total = numberTwo ? intTwo / 100 : intOne / 100;
      break;
    case '=':
      return parseInt(`${intOne} ${operation} ${intTwo}`, 10);
    default:
      break;
  }
  return total.toString();
};

export default operate;
