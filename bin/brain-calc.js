#!/usr/bin/env node
import { sayHello } from '../src/cli.js';
import brainCalc from '../src/games/calc.js';

console.log('Welcome to the Brain Games!');
sayHello();
brainCalc();
