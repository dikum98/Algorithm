// 전자레인지
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trim());
}).on('close', function () {
  const t = Number(input[0]);
  let [countA, countB, countC] = [0, 0, 0];

  if (t % 10 !== 0) return console.log(-1);

  countA = Math.floor(t / 300);
  countB = Math.floor((t % 300) / 60);
  countC = Math.floor((t % 60) / 10);

  console.log(countA, countB, countC);
});
