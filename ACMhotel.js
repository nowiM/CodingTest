const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(filePath).toString().split('\n');

const T = +input.shift();

for(let i = 0; i < T; i++) {
    const [H, W, N] = input.shift().split(' ').map(Number);
    const roomArray = [];
    let count = 0;
    for(let j = 0; j < W; j++) {
        let room = 1 + j;
        for(let k = 0; k < H; k++) {
            count++;
            room += 100;
            if(count === N) {
                console.log(room);
                break;
            }
        }
    }
}