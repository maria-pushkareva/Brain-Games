import { getRandomNum, isPrime } from '../utilities.js';

export const getRandom = () => getRandomNum(1, 100);

export const getQuestion = (num) => num;

export const getCorrectAnswer = (num) => isPrime(num);

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
