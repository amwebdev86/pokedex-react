import {
  decimeterToMeters,
  hectoToKilogram,
  generateKeyProp,
  compactArray,
} from '../utils/index';
describe('converts unit measurement', () => {
  const hecto = 10;
  const kiloGram = 1;
  const decimeter = 10;
  const meter = 1;
  test('it returns a value', () => {
    expect(hectoToKilogram(hecto)).toEqual(kiloGram);
  });
  test('it returns a value in meters', () => {
    expect(decimeterToMeters(decimeter)).toEqual(meter);
  });
});
describe('compacted arrays', () => {
  const testArray = ['1', '2', '', null, undefined, 'value'];
  const expected = ['1', '2', 'value'];

  let newArray = compactArray(testArray);
  it('matches with no falsy values', () => {
    expect(newArray).toEqual(expect.arrayContaining(expected));
  });
});
describe('generates a random string id', () => {
  const expected = generateKeyProp();

  test('it defines id', () => {
    expect(expected).toBeDefined();
  });
  test('it contains poke value', () => {
    expect(expected).toContain('poke');
  });
});
