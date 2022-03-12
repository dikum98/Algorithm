// 로프
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trim());
}).on('close', function () {
  const n = Number(input.shift());
  const ropes = input.map((v) => +v).sort((a, b) => b - a);
  let maxWeight = ropes[0];

  for (let i = 1; i < n; i++) {
    if (ropes[i] * (i + 1) > maxWeight) maxWeight = ropes[i] * (i + 1);
  }
  console.log(maxWeight);
});
