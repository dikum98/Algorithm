// 주유소
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trim());
}).on('close', function () {
  const n = Number(input[0]);
  const distanceArr = input[1].split(' ').map((v) => BigInt(v));
  const oilCostArr = input[2].split(' ').map((v) => BigInt(v));
  let totalCost = BigInt(0);
  let distance = distanceArr[0];
  let cheapestTown = oilCostArr[0];

  // 뒤에 더 저렴한 도시를 찾는다.
  for (let i = 1; i < oilCostArr.length - 1; i++) {
    if (cheapestTown > oilCostArr[i]) {
      totalCost += cheapestTown * distance;
      cheapestTown = oilCostArr[i];
      distance = BigInt(0);
    }
    distance += distanceArr[i];
  }
  totalCost += cheapestTown * distance;

  console.log(totalCost.toString());
});
