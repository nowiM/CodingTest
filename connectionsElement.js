const fs = require("fs");

//백준
//const readFileSyncAddress = `dev/stdin`;

// VSC
const readFileSyncAddress = `C:/Webcoding/input.txt`;

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const edges = input.map(edge => edge.split(' ').map(Number));

const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(false));

const visited = Array(N + 1).fill(false);

edges.forEach(([a, b]) => {
    graph[a][b] = true;
    graph[b][a] = true;
})


const bfs = (startNode) => {
    const queue = [startNode];
    visited[startNode] = true;
    while(queue.length) {
        let shiftVal = queue.shift();
        for(let next = 1; next < N + 1; next++) {
            if(!visited[next] && graph[shiftVal][next]) {
                visited[next] = true;
                queue.push(next);
            }
        }
    }
}

let connectionElement = 0;

for(let i = 1; i < N + 1; i++) {
    if(!visited[i]) {
        bfs(i);
        connectionElement++
    }
}

console.log(connectionElement);