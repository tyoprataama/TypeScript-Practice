const persons: {
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

console.log(persons.others.hobbies);
