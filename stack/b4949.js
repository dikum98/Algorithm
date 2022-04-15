// 균형잡힌 세상
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trimEnd());
}).on('close', function () {
  let answer = '';
  outer: for (const str of input) {
    if (str === input[input.length - 1]) break;
    const stack = [];
    inner: for (const c of str) {
      if (c === '(' || c === '[') stack.push(c);
      else if (c === ')' || c === ']') {
        if (stack.length === 0) {
          answer += 'no' + '\n';
          continue outer;
        } else if (
          (stack[stack.length - 1] === '[' && c === ')') ||
          (stack[stack.length - 1] === '(' && c === ']')
        ) {
          answer += 'no' + '\n';
          continue outer;
        }
        stack.pop();
      }
    }
    stack.length ? (answer += 'no' + '\n') : (answer += 'yes' + '\n');
  }
  console.log(answer.trim());
});
