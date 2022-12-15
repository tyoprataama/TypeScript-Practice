function add(n1, n2) {
    return n1 + n2;
}
function printRes(num) {
    console.log('Result:' + num);
}
printRes(add(3, 5));
var combinesVal;
combinesVal = add;
function cbFunc(n1, n2, cb) {
    var res = n1 + n2;
    cb(res);
}
cbFunc(23, 22, function (result) {
    console.log(result);
});
