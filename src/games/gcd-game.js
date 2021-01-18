import { getRandomNum, getGreatestCommonDevisor } from '../utilities.js';

export const getRandom = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  return [num1, num2];
};

export const getQuestion = ([num1, num2]) => `${num1} ${num2}`;

export const getCorrectAnswer = (nums) => getGreatestCommonDevisor(nums).toString();

export const description = 'Find the greatest common divisor of given numbers.';
