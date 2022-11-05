'use strict'
class User {
    constructor (username, password){
    this.username = username;
    this.password = password;
}
validatePassword () {
    if (this.password.length > 5) {
        return true;
    }
    return false;
   }
   validateUsername () {
    if (this.username.length > 5) {
        return true;
    }
    return false;
   }
}
let a = 'Akakiy';
let b = 'zxcAkakiy7';
const person = new User(a, b);
console.log(person);
console.log(person.validateUsername());
console.log(person.validatePassword());
