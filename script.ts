let age: number;
age = 30;
console.log(age);

let button = document.querySelector('button');
button?.addEventListener('click', ()=> {
    console.log('Button clicked!');
})

//  Spread operator
const hobbies = ['Watching', 'Gaming'];
const activeHobbies = ['Coding'];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

//  Rest parameters
const Add = (...numbers: number[]) => { //  get unlimited params
    return numbers.reduce((curNum, curVal) => {
        return curNum + curVal;
    }, 0)
}
const restParam = Add(2,4,6,75,3,2);
console.log(restParam);

const Adding = (...numbers: [number, number, number]) => { //  get limited params
    return numbers.reduce((currNum, currVal) => {
        return currNum + currVal;
    }, 0)
}
const unrestParam = Adding(2,65,21)
console.log(unrestParam);

