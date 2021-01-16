import readlineSync from 'readline-sync';
import { getRandomNum, calculate, chooseOperator } from '../utilities.js';
import playFullGame from '../index.js';

// сonst getRandomInteger = () => (Math.floor(Math.random() * 100) + 1);

const description = 'What is the result of the expression?';

const receiveAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const playOneRound = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const operator = chooseOperator(getRandomNum(1, 3));

  const question = `${num1} ${operator} ${num2}`;

  const answer = receiveAnswer(question);
  const correctAnswer = calculate(num1, num2, operator).toString();

  if (answer === correctAnswer) {
    console.log('Correct!');
  } else { console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`); }
  return (answer === correctAnswer);
};

const start = () => playFullGame(playOneRound, description);

export default start;
