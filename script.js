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
