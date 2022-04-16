const Tiger = require('../lib/Classes/Tiger');

test('Can set rescued from value via constructor', () => {
  const testVal = 'The King';
  const tiger = new Tiger('Diego', '30', testVal);
  expect(tiger.rescuedFrom).toBe(testVal);
});

test('from() should return rescued from value', () => {
  const testVal = 'The King';
  const tiger = new Tiger('Diego', '30', 'The King');
  expect(tiger.from()).toBe(testVal);
});