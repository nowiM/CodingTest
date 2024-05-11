const fs = require("fs");

// 백준 제출 할 때 주석 제거
//const readFileSyncAddress = `/dev/stdin`;

// VSC 테스트 할 때 주석 제거
const readFileSyncAddress = `C:/Webcoding/input.txt`;

const input = fs.readFileSync(readFileSyncAddress).toString().split('\n');

// k, n을 숫자로 저장한다.
const [k, n] = input[0].split(' ').map(Number);

// k개 랜선의 길이를 하나의 배열로 만든다.
const onlineServiceArr = input.slice(1).map(Number).sort((a, b) => a - b);

// floor 함수를 만들어 Math.floor(n)한 값을 리턴한다.
const floor = (n) => Math.floor(n);

const solution = (n, onlineServiceArr) => {
    let low = 1; //최소 랜선 길이
    let high = Math.max(...onlineServiceArr); // 최대 랜선 길이
    
    while(low <= high) {
        let mid = floor((low + high) / 2); //중간 랜선 길이

        // 중간 길이 랜선으로 잘랐을 때 총 랜선의 갯수
        let sum = onlineServiceArr.reduce((acc, line) => acc + floor(line / mid), 0);

        // 총 랜선의 갯수가 n보다 크면 최소 랜선 길이 다시 구한다.
        if(sum >= n) {
            low = mid + 1;
        }
        // 총 랜선의 갯수가 n보다 크면 최대 랜선 길이 다시 구한다.
        else {
            high = mid - 1;
        }
    }
    
    // 최대 랜선 길이를 출력한다.
    console.log(high);
}

solution(n, onlineServiceArr);