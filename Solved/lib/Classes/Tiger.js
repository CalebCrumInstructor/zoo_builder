const Animal = require('./Animal');
const willEatMixin = require('./minxin');

class Tiger extends Animal {
  constructor(name, age, rescuedFrom) {
    super(name, age);
    this.food = ['meat'];
    this.sound = 'Roar';
    this.rescuedFrom = rescuedFrom;
  }

  from() {
    return this.rescuedFrom;
  }

};

Object.assign(Tiger.prototype, willEatMixin);

module.exports = Tiger;