const Jest = require('jest');
const sum = require('./index');

describe('test suite', () => {
 it('test sum', () => {
  const a = 1;
  const b = 2;
  const result = sum(a, b);
  expect(result).toEqual(3);
 });
});
