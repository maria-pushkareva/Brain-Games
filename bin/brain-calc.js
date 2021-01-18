#!/usr/bin/env node
import {
  getRandom, getQuestion, getCorrectAnswer, description,
} from '../src/games/calc-game.js';
import playFullGame from '../src/index.js';

playFullGame(getRandom, getQuestion, getCorrectAnswer, description);
