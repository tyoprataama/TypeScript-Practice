const combines = function(
    input1: number | string, 
    input2: number | string,
    numConvert: 'as-number' | 'as-text',
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
const combinesAges = combines('Max', 45, 'as-text');
const combinesNumber = combines('99', '32', 'as-number')
console.log(combinesAges);
console.log(combinesNumber);

