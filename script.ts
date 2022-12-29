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

