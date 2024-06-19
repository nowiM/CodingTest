const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift(); // 과목의 개수
const scores = input.shift().split` `.map(Number);
const max = Math.max(...scores); //최대점수
let sum = 0; //점수의 총 합

scores.forEach(score => {
    sum += score / max * 100;
})

console.log(sum / N);