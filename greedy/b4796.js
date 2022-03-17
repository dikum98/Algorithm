// 캠핑
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trim());
}).on('close', function () {
  for (let i = 0; i < input.length - 1; i++) {
    const [l, p, v] = input[i].split(' ').map((v) => +v);
    let usableDays = 0;
    if (v % p <= l) usableDays = Math.floor(v / p) * l + (v % p);
    else usableDays = Math.floor(v / p) * l + l;

    console.log(`Case ${i + 1}: ${usableDays}`);
  }
});
