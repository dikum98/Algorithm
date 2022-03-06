// 1이 될 때 까지

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 1. N이 K로 나누어 떨어지면 나눈다.
  // 2. 안되면 N에서 1을 뺀다
  // 3. 위 과정을 반복
  let [N, K] = input[0].split(" ").map((v) => +v);
  let result = 0;
  while (N !== 1) {
    if (N % K === 0) {
      N /= K;
      result += 1;
    } else {
      N -= 1;
      result += 1;
    }
  }
  console.log(result);
});
