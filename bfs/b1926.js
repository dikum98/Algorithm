// 그림
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
  input = input.map((v) => v.split(' ').map((v) => +v));
  const board = input;
  const visit = Array.from(Array(n).fill([]), () => Array(m).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [];
  let paintCount = 0;
  const paintSizes = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 0 || visit[i][j] === 1) continue;
      visit[i][j] = 1;
      queue.push([i, j]);
      paintCount += 1;
      let paintSize = 0;

      while (queue.length) {
        const current = queue.shift();
        paintSize += 1;
        for (let dir = 0; dir < 4; dir++) {
          const nx = current[0] + dx[dir];
          const ny = current[1] + dy[dir];
          if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
          if (visit[nx][ny] === 1 || board[nx][ny] === 0) continue;
          visit[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
      paintSizes.push(paintSize);
    }
  }
  if (paintCount === 0) {
    console.log(0);
    console.log(0);
    return;
  }
  console.log(paintCount);
  console.log(Math.max(...paintSizes));
});
