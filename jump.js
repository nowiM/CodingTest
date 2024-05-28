// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const input = require("fs").readFileSync(filePath).toString().trim().split('\n');

// const N = +input.shift();
// let distance = input.map(e => e.split(' ').map(Number));
// let dp = Array.from(Array(N), () => Array(N).fill(0)); // dp 생성 및 초기값 설정

// // 가장 왼 쪽 위 칸 설정
// dp[0][0] = 1

// for(let i = 0; i < N; i++) {
//     for(let j = 0; j < N; j++) {
//         // 경로가 있고, 점프 숫자가 있는 경우
//         if (dp[i][j] > 0 && distance[i][j] > 0) {
//             const jump = distance[i][j];
//             if (j + jump < N) { // 오른쪽 범위이내인 경우
//                 dp[i][j + jump] += dp[i][j];
//             }
//             if (i + jump < N) { // 아래쪽 범위이내인 경우
//                 dp[i + jump][j] += dp[i][j];
//             }
//         }
//     }
// }
// // 경로의 개수를 출력한다.
// console.log(dp[N - 1][N - 1]);

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
let distance = input.map(e => e.split(' ').map(Number));
let dp = Array.from(Array(N), () => Array(N).fill(BigInt(0))); // dp 생성 및 초기값 설정

// 가장 왼 쪽 위 칸 설정
dp[0][0] = 1

for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
        // 경로가 있고, 점프 숫자가 있는 경우
        if (dp[i][j] > 0 && distance[i][j] > 0) {
            const jump = distance[i][j];
            if (j + jump < N) { // 오른쪽 범위이내인 경우
                dp[i][j + jump] += BigInt(dp[i][j]);
            }
            if (i + jump < N) { // 아래쪽 범위이내인 경우
                dp[i + jump][j] += BigInt(dp[i][j]);
            }
        }
    }
}
// 경로의 개수를 출력한다.
console.log(dp[N - 1][N - 1].toString());