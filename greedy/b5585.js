// 거스름돈

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let money = 1000 - +input[0];
  let count = 0;
  const currency = [500, 100, 50, 10, 5, 1];
  while (money !== 0) {
    for (let i = 0; i < currency.length; i++) {
      if (money >= currency[i]) {
        count += Math.floor(money / currency[i]);
        money %= currency[i];
        break;
      }
    }
  }
  console.log(count);
});
