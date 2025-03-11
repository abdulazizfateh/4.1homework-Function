// NESTED LOOPS
// TASK 1
const task1 = (num) => {
    for (let i = 0; i < num; i++) {
        let result = '';
        for (let j = 0; j < num; j++) {
            result += "*";
        }
        console.log(result)
    }
}
task1(5);




// TASK 2
const task2 = () => {
    for (let i = 1; i <= 5; i++) {
        let result = "";
        for (let j = 1; j <= i; j++) {
            result += j;
        }
        console.log(result);
    }
}
task2();




// TASK 3
const task3 = (n) => {
    for (let i = 1; i <= n; i++) {
        let product = 1;
        let final = "";
        for (let j = 1; j <= n; j++) { // i = 1, j = 1
            product = (i * j);
            final += product + " ";
        }
        console.log(final);
    }
}
task3(5);




// TASK 4
const task4 = () => {
    for (let i = 1; i <= 5; i++) {
        let result = "";
        for (let j = 1; j <= 5; j++) { //. i = 1, j = 1
            if (i === 1 || i === 5) {
                result += "* ";
            } else if ((i === 2 && j === 1) || (i === 2 && j === 5)) {
                result += "/ "; // Used slash as the console shows 3, instead of showing 3 same lines
            } else if ((i === 3 && j === 1) || (i === 3 && j === 5)) {
                result += "* ";
            } else if ((i === 4 && j === 1) || (i === 4 && j === 5)) {
                result += "/ "; // Used slash as the console shows 3, instead of showing 3 same lines
            }
            else {
                result += "  "
            }
        }
        console.log(result)
    }
}
task4();




// TASK 5 - Could not solve
const task5 = (numbers) => {
    let p = 0;
    for(let i = 0; i < numbers.length; i++){
        for(let j = numbers.length - 1; j > 0; j--){
            if(numbers[i] !== numbers[j]){
                p++;
            }
        }
    }
    console.log(p);
}
task5([1, 2, 3]);




// TASK 6
const task6 = () => {
    for (let i = 5; i >= 0; i--) {
        let result = "";
        for (let j = 1; j <= i; j++) {
            result += " " + j;
        }
        console.log(result);
    }
}
task2();




// TASK 7
const task7 = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === 7) {
                console.log([numbers[i], numbers[j]]);
            }
        }
    }
}
task7([2, 4, 3, 5, 7]);