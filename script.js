//  Object types and Array types
var persons = {
    name: 'Tyo',
    age: 21,
    others: {
        hobbies: 'Watching Film',
        favourite: 2,
        single: true
    },
    sosmed: ['instagram', 'twitter', 'github'],
    pet: [4, 'bird']
};
console.log(persons.others.hobbies);
persons.pet.push('fish');
console.log(persons.pet);
//  Looping example
for (var _i = 0, _a = persons.sosmed; _i < _a.length; _i++) {
    var social = _a[_i];
    console.log(social.toUpperCase());
}
