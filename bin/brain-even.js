#!/usr/bin/env node
import { sayHello } from '../src/cli.js';
import { brainEven } from '../src/games/even.js';

console.log('Welcome to the Brain Games!');
sayHello();
brainEven();
