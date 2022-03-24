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
  let [x, y] = [1, 1];
  const route = input[0].split(' ');
  // sol 1:
  // for (let i = 0; i < route.length; i++) {
  //   switch (route[i]) {
  //     case 'U':
  //       if (x === 1) break;
  //       x--;
  //       break;
  //     case 'D':
  //       if (x === n) break;
  //       x++;
  //       break;
  //     case 'L':
  //       if (y === 1) break;
  //       y--;
  //       break;
  //     case 'R':
  //       if (y === n) break;
  //       y++;
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // sol 2:
  // L R U D에 따른 위치 이동
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const moveTypes = ['L', 'R', 'U', 'D'];

  // 이동 방향을 하나씩 확인하기
  for (const direction of route) {
    let [tempX, tempY] = [x, y];

    // 이동 후 좌표 구하기
    for (let i = 0; i < moveTypes.length; i++) {
      if (direction === moveTypes[i]) {
        tempX = x + dx[i];
        tempY = y + dy[i];
      }
    }

    // 공간을 벗어나는 경우 무시
    if (tempX < 1 || tempY < 1 || tempX > n || tempY > n) continue;

    // 이동 수행
    [x, y] = [tempX, tempY];
  }
  console.log(x, y);
});
