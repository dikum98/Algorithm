// 시각
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
  let count = 0;
  let [hour, minute, second] = [0, 0, 0];
  // 3 13 23 30 33 43 53 63 73 83 93 103 113 123

  for (let i = 0; i < (n + 1) * 3600; i++) {
    let time = i;
    hour = Math.floor(time / 3600);
    time %= 3600;
    minute = Math.floor(time / 60);
    time %= 60;
    second = time;
    if (
      String(hour).includes('3') ||
      String(minute).includes('3') ||
      String(second).includes('3')
    )
      count++;
  }
  console.log(count);
});
