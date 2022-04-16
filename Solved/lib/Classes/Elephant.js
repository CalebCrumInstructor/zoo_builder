const Animal = require('./Animal');
const willEatMixin = require('./minxin');


class Elephant extends Animal {
  constructor(name, age, tusksPresent) {
    super(name, age);
    this.food = ['leaves', 'grass'];
    this.sound = 'Trumpets';
    this.tusksPresent = tusksPresent;
  }

  hasTusks() {
    return this.tusksPresent;
  }

};

Object.assign(Elephant.prototype, willEatMixin);


module.exports = Elephant;