#!/usr/bin/env node
import { sayHello } from '../src/cli.js';
import gcd from '../src/games/gcd.js';

console.log('Welcome to the Brain Games!');
sayHello();
gcd();
