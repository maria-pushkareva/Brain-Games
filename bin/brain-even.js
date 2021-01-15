#!/usr/bin/env node
import askName from '../src/cli.js';
import playGame from '../src/even-game.js';

console.log('Welcome to the Brain Games!');

const name = askName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const result = playGame();

if (result) {
  console.log(`Congratulations, ${name}!`);
}
if (!result) {
  console.log(`Let's try again, ${name}!`);
}
