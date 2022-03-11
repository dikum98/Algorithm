// 회의실 배정
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
  let schedule = [];
  for (let i = 0; i < n; i++) {
    schedule.push(input[i].split(' ').map((v) => +v));
  }
  schedule.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  let count = 1;
  let recentEnd = schedule[0][1];

  for (let i = 1; i < n; i++) {
    if (recentEnd <= schedule[i][0]) {
      recentEnd = schedule[i][1];
      count++;
    }
  }

  console.log(count);
});
