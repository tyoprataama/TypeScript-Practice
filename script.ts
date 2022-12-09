const persons: {
    name: string,
    age: number
    others: {
        hobbies: string,
        favourite: number,
        pet: boolean
    }
} = {
    name: 'Tyo',
    age: 21,
    others: {
        hobbies: 'Watching Film',
        favourite: 2,
        pet: true
    }
}

console.log(persons.others.hobbies);
