const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

let tc = Number(input.shift());

let dp = Array.from(Array(10001), () => Array(4).fill(0));

dp[1][1] = 1;
dp[2][1] = 1;
dp[2][2] = 1;
dp[3][1] = 1;
dp[3][2] = 1;
dp[3][3] = 1;

for (let i = 4; i <= 10000; i++) {
    dp[i][1] = dp[i - 1][1];
    dp[i][2] = dp[i - 2][1] + dp[i - 2][2];
    dp[i][3] = dp[i - 3][1] + dp[i - 3][2] + dp[i - 3][3];
}

for (let t = 0; t < tc; t++) {
    let n = Number(input.shift());

    console.log(dp[n][1] + dp[n][2] + dp[n][3]);
}

// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// const input = require("fs").readFileSync(filePath).toString().trim().split('\n');

// const T = +input.shift();// 테스트 케이스 수
// const numbers = input.map(Number);

// for(let i = 0; i < T; i++) {
//     const N = numbers[i];
//     // 첫 번째 항을 구하고 초기화한다.
//     let count = 3;
//     let checkTwo = 2;
//     let checkThree = 3;
//     let j = 2;
		
// 		// 반복을 통해 각 각의 항에 2와 3을 더한다.
//     while(j !== 4) {
//         checkTwo += j;
//         checkThree += j;
// 				 // N이 보다 작으면 count를 1 증가시킨다. 
//         if(checkTwo <= N) {
//             count++;
//         }
//         if(checkThree <= N) {
//             count++;
//         }
//         // 다음 숫자 3을 구한다. 
//         if(checkTwo > N && checkThree > N) {
//             checkTwo = 2;
//             checkThree = 3;
//             j++;
//         }
//     }
	
// 		// 방법의 수를 출력한다.
//     console.log(count);
// }
