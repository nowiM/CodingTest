const stack = [];
let index = -1;

const push = (v) => {
    stack[++index] = v;
} 

const pop = () => {
    if(index <= -1) {
        return -1;
    }
    return stack[index--];
}

const size = () => {
    return index + 1;
}

const empty = () => {
    if(index > -1) {
        return 0;
    }
    else {
        return 1;
    }
}

const top = () => {
    return stack[index];
}

function executeCommands(commands) {
    const results = [];
    for (let i = 0; i < commands.length; i++) {
        const [command, value] = commands[i].split(" ");

        switch (command) {
            case "push":
                push(value);
                break;
            case "pop":
                results.push(pop());
                break;
            case "top":
                results.push(top());
                break;
            case "size":
                results.push(size());
                break;
            case "empty":
                results.push(empty());
                break;
        }
    }
    return results; 
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const commands = [];

rl.question("명령의 수를 입력하세요: ", (N) => {
    console.log(`명령의 수: ${N}`);

    console.log("명령을 입력하세요:");
    rl.on("line", (input) => {
        commands.push(input);

        if (commands.length === parseInt(N)) {
            rl.close();
            const result = executeCommands(commands);
            console.log(result.join("\n"));
        }
    });
});
