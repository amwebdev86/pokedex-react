import {
  decimeterToMeters,
  hectoToKilogram,
  generateKeyProp,
} from '../utils/index';

test('it returns a value', () => {
  expect(hectoToKilogram(10)).toEqual(1);
});

test('it returns a value in meters', () => {
  expect(decimeterToMeters(1)).toEqual(0.1);
});
describe('generates a random string id', () => {
  const expected = generateKeyProp();

  test('it defines id', () => {
    expect(expected).toBeDefined();
  });
  test('it contains poke value ', () => {
    expect(expected).toContain('poke');
  });
});
