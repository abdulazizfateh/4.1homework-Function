// 1. Berilgan son juft bo'lsa "Juft" qaytarsin, toq bo'lsa "Toq" qaytarsin.
// 2. Berilgan son musbat bo'lsa "Musbat" qaytarsin. Manfiy bo'lsa "Manfiy" qaytarsin. Agar 0 bo'lsa, "Nol" qaytarsin.
// 3. Agar son musbat bo'lsa 1 qo'shing aks holsa 2 ayring
// 4. Funksiya 2 ta parameter qabul qiladi. Birinchi sonni ikkinchi son darajasi hisoblanadi. Natijani qayatring
// 5. Berilgan stringning uzunligini qaytaring
// 6. Ikkita son berilgan, ulardan kattasini qaytaring
// 7. Berilgan arrayning birinchi elementini qaytaring.
// 8. n berilgan bo'lsa, 1 dan n gacha bo'lgan barcha sonlarni yig'indisini hisoblab qaytaring.
// 9. 1 dan 6 gacha bo'lgan son beriladi. 1 = Dushanba, 2 = Seshanba, ..., 0 = Yakshanba deb qaytaring. Agar noto'g'ri son berilsa,
// "Noto'g'ri kun" qaytarsin.
// 10. Funksiya k va n (n>k) soni kirsa k dan n gacha juft sonlar array qilib qaytaring

// TASK 1
const oddOrEven = (number) => {
    if (number % 2 === 0 && number !== 0) {
        return "Juft"
    } else if (number === 0) {
        return "0";
    }
    return "Toq";
}
console.log(oddOrEven(10));



// TASK 2.1
// const positiveNegative = (number) => {
//   return number === 0 ? "0" : number > 0 ? "Positive" : "Negative";
// }
// console.log(positiveNegative(1));

// TASK 2.2
const positiveNegative = (number) => {
    if (number === 0) {
        return "0";
    }
    if (number > 0) {
        return "Positive";
    } else {
        return "Negative";
    }

}
console.log(positiveNegative(0));


// TASK 3.1
const addorSubtract = (number) => {
    if (number === 0) {
        return number;
    }
    if (number > 0) {
        number++
    } else {
        number -= 2;
    }
    return number;
}
console.log(addorSubtract(0));


// TASK 3.2
// const addorSubtract = (number) => {
//     return number === 0 ? 0 : number > 0 ? number += 1 : number -= 2;
// }
// console.log(addorSubtract(-1));



// TASK 4
const toPower = (num, power) => {
    return num ** power;
return Math.pow(num, power); // Another way of raising to power
}
console.log(toPower(2, 5));



// TASK 5
const stringLength = (name) => {
    return name.length;
}
console.log(stringLength("Abdulaziz"));



// TASK 6
const findTheMaxNum = (num1, num2) => {
    return num1 > num2 ? num1 : num1 === num2 ? "Equal" : num2;
}
console.log(findTheMaxNum(30, 30));



// TASK 7
const firstElementOfArray = (numbers) => {
    return numbers[0];
}
console.log(firstElementOfArray(["10", "20", "30", "40", "50"]));



// TASK 8.1 - Using For Loop
const findSum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(findSum(5));


// TASK 8.2 - Using While Loop
// const findSum = (n) => {
//     let sum = 0;
//     let i = 1;
//     while (i <= n) {
//         sum += i;
//         i++;
//     }
//     return sum;
// }
// console.log(findSum(5));


// TASK 8.3 - Using Do-While Loop
// const findSum = (n) => {
//     let sum = 0;
//     let i = 1;
//     if (n === 0) {
//         return sum;
//     }
//     do {
//         sum += i;
//         i++;
//     } while (i <= n)
//     return sum;
// }
// console.log(findSum(5));



// TASK 9
const findTheCorrespondingWeekDays = (weekDay) => {
    switch (weekDay) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid week day";
    }
}
console.log(findTheCorrespondingWeekDays(0));



// TASK 10.1 - Without method
const findTheEvenNum = (k, n) => {
    let evenNums = [];
    for (let i = k; i <= n; i++) {
        if (i % 2 === 0) {
            evenNums[i / 2 - 1] = i;
        }
    }
    return evenNums;
}
console.log(findTheEvenNum(1, 11));

// TASK 10.2 - With "push()" method
// const findTheEvenNum = (k, n) => {
//     let evenNums = [];
//     for (let i = k; i <= n; i++) {
//         if (i % 2 === 0) {
//             evenNums.push(i);
//         }
//     }
//     return evenNums;
// }
// console.log(findTheEvenNum(1, 11));