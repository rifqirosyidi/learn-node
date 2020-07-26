class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My Name is ${this.name}, I am ${this.age}`);
  }
}

module.exports = Person;
