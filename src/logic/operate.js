import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let bigNumberOne;
  let bigNumberTwo;
  let total;
  if (numberOne) {
    bigNumberOne = new Big(numberOne);
  }
  if (numberTwo) {
    bigNumberTwo = new Big(numberTwo);
  }

  switch (operation) {
    case '+':
      total = bigNumberOne.plus(bigNumberTwo);
      break;
    case '−':
      total = bigNumberOne.minus(bigNumberTwo);
      break;
    case '÷':
      total = bigNumberOne.div(bigNumberTwo);
      break;
    case '×':
      total = bigNumberOne.times(bigNumberTwo);
      break;
    case '%':
      if (numberTwo === null) {
        total = bigNumberOne.div(100);
      } else {
        total = bigNumberTwo.div(100);
      }
      break;
    case '=':
      return parseInt(`${bigNumberOne} ${operation} ${bigNumberTwo}`, 10);
    default:
      break;
  }
  return total.toString();
};

export default operate;
