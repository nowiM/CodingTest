const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(filePath).toString().split(' ').map(Number);

const inputString = input.toString(); //정렬된 값이랑 비교하기 위해 입력을 문자열로 저장

console.log(
		// input값을 오름차순으로 정렬했을 때 inputString 같으면 ascending
    inputString === input.sort((a, b) => a - b).toString() ? 'ascending' : 
    // input값을 내림차순으로 정렬했을 때 inputString 같으면 descending
    inputString === input.sort((a, b) => b - a).toString() ? 'descending' : 'mixed'
);