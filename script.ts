//  Object types and Array types
const persons: {
    name: string,
    age: number
    others: {
        hobbies: string,
        favourite: number,
        single: boolean
    }
    sosmed: string[],
    pet: [number, string],
} = {
    name: 'Tyo',
    age: 21,
    others: {
        hobbies: 'Watching Film',
        favourite: 2,
        single: true
    },
    sosmed: ['instagram', 'twitter', 'github'],
    pet: [4, 'bird']
}

console.log(persons.others.hobbies);

persons.pet.push('fish');
console.log(persons.pet);


//  Looping example
for (const social of persons.sosmed) {
    console.log(social.toUpperCase());
}

