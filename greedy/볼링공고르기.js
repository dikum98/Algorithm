// 볼링공 고르기
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [n, m] = input[0].split(" ").map((v) => +v);
  let arr = input[1]
    .split(" ")
    .map((v) => +v)
    .sort();
  // 방법 1 O(n^2)
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] !== arr[j]) count++;
    }
  }
  console.log(count);
  // 방법 2 O(n + m)
  let result = 0;
  const candidate = Array(11).fill(0);
  for (let i = 0; i < n; i++) {
    candidate[arr[i]]++;
  }
  for (let i = 1; i <= m; i++) {
    n -= candidate[i];
    result = result + candidate[i] * n;
  }
  console.log(result);
});
