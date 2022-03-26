// 럭키 스트레이트
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trim());
}).on('close', function () {
  let n = input[0];
  let left = n.slice(0, n.length / 2);
  let right = n.slice(n.length / 2);
  left = left
    .split('')
    .map((v) => +v)
    .reduce((acc, cur) => acc + cur, 0);
  right = right
    .split('')
    .map((v) => +v)
    .reduce((acc, cur) => acc + cur, 0);

  // 왼쪽 부분의 자릿수 합과 오른쪽 부분의 자릿수 합이 같으면 럭키
  if (left === right) {
    console.log('LUCKY');
  } else {
    console.log('READY');
  }
});
