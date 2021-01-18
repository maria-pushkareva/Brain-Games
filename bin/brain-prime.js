#!/usr/bin/env node
import {
    getRandom, getQuestion, getCorrectAnswer, description,
  } from '../src/games/prime-game.js';
  import playFullGame from '../src/index.js';
  
  playFullGame(getRandom, getQuestion, getCorrectAnswer, description);
  