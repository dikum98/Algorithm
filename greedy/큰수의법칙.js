// 큰 수의 법칙
// 배열의 크기 (2 <= N <= 1,000)
// 숫자가 더해지는 횟수 (1 <= M <= 10,000)
// 특정 인덱스의 수가 연속해서 더해질 수 있는 횟수 (1 <= K <= 10,000)

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [N, M, K] = [...input[0].split(" ").map((v) => +v)];
  let arr = input[1]
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => b - a);
  let [first, second] = [arr[0], arr[1]];

  let count = Math.floor(M / (K + 1)) * K;
  count += M % (K + 1);

  let answer = 0;
  answer += count * first;
  answer += (M - count) * second;
  console.log(answer);
});
