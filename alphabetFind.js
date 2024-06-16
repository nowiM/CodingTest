const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(filePath).toString();

const alphabet = [];

for(let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i))
}

for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < alphabet.length; j++) {
        if(input[i] === alphabet[j]) {
            alphabet[j] = i;
            break;
        }
    }
}

const answer = alphabet.map(e => typeof e === 'string' ? -1 : e);

console.log(answer.join(' '))