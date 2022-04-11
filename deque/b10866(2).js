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
  const MX = 10001;
  let [head, tail] = [MX, MX];
  let answer = '';

  for (let i = 0; i < n; i++) {
    const [cmd, num] = input[i].split(' ');
    switch (cmd) {
      case 'push_front':
        deque[--head] = num;
        break;
      case 'push_back':
        deque[tail++] = num;
        break;
      case 'pop_front':
        if (head === tail) answer += '-1' + `\n`;
        else answer += deque[head++] + `\n`;
        break;
      case 'pop_back':
        if (head === tail) answer += '-1' + `\n`;
        else answer += deque[--tail] + `\n`;
        break;
      case 'size':
        answer += tail - head + `\n`;
        break;
      case 'empty':
        head === tail ? (answer += '1' + `\n`) : (answer += '0' + `\n`);
        break;
      case 'front':
        if (head === tail) answer += '-1' + `\n`;
        else answer += deque[head] + `\n`;
        break;
      case 'back':
        if (head === tail) answer += '-1' + `\n`;
        else answer += deque[tail - 1] + `\n`;
    }
  }
  console.log(answer);
});
