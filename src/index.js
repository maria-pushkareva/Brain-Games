import readlineSync from 'readline-sync';
import askName from './cli.js';

const roundCounter = 3;

const receiveAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const playFullGame = (getRandom, getQuestion, getCorrectAnswer, description) => {
  console.log('Welcome to the Brain Games!');
  const name = askName();

  console.log(description);

  let currentRound = 1;

  do {
    const random = getRandom();
    const question = getQuestion(random);
    const answer = receiveAnswer(question);
    const correctAnswer = getCorrectAnswer(random);

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      break;
    }

    console.log('Correct!');
    currentRound += 1;
  } while (currentRound <= roundCounter);

  if (currentRound > roundCounter) {
    console.log(`Congratulations, ${name}!`);
  } else { console.log(`Let's try again, ${name}!`); }
};

export default playFullGame;
