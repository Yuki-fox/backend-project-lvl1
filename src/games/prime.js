import readlineSync from 'readline-sync';
import { answersCore, randomNumber } from '../index.js';

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function primeCore() {
  const playableNumber = randomNumber(1, 1000);
  const primeCheck = isPrime(playableNumber);
  const answer = readlineSync.question(`Question: ${playableNumber}\n`);
  const answerCheck = primeCheck ? 'yes' : 'no';
  return [answer, answerCheck];
}
function brainPrime() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  answersCore(primeCore);
}

export default brainPrime;
