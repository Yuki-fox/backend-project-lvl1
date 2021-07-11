import readlineSync from 'readline-sync';
import { answersCore, randomNumber } from '../index.js';
import { isEven } from './even.js';

function getDivisor(a, b) {
  const array = [a, b];
  const [numberOne, numberTwo] = array.sort((c, d) => c - d);
  let divisor;
  if (numberTwo % numberOne === 0) return numberOne;
  let possibleDivisor = numberOne;
  possibleDivisor = !isEven(numberOne) ? ((numberOne - 1) / 2) : numberOne / 2;
  for (let i = possibleDivisor; i > 0; i -= 1) {
    if (numberOne % i === 0 && numberTwo % i === 0) {
      divisor = i;
      i = 0;
    }
  }
  return divisor;
}
function playableNumbers() {
  const firstNumber = randomNumber(1, 100);
  const secondNumber = randomNumber(1, 100);
  return [firstNumber, secondNumber];
}
function gcdCore() {
  let [firstNumber, secondNumber] = playableNumbers();
  while (getDivisor(firstNumber, secondNumber) === 1) {
    [firstNumber, secondNumber] = playableNumbers();
  }
  const answerCheck = String(getDivisor(firstNumber, secondNumber));
  const answer = readlineSync.question(`Question: ${firstNumber} ${secondNumber}\n`);
  return [answer, answerCheck];
}
function gcd() {
  console.log('Find the greatest common divisor of given numbers.');
  answersCore(gcdCore);
}
export default gcd;
