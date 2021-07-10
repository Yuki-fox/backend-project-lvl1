import { name } from './cli.js';

function answersCore(gameFunction) {
  let i = 1;
  while (i <= 3) {
    const gameCallback = gameFunction();
    const answer = gameCallback[0];
    const answerCheck = gameCallback[1];
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
export default answersCore;
