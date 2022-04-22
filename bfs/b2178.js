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
  const dist = Array.from(Array(n).fill([]), () => Array(m).fill(-1));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [];
  queue.push([0, 0]);
  dist[0][0] = 0;
  while (queue.length) {
    const current = queue.shift();
    for (let dir = 0; dir < 4; dir++) {
      const nx = current[0] + dx[dir];
      const ny = current[1] + dy[dir];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (dist[nx][ny] >= 0 || board[nx][ny] === 0) continue;
      dist[nx][ny] = dist[current[0]][current[1]] + 1;
      queue.push([nx, ny]);
    }
  }
  console.log(dist[n - 1][m - 1] + 1);
});
