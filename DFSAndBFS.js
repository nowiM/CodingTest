const fs = require("fs");

// 백준 
//const readFileSyncAddress = `/dev/stdin`;

// VSC
const readFileSyncAddress = `C:/Webcoding/input.txt`;

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

const [N, M, V] = input.shift().split(' ').map(Number);
const edges = input.map(edge => edge.split(' ').map(Number));

// 방문이 가능한 곳
let graph = Array.from(Array(N + 1), () => Array(N + 1).fill(false));
// 노드가 방문했는지(true) 않했는지(false) 알 수 있는 배열
let visited = Array(N + 1).fill(false);

// 방문이 가능한 곳을 true로 치환한다.
edges.forEach(([a, b]) => {
    graph[a][b] = true;
    graph[b][a] = true;
})

const bfs = () => {
    // queue 배열의 길이가 0이 될 때까지 반복한다. 즉 방문할 노드가 없을 때 까지
    while(queue.length) {
        shiftVal = queue.shift();
        process.stdout.write(shiftVal + ' ');

        for(let next = 1; next < N + 1; next++) {
            if(!visited[next] && graph[shiftVal][next]) {
                // next번 째 노드를 방문했다.
                visited[next] = true;
                // queue 배열에 next값을 넣는다.
                queue.push(next);
            }
        }
    }
}

const dfs = (idx) => {
    // 매개변수로 전달받은 노드(idx)값을 방문했다. 그러므로 true로 치환된다.
    visited[idx] = true;
    // 방문한 노드(idx)를 출력한다.
    process.stdout.write(idx + ' ');

    for(let next = 1; next < N + 1; next++) {
        // next라는 노드가 방문되지 않았고 방문할 수 있는 곳이라면(graph) dfs(next) 함수를 호출한다.
        if(!visited[next] && graph[idx][next]) dfs(next);
    }
}

//DFS
dfs(V); // V 노드부터 시작
console.log();

//bfs
visited = visited.map(node => node = false); // 방문한 기록을 false로 모두 초기화
queue = [V] // V 노드부터 시작
visited[V] = true; // V 노드를 재방문하지 않게 true로 치환
bfs()