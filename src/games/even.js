import readlineSync from 'readline-sync';
import _ from 'lodash';
import { name } from '../cli.js';

function randomNumber(min, max) {
  return _.random(min, max);
}
function isEven(number) {
  return (number % 2 === 0);
}
function brainEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 1;
  while (i <= 3) {
    const playableNumber = randomNumber(1, 100);
    const evenCheck = isEven(playableNumber);
    const answer = readlineSync.question(`Question: ${playableNumber}\n`);
    const answerCheck = evenCheck ? 'yes' : 'no';
    if (answer === answerCheck) {
      console.log(`Your answer: ${answer}`);
      i += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${answerCheck}". \nLet's try again, ${name[0]}!`);
      i = 5;
    }
  }
  if (i === 4) console.log(`Congratulations, ${name[0]}!`);
}
export default brainEven;
