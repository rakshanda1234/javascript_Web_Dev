//class
class Student {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//instantiate object
const student1 = new Student("Chetan", "Gole", "3-17-1991");
const student2 = new Student("Raj", "Wankhade", "3-18-2008");

console.log(student2.getFullName());
console.log(student1);
