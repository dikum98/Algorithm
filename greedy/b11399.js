// ATM

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
  let people = input[1]
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b);
  let time = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      time += people[j];
    }
  }
  console.log(time);
});
