// 덱
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
  const deque = [];
  let answer = '';

  for (let i = 0; i < n; i++) {
    const [cmd, num] = input[i].split(' ');
    switch (cmd) {
      case 'push_front':
        deque.unshift(num);
        break;
      case 'push_back':
        deque.push(num);
        break;
      case 'pop_front':
        answer += (deque.shift() || '-1') + `\n`;
        break;
      case 'pop_back':
        answer += (deque.pop() || '-1') + `\n`;
        break;
      case 'size':
        answer += deque.length + `\n`;
        break;
      case 'empty':
        deque.length ? (answer += '0' + `\n`) : (answer += '1' + `\n`);
        break;
      case 'front':
        answer += (deque[0] || '-1') + `\n`;
        break;
      case 'back':
        answer += (deque[deque.length - 1] || '-1') + `\n`;
    }
  }
  console.log(answer);
});
