import { getRandomNum, calculate, chooseOperator } from '../utilities.js';

export const getRandom = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const operator = chooseOperator(getRandomNum(1, 3));
  console.log([num1, operator, num2]);
  return [num1, operator, num2];
};

export const getQuestion = ([num1, operator, num2]) => `${num1} ${operator} ${num2}`;

export const getCorrectAnswer = (expression) => calculate(expression).toString();

export const description = 'What is the result of the expression?';
