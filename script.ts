function add(n1: number, n2: number) {
    return n1 + n2;
}
function printRes(num: number):void {
    console.log('Result:' + num);
}
printRes(add(3,5));

let combinesVal: (a: number, b: number) => number;
combinesVal = add;