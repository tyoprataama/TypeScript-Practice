//  Enum
enum Role {ADMIN = 'ADMIN', DEV = 'REACT'}
//  Object types and Array types
const persons: {
    name: string,
    age: number
    others: {
        hobbies: string,
        favourite: number,
        single: boolean,
    }
    sosmed: string[],
    pet: [number, string],
    role: string,
    major: any[],
} = {
    name: 'Tyo',
    age: 21,
    others: {
        hobbies: 'Watching Film',
        favourite: 2,
        single: true
    },
    sosmed: ['instagram', 'twitter', 'github'],
    pet: [4, 'bird'],
    role: Role.DEV,
    major: ['Economy']
}

console.log(persons.others.hobbies);

persons.pet.push('fish');
console.log(persons.pet);
console.log(persons.role);



//  Looping example
for (const social of persons.sosmed) {
    console.log(social.toUpperCase());
}

