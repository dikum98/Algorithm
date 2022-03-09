// 곱하기 혹은 더하기

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 0, 1을 만나면 더하기
  let inputArr = input[0].split("").map((v) => +v);
  let answer = inputArr[0];
  for (let i = 1; i < inputArr.length; i++) {
    if (inputArr[i] <= 1) answer += inputArr[i];
    else if (answer === 0) answer += inputArr[i];
    else answer *= inputArr[i];
  }
  console.log(answer);
});
