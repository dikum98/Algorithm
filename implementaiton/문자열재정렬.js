// 문자열 재정렬
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trim());
}).on('close', function () {
  let s = input[0].split('');
  let sum = 0;
  sum = s.filter((v) => +v).reduce((acc, cur) => acc + +cur, 0);
  s = s
    .filter((v) => !+v)
    .sort()
    .join('');

  console.log(s + sum);
});
