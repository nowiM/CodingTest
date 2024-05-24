const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split('\n');

const meetingNum = parseInt(input.shift());
const rooms = input.map(room => room.split(' ').map(Number));

let end = 0;
let roomSum = 0;
const sortRooms = rooms.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    } else {
        return a[1] - b[1];
    }
});

for(let i = 0; i < sortRooms.length; i++) {
    let [s, e] = sortRooms[i];
    if(s >= end) {
        end = e;
        roomSum++;
    }
}

console.log(roomSum);