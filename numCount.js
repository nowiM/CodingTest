const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

// 입력의 A, B, C를 구한다.
const [A, B, C] = input;

// 0 ~ 9 숫자 개수를 구하기 위한 배열 선언
let array = Array(10).fill(0);

// A * B * C의 값을 문자열로 바꾸고 각 각의 문자(자릿수)를 array의 인덱스의 요소를 1 증가 시킨다.
[...String(A * B * C)].map((number) => array[number]++);

// 0 ~ 9 숫자 개수 출력한다.
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

