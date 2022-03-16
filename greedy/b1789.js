// 수들의 합
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trim());
}).on('close', function () {
  const s = Number(input[0]);
  let n = 1;
  let result = 1;
  while (true) {
    result = (n * (n + 1)) / 2;
    if (result > s) {
      n--;
      break;
    }
    n++;
  }
  console.log(n);
});
