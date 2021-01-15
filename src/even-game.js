import readlineSync from 'readline-sync';

const isEven = (num) => ((num % 2) === 0 ? 'yes' : 'no');

// сonst getRandomInteger = () => (Math.floor(Math.random() * 100) + 1);

const receiveAnswer = (num) => {
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const playOneNum = () => {
  const num = (Math.floor(Math.random() * 100) + 1);
  const answer = receiveAnswer(num).toLowerCase();
  const correctAnswer = isEven(num);
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else { console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`); }
  return (answer === correctAnswer);
};

const playGame = () => {
  let i = 1;
  while (i <= 3) {
    const oneRound = playOneNum();
    if (!oneRound) {
      break;
    }
    i += 1;
  }

  if (i > 3) {
    return true;
  }
  return false;
};

export default playGame;
