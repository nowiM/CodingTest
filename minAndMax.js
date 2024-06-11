const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split`
`;

const array = input[1].split` `.map(Number);

console.log(`${Math.min(...array)} ${Math.max(...array)}`);