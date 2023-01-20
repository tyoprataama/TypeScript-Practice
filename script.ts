//  Define a class
class Department {
    // public name: string;
    private student: string[] = []; //  Prevent edit or push outside classes
    constructor(private n: string, private readonly id: string) {    //  Simplified the code
        // this.name = n;
    }
    describe(this: Department) { // Adding this parameters to avoid undefined
        console.log(`Department(${this.id}): ${this.n}`);
    }
    addStudent(students: string) {
        this.student.push(students);
        // this.id = S2;    Can't change id bcs readonly method
    }
    describeStudent() {
        console.log(this.student.length);
        console.log(this.student);
    }
}

class CSDepartment extends Department {
    admin: string[]
    constructor(id: string, admin: string[]) {
        super(id, 'Max');
        this.admin = admin;
    }
}

class AccDepartment extends Department {
    constructor(id: string, private report: string[]) {
        super(id, 'Accounting')
    }
    addReport(text: string) {
        this.report.push(text);
    }
    printReport() {
        console.log(this.report);
        
    }
}

// const newDept = new Department('Accounting', 'S1');
// console.log(newDept.describe());
// newDept.addStudent('Max')
// newDept.addStudent('Chloe')
// // newDept.student[2] = '';    this not allowed when private method comes out
// newDept.describeStudent();
// const newDeptCopy = { name: 'Economy', describe: newDept.describe } //  Must have name property bcs it refers to Department class
// newDeptCopy.describe();

const it = new CSDepartment('CS', ['Max']);
console.log(it.describe());
it.addStudent('Max')
it.addStudent('Chloe')
// newDept.student[2] = '';    this not allowed when private method comes out
it.describeStudent();
console.log(it);

const accounting = new AccDepartment('Accounting', []);
accounting.addReport('This is accounting report');
accounting.printReport();