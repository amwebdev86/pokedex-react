import convert, { hectoToKilogram } from './convert';

test('it returns a value', () => {
  expect(hectoToKilogram(10)).toEqual(1);
});
