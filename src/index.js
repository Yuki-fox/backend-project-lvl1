import { name } from './cli.js';

function randomNumber(min, max) {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
function answersCore(gameFunction) {
  let i = 1;
  while (i <= 3) {
    const [answer, answerCheck] = gameFunction();
    console.log(`Your answer: ${answer}`);
    if (answer === answerCheck) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${answerCheck}". \nLet's try again, ${name[0]}!`);
      i = 5;
    }
  }
  if (i === 4) console.log(`Congratulations, ${name[0]}!`);
}
export { answersCore, randomNumber };
