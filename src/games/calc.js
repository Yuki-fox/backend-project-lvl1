import readlineSync from 'readline-sync';
import { answersCore, randomNumber } from '../index.js';

function adition(a, b) {
  return a + b;
}
function substraction(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
const operators = [adition, substraction, multiplication];
const operatorIcons = ['+', '-', '*'];
function calcCore() {
  const numberOne = randomNumber(0, 100);
  const numberTwo = randomNumber(0, 20);
  const operatorRandom = randomNumber(0, 2);
  const currentOperator = operators[operatorRandom];
  const answer = readlineSync.question(`Question: ${numberOne} ${operatorIcons[operatorRandom]} ${numberTwo}\n`);
  const answerCheck = String(currentOperator(numberOne, numberTwo));
  return [answer, answerCheck];
}
function brainCalc() {
  console.log('What is the result of the expression?');
  answersCore(calcCore);
}
export default brainCalc;
