const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString();

const [N, K] = input.split(' ').map(Number);

let visited = Array(200001).fill(0);

const bfs = (start, end) => {
    visited[start] = 1;
    let queue = [start];

    while(queue.length) {
        const shiftVal = queue.shift();
        
        if(shiftVal === end) {
            return visited[end] - 1;
        }

        for(let n of [shiftVal - 1, shiftVal + 1, shiftVal * 2]) {
            if(n >= 0 && n <= 2000001 && visited[n] === 0) {
                visited[n] = visited[shiftVal] + 1;
                queue.push(n);
            }
        }
    }
}

const answer = bfs(N, K);

console.log(answer);