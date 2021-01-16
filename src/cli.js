import readlineSync from 'readline-sync';

const askName = () => {
  const answer = readlineSync.question('May I have your name? ');
  let name;
  if (answer.toLowerCase() === 'no') {
    name = 'Molly';
    console.log(`It's a pity! But I will call you ${name}.`);
  } else { name = answer; }
  console.log(`Hello, ${name}!`);
  return name;
};

export default askName;
