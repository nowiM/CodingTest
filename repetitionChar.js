const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(filePath).toString().split('\n');

const T = +input.shift(); // 테스트 케이스 수 T

for(let i = 0; i < T; i++) {
    const [R, S] = input[i].split(' ');// R(반복횟수), S(문자열)
    const P = []; // R번 반복한 문자열

    // S의 마지막 문자열까지 반복한다.
    for(let j = 0; j < S.length; j++) {
        // R번 반복한다.
        for(let k = 0; k < R; k++) {
            // S[j]의 요소(문자)를 R번 P에 저장한다.
            P.push(S[j]);
        }
    }
    // P를 출력한다.
    console.log(P.join(''));
}