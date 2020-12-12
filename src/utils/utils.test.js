import convert, { decimeterToMeters, hectoToKilogram } from './convert';

test('it returns a value', () => {
  expect(hectoToKilogram(10)).toEqual(1);
});

test('it returns a value in meters', () => {
  expect(decimeterToMeters(1)).toEqual(0.1);
});
