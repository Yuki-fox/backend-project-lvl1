import readlineSync from 'readline-sync';

function sayHello() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export default sayHello;
