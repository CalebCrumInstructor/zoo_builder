const Animal = require('./Animal');
const willEatMixin = require('./minxin');

class Sloth extends Animal {
  constructor(name, age, hasAlgae) {
    super(name, age);
    this.food = ['leaves', 'melons'];
    this.sound = 'Burps';
    this.hasAlgae = hasAlgae;
  }

  isGreen() {
    return this.hasAlgae;
  }

};

Object.assign(Sloth.prototype, willEatMixin);

module.exports = Sloth;