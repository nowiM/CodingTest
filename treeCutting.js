const fs = require("fs");

// 백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';

// VSC 테스트 할 때 주석 제거
//const readFileSyncAddress = 'C:/Webcoding/input.txt';

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n'); 

const [n, m] = input[0].split(' ').map(e=> +e);
const arr = input[1].split(' ').map(e => +e);


const solution = (m, arr) => {
    arr = arr.sort((a, b) => a - b); // 이진탐색을 위해 오름차순으로 정렬

    let left = 0
    let rigth = arr[arr.length - 1]; // 절단기의 최대 높이는 배열에서 가장 높은 나무로 설정
    let target = 0;


    while(left <= rigth) {
        let total = 0;

        mid = Math.floor((left + rigth) / 2);

        arr.forEach(tree => {
            if(tree > mid) {
                total += tree - mid;
            }
        })

        // 얻은 나무의 값이 목표값보다 크면 절단기 값을 높인다.
        if(total >= m) {
            target = mid;
            left = mid + 1;
        }
        // 목표값보다 작으면 절단기 값을 낮춘다.
        else {
            rigth = mid - 1;
        }
    }

    // 절단기의 높이를 리턴한다.
    return target;
}

console.log(solution(m, arr));