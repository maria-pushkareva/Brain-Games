#!/usr/bin/env node
import { playOneRound, description } from '../src/games/calc-game.js';
import playFullGame from '../src/index.js';

playFullGame(playOneRound, description);
