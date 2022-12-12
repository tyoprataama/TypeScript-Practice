var combine = function (input1, input2, numConvert) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (numConvert === 'as-number') {
        return +result; // To convert result as number
    }
    else {
        return result.toString();
    }
};
var combineAges = combine('Max', 45, 'as-text');
var combineNumber = combine('99', '32', 'as-number');
console.log(combineAges);
console.log(combineNumber);
