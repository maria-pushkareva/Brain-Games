import askName from './cli.js';

const roundCounter = 3;

const play = (func) => {
  let currentRound = 1;
  do {
    const oneRound = func();
    if (!oneRound) {
      break;
    }
    currentRound += 1;
  } while (currentRound <= roundCounter);

  if (currentRound > 3) {
    return true;
  }
  return false;
};

const playFullGame = (func, description) => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(description);

  const result = play(func);

  if (result) {
    console.log(`Congratulations, ${name}!`);
  }
  if (!result) {
    console.log(`Let's try again, ${name}!`);
  }
};

export default playFullGame;
