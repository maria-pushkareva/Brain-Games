import { getRandomNum } from '../utilities.js';

export const getRandom = () => {
  const firstNum = getRandomNum(1, 100);
  const numDifference = getRandomNum(1, 10);
  const rayLength = getRandomNum(6, 11);
  const ray = [firstNum];

  for (let i = 1; i < rayLength; i += 1) {
    ray.push(firstNum + (i * numDifference));
  }
  const missingNumber = getRandomNum(0, (rayLength - 1));
  return { ray, missingNumber };
};

export const getQuestion = ({ ray, missingNumber }) => {
  const rayWithHole = [];
  for (let i = 0; i < ray.length; i += 1) {
    if (i === missingNumber) {
      rayWithHole.push('..');
    } else { rayWithHole.push(ray[i]); }
  }
  return rayWithHole.join(' ');
};

export const getCorrectAnswer = ({ ray, missingNumber }) => ray[missingNumber].toString();

export const description = 'What number is missing in the progression?';
