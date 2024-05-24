const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split('\n');

const MAX = 50 + 10;

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const T = input.shift();

for(let i = 0; i < +T; i++) {
    let count = 0;
    const [M, N, K] = input.shift().split(' ').map(Number);

    const graph = Array.from(Array(MAX), () => Array(MAX).fill(false));
    
    const dfs = (startY, startX) => {
        graph[startY][startX] = 0;
    
        for(let i = 0; i < 4; i++) {
            let y = startY + dy[i];
            let x = startX + dx[i];
    
            if(x >= 0 && y >= 0 && x < M + 1 && y < N + 1) {
                if(graph[y][x]) {
                    dfs(y, x);
                }
            }
        }
    }

    for(let j = 0; j < K; j++) {
        const [x, y] = input.shift().split(' ').map(Number);
        graph[y + 1][x + 1] = true;
    }

    for(let i = 1; i < N + 1; i++) {
        for(let j = 1; j < M + 1; j++) {
            if(graph[i][j]) {
                dfs(i, j);
                count++;
            }
        }
    }

    console.log(count);
}