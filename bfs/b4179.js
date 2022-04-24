// 불!
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line.trimEnd());
}).on('close', function () {
  const [r, c] = input
    .shift()
    .split(' ')
    .map((v) => +v);
  const board = input.map((v) => v.split(''));
  const FDist = JSON.parse(JSON.stringify(board));
  const JDist = JSON.parse(JSON.stringify(board));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const FQueue = [];
  const JQueue = [];

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (FDist[i][j] === 'F') {
        FQueue.push([i, j]);
        FDist[i][j] = 0;
      }
      if (JDist[i][j] === 'J') {
        JQueue.push([i, j]);
        JDist[i][j] = 0;
      }
    }
  }

  while (FQueue.length) {
    const current = FQueue.shift();
    for (let dir = 0; dir < 4; dir++) {
      const newX = current[0] + dx[dir];
      const newY = current[1] + dy[dir];
      if (newX < 0 || newX >= r || newY < 0 || newY >= c) continue;
      if (FDist[newX][newY] === '#' || FDist[newX][newY] >= 0) continue;
      FDist[newX][newY] = FDist[current[0]][current[1]] + 1;
      FQueue.push([newX, newY]);
    }
  }

  while (JQueue.length) {
    const current = JQueue.shift();
    for (let dir = 0; dir < 4; dir++) {
      const newX = current[0] + dx[dir];
      const newY = current[1] + dy[dir];
      if (newX < 0 || newX >= r || newY < 0 || newY >= c) continue;
      if (JDist[newX][newY] === '#' || JDist[newX][newY] >= 0) continue;
      JDist[newX][newY] = JDist[current[0]][current[1]] + 1;
      JQueue.push([newX, newY]);
    }
  }

  const escapeTime = [];
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (i === 0 || i === r - 1 || j === 0 || j === c - 1) {
        if (JDist[i][j] < FDist[i][j] || (+JDist[i][j] && FDist[i][j] === '.'))
          escapeTime.push(JDist[i][j] + 1);
        // 지훈이 탈출한 위치에 불이 옮겨붙지 않은 경우도 체크 해야함.
      }
    }
  }

  if (escapeTime.length) {
    return console.log(Math.min(...escapeTime));
  }
  console.log('IMPOSSIBLE');
});
