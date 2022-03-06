// 모험가 길드

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = +input[0];
  let candidate = input[1]
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => b - a);

  let count = 0;
  for (let i = 1; i <= candidate[0]; i++) {
    let x = candidate.filter((v) => v <= i).length; // 공포도 x로 그룹을 꾸릴 수 있는 인원 수
    while (x >= i) {
      for (let j = 0; j < i; j++) {
        candidate.pop();
        x--;
      }
      count++;
    }
  }
  console.log(count);
});
