// 큐
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
  const queue = [];
  let [head, tail] = [0, 0];
  let answer = '';

  for (let i = 0; i < n; i++) {
    const [cmd, num] = input[i].split(' ');
    switch (cmd) {
      case 'push':
        queue[tail++] = +num;
        break;
      case 'pop':
        if (head !== tail) {
          head++;
          answer += queue[head - 1] + `\n`;
        } else {
          answer += '-1' + `\n`;
        }
        break;
      case 'size':
        answer += tail - head + `\n`;
        break;
      case 'empty':
        tail === head ? (answer += '1' + `\n`) : (answer += '0' + `\n`);
        break;
      case 'front':
        head !== tail
          ? (answer += queue[head] + `\n`)
          : (answer += '-1' + `\n`);
        break;
      case 'back':
        head !== tail
          ? (answer += queue[tail - 1] + `\n`)
          : (answer += '-1' + `\n`);
        break;
    }
  }
  console.log(answer);
});
