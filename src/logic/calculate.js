import operate from './operate';

let newCalculation = false;
let prevOperation;

const calculate = (data, btnName) => {
  let { total, next, operation } = data;
  const operators = ['+', '×', '−', '÷'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  switch (btnName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      newCalculation = false;
      break;

    case '+/-':
      if (next) {
        next *= -1;
        next = next.toString();
      } else if (total) {
        total *= -1;
        total = total.toString();
      }
      break;

    case '%':
      prevOperation = operation;
      operation = btnName;
      if (next) {
        next = operate(total, next, operation);
      } else {
        total = operate(total, next, operation);
      }
      break;

    case '=':
      if (total && next && operation) {
        newCalculation = true;
        if (prevOperation) {
          operation = prevOperation;
        }
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;

    case '.':
      if (next) {
        if (next.includes('.')) {
          return { total, next, operation };
        }
        return { total, next: `${next}.`, operation };
      }
      if (operation) {
        return { total, next: '0.', operation };
      }
      if (total) {
        if (total.includes('.')) {
          return { total, next, operation };
        }
        newCalculation = false;
        return { total: `${total}.`, next, operation };
      }
      return { total: '0.', next, operation };

    default:
      break;
  }

  if ((total && next && operation) && operators.includes(btnName)) {
    total = operate(total, next, operation);
    next = null;
  }

  if (operators.includes(btnName)) {
    operation = btnName;
  } else if (operation && numbers.includes(btnName)) {
    next = next ? next + btnName : btnName;
  } else if (newCalculation === true && numbers.includes(btnName)) {
    total = btnName;
    newCalculation = false;
  } else if (numbers.includes(btnName)) {
    total = total ? total + btnName : btnName;
  }
  return { total, next, operation };
};

export default calculate;
