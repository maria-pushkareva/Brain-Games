import readlineSync from 'readline-sync';
import { getRandomNum, getGreatestCommonDevisor } from '../utilities.js';

const description = 'Find the greatest common divisor of given numbers.';

const receiveAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const playOneRound = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 50);

  const question = `${num1} ${num2}`;

  const answer = receiveAnswer(question);
  const correctAnswer = getGreatestCommonDevisor(num1, num2).toString();

  if (answer === correctAnswer) {
    console.log('Correct!');
  } else { console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`); }
  return (answer === correctAnswer);
};

export { playOneRound, description };
