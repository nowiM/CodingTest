const fs = require("fs");

// 백준 제출 할 때 주석 제거
const readFileSyncAddrses = '/dev/stdin';

// VSC 테스트 할 때 주석 제거
//const readFileSyncAddrses = 'input.txt';

const input = fs.readFileSync(readFileSyncAddrses).toString().trim().split('\n');

const [n, k] = input[0].split(' ');

const solution = (n , k) => {
    let queue = [];
    let answer = [];
    let count = 1;

    for(let i = 0; i < n; i++) queue.push(i + 1);

    while(queue.length) {
        const shiftVal = queue.shift();

        if(count % k === 0) {
            answer.push(shiftVal);
        }
        else {
            queue.push(shiftVal);
        }

        count++;
    }

    console.log(`<${answer.join(', ')}>`);
}

solution(n, k);