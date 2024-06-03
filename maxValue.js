const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

// 스트레드 연산자를 활용하여 배열인 input의 값을 ex) 1, 2, 3, 4, 5으로 변경
const max = Math.max(...input); // 최대값
const index = input.indexOf(max) + 1; // 몇 번째 수인지 구한다.

console.log(`${max}\n${index}`);
