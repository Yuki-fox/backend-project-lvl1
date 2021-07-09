import readlineSync from 'readline-sync';

const name = [];
function sayHello() {
  name[0] = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name[0]}!`);
}

export { sayHello, name };
