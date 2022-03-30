// bind: rang buoc ko goi ham => tra ra ham 
// call: rang buoc va goi ham

const teacher =  {
    firstName: 'Zidane',
    lastName: 'Learn Tech Tips'
}

const student = {
    firstName: 'Vi',
    lastName: 'Ly',
    displayFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

student.displayFullName.call(student);

student.displayFullName.call(teacher);