//  Define a class
class Department {
    // public name: string;
    private student: string[] = []; //  Prevent edit or push outside classes
    constructor(private n: string, private id: string) {    //  Simplified the code
        // this.name = n;
    }
    describe(this: Department) { // Adding this parameters to avoid undefined
        console.log(`Department(${this.id}): ${this.n}`);
    }
    addStudent(students: string) {
        this.student.push(students);
    }
    describeStudent() {
        console.log(this.student.length);
        console.log(this.student);
    }
}

const newDept = new Department('Accounting', 'S1');
console.log(newDept.describe());
newDept.addStudent('')
newDept.addStudent('')
// newDept.student[2] = '';    this not allowed when private method comes out
newDept.describeStudent();
// const newDeptCopy = { name: 'Economy', describe: newDept.describe } //  Must have name property bcs it refers to Department class
// newDeptCopy.describe();

