// 뒤집기

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let str = input[0];
  let [count0, count1] = [0, 0];
  if (str[0] === "0") count0 = 1;
  else count1 = 1;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== str[i + 1]) {
      str[i + 1] === "0" ? count0++ : count1++;
    }
  }
  console.log(Math.min(count0, count1));
});
