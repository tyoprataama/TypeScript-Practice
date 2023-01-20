"use strict";
//  Define a class
class Department {
    constructor(n, id) {
        this.n = n;
        this.id = id;
        // public name: string;
        this.student = []; //  Prevent edit or push outside classes
        // this.name = n;
    }
    describe() {
        console.log(`Department(${this.id}): ${this.n}`);
    }
    addStudent(students) {
        this.student.push(students);
        // this.id = S2;    Can't change id bcs readonly method
    }
    describeStudent() {
        console.log(this.student.length);
        console.log(this.student);
    }
}
const newDept = new Department('Accounting', 'S1');
console.log(newDept.describe());
newDept.addStudent('');
newDept.addStudent('');
// newDept.student[2] = '';    this not allowed when private method comes out
newDept.describeStudent();
// const newDeptCopy = { name: 'Economy', describe: newDept.describe } //  Must have name property bcs it refers to Department class
// newDeptCopy.describe();
