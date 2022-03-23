//상하좌우
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
  const route = input[0].split(' ');
  let [x, y] = [1, 1];
  for (let i = 0; i < route.length; i++) {
    switch (route[i]) {
      case 'U':
        if (x === 1) break;
        x--;
        break;
      case 'D':
        if (x === 5) break;
        x++;
        break;
      case 'L':
        if (y === 1) break;
        y--;
        break;
      case 'R':
        if (y === 5) break;
        y++;
        break;
      default:
        break;
    }
  }
  console.log(x, y);
});
