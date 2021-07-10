import readlineSync from 'readline-sync';
import _ from 'lodash';
import answersCore from '../index.js';

function randomNumber(min, max) {
  return _.random(min, max);
}
function isEven(number) {
  return (number % 2 === 0);
}
function brainEvenCore() {
  const result = [];
  const playableNumber = randomNumber(1, 100);
  const evenCheck = isEven(playableNumber);
  const answer = readlineSync.question(`Question: ${playableNumber}\n`);
  const answerCheck = evenCheck ? 'yes' : 'no';
  result.push(answer, answerCheck);
  return result;
}
function brainEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  answersCore(brainEvenCore);
}

export default brainEven;
