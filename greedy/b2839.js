// 설탕 배달

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let sugar = +input[0];
  // 풀이 1
  if (sugar === 4 || sugar === 7) return console.log(-1);
  if (sugar % 5 === 0) console.log(sugar / 5);
  else if (sugar % 5 === 1) console.log(Math.floor(sugar / 5) + 1);
  else if (sugar % 5 === 2) console.log(Math.floor(sugar / 5) + 2);
  else if (sugar % 5 === 3) console.log(Math.floor(sugar / 5) + 1);
  else if (sugar % 5 === 4) console.log(Math.floor(sugar / 5) + 2);

  // 풀이 2
  let bag = 0;
  while (sugar >= 0) {
    if (sugar % 5 === 0) {
      bag += Math.floor(sugar / 5);
      console.log(bag);
      break;
    }
    sugar -= 3;
    bag++;
  }
  if (sugar < 0) console.log(-1);
});
