//  Object types and Array types
var person = {
    name: 'Tyo',
    age: 21,
    others: {
        hobbies: 'Watching Film',
        favourite: 2,
        pet: true
    },
    sosmed: ["instagram", "twitter", "github"]
};
for (var _i = 0, _a = person.sosmed; _i < _a.length; _i++) {
    var social = _a[_i];
    console.log(social.toUpperCase());
}
console.log(person.others.hobbies);
