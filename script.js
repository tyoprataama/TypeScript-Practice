"use strict";
//  Define a class
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
}
const newDept = new Department('Accounting');
console.log(newDept.describe());
const newDeptCopy = { name: 'Economy', describe: newDept.describe }; //  Must have name property bcs it refers to Department class
newDeptCopy.describe();
