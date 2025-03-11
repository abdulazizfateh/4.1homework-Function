// // TASK 1.1
// function abbrevName(name) {
//     let firstNameFirstLetter = name[0].toUpperCase();
//     let lastNameFirstLetter = "";
//     for (let i = 0; i < name.length; i++) {
//         if (name[i] === " ") {
//             lastNameFirstLetter = name[i + 1].toUpperCase();
//         }
//     }
//     return `${firstNameFirstLetter}.${lastNameFirstLetter}`
// }
// console.log(abbrevName("Sam Harris"));

// // TASK 1.2 - #bestpractice
// function abbrevName(name) {
//     var nameArray = name.split(" "); // split() method converts String to Array from the seperator symbols used -> (" ", "", -,)
//     // it splits them from there and convert them as a value to the array
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }
// console.log(abbrevName("Sam Harris"));




// // TASK 2
// function century(year) {
//     return Math.ceil(year / 100);
// }
// console.log(century(1701));




// // TASK 3
// function flyBy(lamps, drone) {
//     let position = 0;
//     newLamps = '';
//     for (let i = 0; i < drone.length; i++) {
//         if (drone[i] === "T") {
//             position = i;
//         }
//     }
//     for (let i = 0; i < lamps.length; i++) {
//         if (i <= position) {
//             newLamps += "o";
//         } else {
//             newLamps += "x";
//         }
//     }
//     console.log(newLamps);
// }
// flyBy("xxxxxx", "===T");




// // TASK 4
// function switcher(x) {
//     let alp = "zyxwvutsrqponmlkjihgfedcba!? ";
//     for (let i = 0; i < alp.length; i++) {
//         for (let j = 0; j < x.length; j++) {
//             if (x[j] == i + 1) {
//                 x[j] = alp[i];
//             }
//         }
//     }
//     return x.join("");
// }
// console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));




// // TASK 5
// function calc(x) {
//     let total1 = "";
//     for (let i = 0; i < x.length; i++) {
//         let asciiValue = x.charCodeAt(i);
//         total1 += asciiValue;
//     }
//     let total2 = total1.split("");
//     for (let i = 0; i < total2.length; i++) {
//         if (total2[i] == "7") {
//             total2[i] = "1";
//         }
//     }
//     let sumTotal1 = 0;
//     for (let i = 0; i < total1.length; i++) {
//         sumTotal1 += Number(total1[i]);
//     }

//     let sumTotal2 = 0;
//     for (let i = 0; i < total2.length; i++) {
//         sumTotal2 += Number(total2[i]);
//     }

//     return sumTotal1 - sumTotal2;
// }
// console.log(calc("ifkhchlhfd"));




// // TASK 6
// let capitals = function (word) {
//     let ascii = [];
//     let asciiNums = [];
//     for (let i = 0; i < word.length; i++) {
//         if (word[i].toUpperCase() === word[i]) {
//             ascii.push(i);
//         }
//     }
//     return ascii;
// };
// console.log(capitals("CodEWaRs"));