// 30
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trim());
}).on('close', function () {
  if (!input[0].includes('0')) return console.log(-1);
  const digitArr = input[0].split('').map((v) => +v);
  const digitSum = digitArr.reduce((acc, cur) => acc + cur, 0);
  if (digitSum % 3) return console.log(-1);

  const biggestNum = digitArr.sort((a, b) => b - a).join('');
  console.log(biggestNum);
});
