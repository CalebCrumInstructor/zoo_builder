module.exports = class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age
    this.isHungry = true;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

}