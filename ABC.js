const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const [A, B, C] = input;

console.log(`${A + B - C}\n${String(A) + String(B) - C}`);