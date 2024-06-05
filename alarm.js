const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(filePath).toString().split(' ').map(Number);

const [H, M] = input;

// H가 0이면 H에 24를 더하여 총 분을구하고 0이 아니면 총 분을 구한다.
let sumMinute = H === 0 ? ((H + 24) * 60) + M - 45 : (H * 60) + M - 45;
let newH = Math.floor(sumMinute/60); // 45분 앞서는 시간
let newM = sumMinute%60; // 45분 앞서는 분


if(newH === 24) newH -= 24; // 45분 앞서는 시간이 24이면(0) 0시로 만든다.

console.log(newH, newM);