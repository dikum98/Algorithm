// 더하기 사이클
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trim());
}).on('close', function () {
  let n = +input[0];
  if (n < 10) n *= 10;
  let newNum = -1;
  let count = 0;
  let oneUnit = (Math.floor(n / 10) + (n % 10)) % 10;
  let tenUnit = (n % 10) * 10;

  while (n !== newNum) {
    newNum = tenUnit + oneUnit;
    count += 1;
    oneUnit = (Math.floor(newNum / 10) + (newNum % 10)) % 10;
    tenUnit = (newNum % 10) * 10;
  }
  console.log(count);
});
