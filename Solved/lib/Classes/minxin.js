const willEatMixin = {
  willEat(givenFood) {
    return this.food.indexOf(givenFood) !== -1;
  },
  makeSound() {
    return this.sound;
  }
}

module.exports = willEatMixin;