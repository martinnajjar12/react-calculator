import operate from './operate';

const operations = ['+', '−', '×', '÷', '%', 'AC', '=', '+/-'];

const calculate = (data, btnName) => {
  let newTotal;
  const { total, next, operation } = data;
  if (operations.includes(btnName)) {
    newTotal = operate(total, next, btnName);
    return { newTotal, next, btnName };
  }
  const newNext = btnName;
  return { total, newNext, operation };
};

export default calculate;
