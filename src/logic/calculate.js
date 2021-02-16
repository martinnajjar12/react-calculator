import operate from './operate';

let newCalculation = false;

const calculate = (data, btnName) => {
  let { total, next, operation } = data;
  const operators = ['+', '×', '−', '÷'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  switch (btnName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;

    case '+/-':
      if (total) (total *= (-1));
      if (next) (next *= (-1));
      break;

    case '%':
      operation = btnName;
      operate(total, next, operation);
      break;

    case '=':
      if (total && next && operation) {
        newCalculation = true;
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
      break;

    case '.':
      if (next) {
        if (next.includes('.')) {
          return {};
        }
        return { next: `${next}.` };
      }
      if (operation) {
        return { next: '0.' };
      }
      if (total) {
        if (total.includes('.')) {
          return {};
        }
        return { total: `${total}.` };
      }
      return { total: '0.' };

    default:
      break;
  }

  if ((total && next && operation) && operators.includes(btnName)) {
    total = operate(total, next, operation);
    next = null;
    operation = '=';
  }

  if (operators.includes(btnName)) {
    operation = btnName;
  } else if (operation && numbers.includes(btnName)) {
    next = next ? next + btnName : btnName;
  } else if (newCalculation === true && numbers.includes(btnName)) {
    total = btnName;
  } else if (numbers.includes(btnName)) {
    total = total ? total + btnName : btnName;
  }
  return { total, next, operation };
};

export default calculate;
