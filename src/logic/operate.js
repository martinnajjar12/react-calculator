import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const bigNumberOne = new Big(numberOne);
  const bigNumberTwo = new Big(numberTwo);
  let total;
  switch (operation) {
    case '+':
      total = bigNumberOne + bigNumberTwo;
      break;
    case '−':
      total = bigNumberOne - bigNumberTwo;
      break;
    case '÷':
      total = bigNumberOne / bigNumberTwo;
      break;
    case '×':
      total = bigNumberOne * bigNumberTwo;
      break;
    case '+/-':
      total = numberTwo ? bigNumberTwo * -1 : bigNumberOne * -1;
      break;
    case '%':
      total = numberTwo ? bigNumberTwo / 100 : bigNumberOne / 100;
      break;
    case 'AC':
      total = 0;
      break;
    default:
      break;
  }
  return total;
};

export default operate;
