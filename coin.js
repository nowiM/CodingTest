const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split('\n');

// N = 동전의 종류, K = 그 가치의 합
let [N, K] = input.shift().split(' ');

let cost = +K
const coins = input.map(Number);
let coinCount = 0;
let floor = n =>  Math.floor(n); 

// 동전의 종류를 내리차순으로 정렬한다.
coins.sort((a, b) => b - a);

// 필요한 동전의 개수를 구할 때까지 반복한다.
while(cost !== 0) {
    // 동전의 종류를 coinVal에 저장한다.
    const coinsVal = coins.shift();
    // 동전의 개수를 구하지 못하는 값으면 다시 반복한다.
    if(floor(cost / coinsVal) === 0) continue;
    // 동전의 개수를 구한다.
    coinCount += floor(cost / coinsVal);
    // 남은 금액을 구한다.
    cost = cost % coinsVal;
}

// 동전의 개수를 출력한다.
console.log(coinCount);
