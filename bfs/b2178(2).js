// 미로 탐색
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line.trimEnd());
}).on('close', function () {
  const [n, m] = input
    .shift()
    .split(' ')
    .map((v) => +v);
  const board = input.map((v) => v.split('').map((v) => +v));
  const isVisited = Array.from({ length: n }, () => Array(m).fill(false));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [{ curX: 0, curY: 0, count: 1 }];
  isVisited[0][0] = true;
  while (queue.length) {
    const { curX, curY, count } = queue.shift();

    if (curX === n - 1 && curY === m - 1) {
      console.log(count);
      break;
    }

    for (let dir = 0; dir < 4; dir++) {
      const newX = curX + dx[dir];
      const newY = curY + dy[dir];
      if (newX < 0 || newX >= n || newY < 0 || newY >= m) continue;
      if (isVisited[newX][newY] === true || board[newX][newY] === 0) continue;
      isVisited[newX][newY] = true;
      queue.push({ curX: newX, curY: newY, count: count + 1 });
    }
  }
});
