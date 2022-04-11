// 회전하는 큐
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trim());
}).on('close', function () {
  const [n, m] = input[0].split(' ');
  const numArr = Array.from({ length: n }, (v, i) => String(i + 1));
  const numsForShift = input[1].split(' ');
  let moveCount = 0;

  for (const num of numsForShift) {
    if (numArr[0] === num) numArr.shift();
    else {
      const diffToEnd = numArr.length - numArr.indexOf(num);
      const diffFromStart = numArr.indexOf(num);
      if (diffToEnd >= diffFromStart) {
        for (let i = 0; i < diffFromStart; i++) {
          numArr.push(numArr.shift());
          moveCount += 1;
        }
        numArr.shift();
      } else {
        for (let i = 0; i < diffToEnd; i++) {
          numArr.unshift(numArr.pop());
          moveCount += 1;
        }
        numArr.shift();
      }
    }
  }

  console.log(moveCount);
});
