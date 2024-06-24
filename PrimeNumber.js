const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(filePath).toString().split(' ');

const [N, M] = input;

const primeNumber = (number) => {
    if(number === 1) return ;

    for(let j = 2; j <= Math.sqrt(number); j++) {
        if(number % j === 0) {
            return ;
        }
    }

    return console.log(number);
}

for(let i = +N; i <= +M; i++) {
    primeNumber(i);
}