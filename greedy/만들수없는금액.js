// 만들 수 없는 금액

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let target = 1;
  let arr = input[0].split(" ").map((v) => +v);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (target < arr[i]) break;
    target += arr[i];
  }
  console.log(target);
});
