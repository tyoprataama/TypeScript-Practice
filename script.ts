//  Define a class
class Department {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
        
    }
}

const newDept = new Department('Accounting');
console.log(newDept.describe());

