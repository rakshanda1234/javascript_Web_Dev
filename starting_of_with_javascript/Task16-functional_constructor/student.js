class Student {
  constructor(firstName, lastName, dob, rollnumber, sex, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.rollnumber = rollnumber;
    this.sex = sex;
    this.age = age;
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//instantiate object
const student1 = new Student("john", "cena", "6-2-1997", "20", "M", "15");

const student2 = new Student("raj", "rao", "7-3-1996", "25", "M", "16");

console.log(student2.dob.getFullYear());
console.log(student1);
