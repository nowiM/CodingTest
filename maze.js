const fs = require("fs");

// 백준
//const readFileSyncAddress = `/dev/stdin`;

// VSC
const readFileSyncAddress = `C:/Webcoding/input.txt`;

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

// 상하좌우를 탐색하기 위한 define 값 정의 변수
// dx 0 dy 1 하, dx가 1 dy 0 우, dx 0 dy -1 상, dx -1 dy 0 좌
const dx = [0, 1, 0, -1]
const dy = [1, 0, -1, 0]

let graph = input.map(edge => edge.trim().split('').map(Number));
let visited = Array.from(Array(N), () => Array(M).fill(false));

const bfs = (startX, startY) => {
    let queue = [[startX, startY]];

    while(queue.length) {
        const shiftVal = queue.shift();
        visited[shiftVal[0]][shiftVal[1]] = true;

        for(let i = 0; i < 4; i++) { // 상하좌우 탐색
            let x = shiftVal[0] + dx[i]
            let y = shiftVal[1] + dy[i]

            if(x >= 0 && y >= 0 && x < N && y < M) { // 배열의 범위를 넘어가면 안되고
                if(graph[x][y] !== 0 && !visited[x][y]) { // 0이여서 갈 수 없거나 방문한 곳이면 안된다.
                    // 이제 갈 수 있다.
                    visited[x][y] = true;
                    graph[x][y] = graph[shiftVal[0]][shiftVal[1]] + 1; // 핵심 : depth를 구한다.
                    queue.push([x, y])
                }
            }
        }
    }
}

bfs(0, 0)

console.log(graph[N - 1][M - 1]);

