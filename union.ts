type Combinable = number | string;
type Conversion = 'as-number' | 'as-text';
const combine = function(
    input1: Combinable, 
    input2: Combinable,
    numConvert: Conversion,
    ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || numConvert === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(numConvert === 'as-number') {
    //     return +result; // To convert result as number
    // } else {
    //     return result.toString();
    // }
}
const combineAges = combine('Max', 45, 'as-text');
const combineNumber = combine('99', '32', 'as-number')
console.log(combineAges);
console.log(combineNumber);
