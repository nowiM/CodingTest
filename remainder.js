const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
let answer = Array(42).fill(0); // 나머지를 저장하는 배열

for(let i = 0; i < input.length; i++) {
    // 나머지 값을 인덱스의 요소를 1증가 시킨다.
    answer[input[i] % 42]++;
}

let count = 0;

for(let i = 0; i < answer.length; i++) {
    // 나머지 값이 있으면 count값을 1증가 시킨다.
    if(answer[i] > 0) count++;
}

console.log(count);