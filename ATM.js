const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().split('\n');

const N = input[0];
const times = input[1].split(' ').map(Number);
let sum = 0;

// 돈을 인출하는 걸리는 시간을 오름차순으로 정렬한다.
times.sort((a, b) => a - b);

// 돈을 인출하는데 필요한 시간의 합을 구한다.
for(let i = 0; i < N; i++) {
    for(let j = 0; j <= i; j++) {
        sum += times[j];
    }
}

console.log(sum);