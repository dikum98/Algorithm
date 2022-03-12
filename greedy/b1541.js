// 잃어버린 괄호
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trim());
}).on('close', function () {
  const arrExp = input[0].split('-');

  const resultValue = arrExp
    .map((exp) => exp.split('+').reduce((acc, cur) => acc + +cur, 0))
    .reduce((acc, cur) => acc - cur);

  console.log(resultValue);
});
