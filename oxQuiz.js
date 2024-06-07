const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift(); //테스트 케이스 수

for(let i = 0; i < T; i++) {
    let count = 0;
    // 점수를 구하여 score 저장한다.
    const score = [...input[i]].map(e => {
        if(e === 'O') {
            return ++count;
        }
        else {
            count = 0;
            return count;
        }
    });
    // score의 합계를 구하여 출력한다.
    console.log(score.reduce((acc, cur) => acc + cur));
}