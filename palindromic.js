const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(filePath).toString().split('\n').map(Number);

while(1) {
    const number = input.shift(); // 숫자를 저장한다.

    // 0이면 반복문을 탈출한다.
    if(number === 0) {
        break;
    }
    // number 값이 팰린드롬이면 yes를 출력한다.
    else if(String(number) === [...String(number)].reverse().join('')) {
        console.log('yes');
    }
    // 팰린드롬이 아니면 no를 출력한다.
    else {
        console.log('no');
    }
}

