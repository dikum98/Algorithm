// 숫자 카드 게임

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let rowCount = input[0].split(" ")[0];
  let result = 0;
  for (let i = 1; i <= rowCount; i++) {
    let arr = input[i].split(" ");
    let min = Math.min(...arr);
    result = Math.max(result, min);
  }
  console.log(result);
});
