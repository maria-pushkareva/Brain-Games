#!/usr/bin/env node
import {
  getRandom, getQuestion, getCorrectAnswer, description,
} from '../src/games/even-game.js';
import playFullGame from '../src/index.js';

playFullGame(getRandom, getQuestion, getCorrectAnswer, description);
