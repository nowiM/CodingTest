const fs = require("fs");

//const readFileSyncAddress = '/bev/stdin';

const readFileSyncAddress = 'C:/Webcoding/input.txt';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

console.log(input);

// const solution = (a, b) => {
//     let count = 0;
//     const importanceArr = b.map((process, index) => {
//         return {process, index};
//     })

//     while(b.length) {
//         const queue = importanceArr.shift();
//         if(importanceArr.some(e => e.process > queue.process)) {
//             importanceArr.push(queue)
//         }
//         else {
//             count++;
//             console.log(queue.index);
//             if(queue.index === a) break;
//         }
//     }

//     console.log(count);
// }

//solution(a, b);