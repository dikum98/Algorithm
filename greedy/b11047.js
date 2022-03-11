// 동전 0

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [n, k] = input[0].split(" ").map((v) => +v);
  let currency = [];
  for (let i = 1; i <= n; i++) {
    currency.push(+input[i]);
  }
  let count = 0;
  while (k !== 0) {
    for (let i = n - 1; i >= 0; i--) {
      if (k >= currency[i]) {
        count += Math.floor(k / currency[i]);
        k = k % currency[i];
        break;
      }
    }
  }
  console.log(count);
});
