const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 입력값을 소문자로 변경하여 input 변수에 저장한다.
const input = require('fs').readFileSync(filePath).toString().toLowerCase();

let obj = {}; //key값 value값을 구분하기 위해 객체 생성

for(let i = 0; i < input.length; i++) {
    if(obj[input[i]] === undefined) { // key가 없을 땐 value를 1로 설정 즉 문자의 개수를 지정한다.
        obj[input[i]] = 1;
    }
    else {// key가 있을 땐 value를 +1로 설정
        obj[input[i]] += 1; 
    }
}

let answer = ''; // 출력값
let count = 0; // 가장 많이 사용된 알파벳을 찾기 위한 변수

for(let char in obj) {
    // char(키 값)의 value 값이 count보다 크면 가장 많이 사용된 알파벳을 구하고 그 알파벳을 대문자로 지정한다.
    if(obj[char] > count) {
        count = obj[char]; 
        answer = char.toUpperCase();
    }
    else if(obj[char] === count){ // count와 value 값이 같으면 즉 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.
        answer = '?'; 
    }
}

console.log(answer);