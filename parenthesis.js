const fs = require("fs")

//const readFileSyncAdress = '/din/stdin';

const readFileSyncAddress = 'C:/Webcoding/input.txt';

const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

const parenthesisArr = input.slice(1).map(str => str.trim().replace(/\r/g, ''));

const solution = (parenthesisArr) => {
    parenthesisArr.forEach(e => {
        let stack = [];
        let bol = true;
        for(let i = 0; i < e.length; i++) {
            if(e[i] === "(") {
                stack.push(e[i]);
            }
            else {
                if(stack.length === 0) {
                    bol = false;
                    break;
                }
                stack.pop();
            }
        }
        bol && stack.length === 0 ? console.log("YES") : console.log("NO");
    })
}

solution(parenthesisArr);