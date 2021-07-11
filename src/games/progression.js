import readlineSync from 'readline-sync';
import { answersCore, randomNumber } from '../index.js';

function makeProgression() {
  const progression = [];
  const intervalStart = randomNumber(1, 100);
  const difference = randomNumber(1, 20);
  let currentItem = intervalStart;
  for (let i = 0; i <= 9; i += 1) {
    currentItem += difference;
    progression.push(currentItem);
  }
  return progression;
}
function progressionCore() {
  const progression = makeProgression();
  const randomCount = randomNumber(0, 9);
  const pickedElement = progression[randomCount];
  progression[randomCount] = '..';
  const answer = readlineSync.question(`Question: ${progression.join(' ')}\n`);
  const answerCheck = String(pickedElement);
  return [answer, answerCheck];
}
function brainProgression() {
  console.log('What number is missing in the progression?');
  answersCore(progressionCore);
}
export default brainProgression;
