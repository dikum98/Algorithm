// 토마토
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line.trimEnd());
}).on('close', function () {
  const [m, n] = input
    .shift()
    .split(' ')
    .map((v) => +v);
  const board = input.map((v) => v.split(' ').map((v) => +v));
  const dist = Array.from({ length: n }, () => Array(m).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) queue.push([i, j]);
      if (board[i][j] === 0) dist[i][j] = -1;
    }
  }

  let queueIndex = 0;
  while (queue.length > queueIndex) {
    const current = queue[queueIndex];

    for (let dir = 0; dir < 4; dir++) {
      const newX = current[0] + dx[dir];
      const newY = current[1] + dy[dir];

      if (newX < 0 || newX >= n || newY < 0 || newY >= m) continue;
      if (dist[newX][newY] >= 0) continue;
      dist[newX][newY] = dist[current[0]][current[1]] + 1;
      queue.push([newX, newY]);
    }
    queueIndex += 1;
  }

  let day = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dist[i][j] === -1) return console.log(-1);
      day = Math.max(day, dist[i][j]);
    }
  }
  console.log(day);
});
