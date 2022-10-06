function Student(firstName, lastName, rollNumber, sex, dob, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.rollNumber = rollNumber;
  this.Sex = sex;
  this.dob = new Date(dob);
  this.age = age;

  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
Student.prototype.findegligibleOrNot = function findegligibleOrNot(minAge) {
  if (this.age > minAge) {
    document.write(this.firstName + " is egligible <br/>");
  } else {
    document.write(this.firstName + " is Not egligible <br/>");
  }
};
//instantiate object
const student1 = new Student("Chetan", "Gole", "1", "M", "3-17-1991", "31");
const student2 = new Student("Raj", "Wankhade", "17", "M", "3-18-2008", "14");

student1.findegligibleOrNot(18);
student2.findegligibleOrNot(18);

console.log(student2.getBirthYear());
console.log(student2.getFullName());
