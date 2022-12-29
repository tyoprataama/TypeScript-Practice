"use strict";
let age;
age = 30;
console.log(age);
let button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    console.log('Button clicked!');
});
//  Spread operator
const hobbies = ['Watching', 'Gaming'];
const activeHobbies = ['Coding'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
//  Rest parameters
const Add = (...numbers) => {
    return numbers.reduce((curNum, curVal) => {
        return curNum + curVal;
    }, 0);
};
const restParam = Add(2, 4, 6, 75, 3, 2);
console.log(restParam);
const Adding = (...numbers) => {
    return numbers.reduce((currNum, currVal) => {
        return currNum + currVal;
    }, 0);
};
const unrestParam = Adding(2, 65, 21);
console.log(unrestParam);
