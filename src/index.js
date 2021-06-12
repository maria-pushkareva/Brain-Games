import readlineSync from 'readline-sync';
import askName from './cli.js';

const roundCounter = 3;

const receiveAnswer = () => readlineSync.question('Your answer: ');

const playFullGame = (getRandom, getQuestion, getCorrectAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  const name = askName();

  console.log(description);

  let currentRound = 0;

  while (currentRound < roundCounter) {
    currentRound += 1;
    const random = getRandom();
    const question = getQuestion(random);
    console.log(`Question: ${question}`);
    const answer = receiveAnswer();
    const correctAnswer = getCorrectAnswer(random);

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      break;
    }

    console.log('Correct!');
  }

  if (currentRound === roundCounter) {
    console.log(`Congratulations, ${name}!`);
  } else { console.log(`Let's try again, ${name}!`); }
};

export default playFullGame;
