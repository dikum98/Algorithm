// 왕실의 나이트
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trim());
}).on('close', function () {
  // 1. 가로 2칸, 세로 1칸
  // 2. 세로 2칸, 가로 1칸
  // 이 때 이동 가능한 경우의 수는?
  // a를 1로, h를 8로 만들기
  const curPosition = input[0].split('');
  curPosition[0] = curPosition[0].charCodeAt(0) - 96;

  const steps = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  let possibleCount = 0;
  for (const step of steps) {
    const movedPosition = [curPosition[0] - step[0], curPosition[1] - step[1]];
    if (movedPosition[0] >= 1 && movedPosition[1] >= 1) possibleCount++;
  }
  console.log(possibleCount);
});
