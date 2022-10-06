"use strict";

class User {
  static count = 0;
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    User.count++;
  }

  static countUsers() {
    console.log("There are 50 users");
  }

  printNumberOfUsers() {
    console.log("Number of users registerd = " + User.count);
  }

  register() {
    console.log(this.username + " is now registerd");
  }

  registeredUsers() {
    console.log("Number of registered Users =" + User.count);
  }
}

const Raj = new User("Raj Wankhade", "raj@gmail.com", "pass1222");
const Chetan = new User("Chetan Gole", "chetan@gmail.com", "1272");
const Raksha = new User("Raksha Wankhade", "raksha@gmail.com", "pass65222");

//let bob = new User("bob", "bob@email.com", "12345");
//bob.register();

User.countUsers();
Raj.printNumberOfUsers();
Raksha.registeredUsers();
Raj.register();
