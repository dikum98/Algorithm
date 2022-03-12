// 보물
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trim());
}).on('close', function () {
  const n = Number(input[0]);
  const a = input[1].split(' ').map((v) => +v);
  const b = input[2].split(' ').map((v) => +v);

  const bClone = [...b].sort((a, b) => a - b);
  a.sort((a, b) => b - a);
  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer += a[i] * bClone[i];
  }
  console.log(answer);
});
