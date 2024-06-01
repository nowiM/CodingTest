const path = process.platform === "linux" ? "/dev/stdin" : "input.txt"; // 리눅스로 테스트할 땐 따로 설정해주어야 합니다.
let [n, ...inputsBeforeMakeUp] = require("fs")
    .readFileSync(path)
    .toString()
    .trim()
    .split("\n");

const N = +n;
const inputs = inputsBeforeMakeUp.map((input) => input.split(" ").map(Number));

function solution(N, inputs) {
    const dp = new Array(N + 1).fill(0);
    let max = 0;

    for (let i = 0; i < N; i += 1) {
        max = Math.max(max, dp[i]);

        const [day, pay] = inputs[i];
        if (i + day <= N) dp[i + day] = Math.max(dp[i + day], max + pay);

    }

    return Math.max(...dp);
}

const answer = solution(N, inputs);
console.log(answer);

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// const input = require("fs").readFileSync(filePath).toString().trim().split('\n');


// const N = +input.shift(); // 퇴사일 N
// const T = [];
// const P = [];

// // 각 각의 상담이 완료하는데 걸리는 시간 T, 금액 P를 배열에 차례대로 저장한다.
// for(let i = 0; i < input.length; i++) {
//     const [t, p] = input[i].split(' ').map(Number);
//     T[i] = t;
//     P[i] = p;
// }

// // dp 배열을 모두 0으로 초기화한다.
// const dp = Array(N + 1).fill(0);

// for(let i = N - 1; i !== -1; i--) { // 뒤에서 앞으로 완료기준
//     if(i + T[i] <= N) { // 기간내 상담 완료가 가능하다면
//         //dp[i] = Math.max(dp[i - 1], dp[i + T[i]] + P[i]);
//         dp[i] = dp[i - 1] > dp[i + T[i]] + P[i] ? dp[i - 1] : dp[i + T[i]] + P[i];
//     }
//     else {
//         dp[i] = dp[i + 1];
//     }
// }

// console.log(dp[0]);