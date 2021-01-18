import { isEven, getRandomNum } from '../utilities.js';

export const getRandom = () => getRandomNum(1, 100);
export const getQuestion = (num) => num;
export const getCorrectAnswer = (num) => isEven(num);

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';
