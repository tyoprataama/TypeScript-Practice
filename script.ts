//  Define a class
class Department {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    describe(this: Department) { // Adding this parameters to avoid undefined
        console.log('Department: ' + this.name);
        
    }
}

const newDept = new Department('Accounting');
console.log(newDept.describe());

const newDeptCopy = { name: 'Economy', describe: newDept.describe } //  Must have name property bcs it refers to Department class
newDeptCopy.describe();

