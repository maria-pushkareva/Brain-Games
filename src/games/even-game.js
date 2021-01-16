import readlineSync from 'readline-sync';
import { isEven, getRandomNum } from '../utilities.js';
import playFullGame from '../index.js';

// сonst getRandomInteger = () => (Math.floor(Math.random() * 100) + 1);

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const receiveAnswer = (num) => {
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const playOneRound = () => {
  const num = getRandomNum(1, 100);
  const answer = receiveAnswer(num).toLowerCase();
  const correctAnswer = isEven(num);
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else { console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`); }
  return (answer === correctAnswer);
};

const start = () => playFullGame(playOneRound, description);

export default start;
