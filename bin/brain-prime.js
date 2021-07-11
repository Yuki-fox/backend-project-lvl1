#!/usr/bin/env node
import { sayHello } from '../src/cli.js';
import brainPrime from '../src/games/prime.js';

console.log('Welcome to the Brain Games!');
sayHello();
brainPrime();
