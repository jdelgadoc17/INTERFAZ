import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Cuál es tu nombre? ', (userName: string) => {
  console.log(`Hola ${userName}`);

  rl.close();
});
