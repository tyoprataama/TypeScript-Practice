//  Object types and Array types
const person: {
    name: string,
    age: number
    others: {
        hobbies: string,
        favourite: number,
        pet: boolean
    }
    sosmed: string[],
} = {
    name: 'Tyo',
    age: 21,
    others: {
        hobbies: 'Watching Film',
        favourite: 2,
        pet: true
    },
    sosmed: ["instagram", "twitter", "github"]
}
console.log(person.others.hobbies);

//  Looping example
for (const social of person.sosmed) {
    console.log(social.toUpperCase());
    
}

