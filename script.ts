//  Define a class
class Department {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
}

const newDept = new Department('Accounting');
console.log(newDept);
