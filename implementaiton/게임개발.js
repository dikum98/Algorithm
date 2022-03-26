// 게임 개발
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trim());
}).on('close', function () {
  const [n, m] = input
    .shift()
    .split(' ')
    .map((v) => +v);
  let [x, y, direction] = input
    .shift()
    .split(' ')
    .map((v) => +v);
  const wholeMap = input.map((v) => v.split(' ').map((v) => +v));
  let visitedCheckMap = new Array(n).fill(0);
  visitedCheckMap = visitedCheckMap.map((v) => (v = new Array(m).fill(0)));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 초기에 서 있는 땅 체크
  visitedCheckMap[x][y] = 1;
  let visitedCount = 1;
  let turnCount = 0;

  const turnLeft = () => {
    if (direction === 0) {
      direction = 3;
      return;
    }
    direction -= 1;
  };

  while (true) {
    // 1. 왼쪽으로 돈다.
    turnLeft();
    let tempX = x + dx[direction];
    let tempY = y + dy[direction];

    // 2-1. 갈 수 있으면 간다.
    if (visitedCheckMap[tempX][tempY] === 0 && wholeMap[tempX][tempY] === 0) {
      [x, y] = [tempX, tempY];
      visitedCheckMap[x][y] = 1;
      visitedCount += 1;
      turnCount = 0;
    } else {
      turnCount += 1;
    }

    // 사방이 막힌 경우
    if (turnCount === 4) {
      tempX = x - dx[direction];
      tempY = y - dy[direction];

      // 뒤로 갈 수 있으면 뒤로 한 칸 간다.
      if (wholeMap[tempX][tempY] === 0) {
        [x, y] = [tempX, tempY];
      } else {
        // 뒤로도 못 가는 경우 종료
        break;
      }
      turnCount = 0;
    }
  }
  console.log(visitedCount);
});
