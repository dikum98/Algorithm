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
  const arrA = input[1].split(' ').map((v) => +v);
  const arrB = input[2].split(' ').map((v) => +v);
  let minSumAB = 0;

  arrA.sort((a, b) => a - b);
  for (const minA of arrA) {
    const maxB = Math.max(...arrB);
    minSumAB += minA * maxB;
    arrB.splice(
      arrB.findIndex((v) => v === maxB),
      1
    );
  }
  console.log(minSumAB);
});
