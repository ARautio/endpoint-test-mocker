import { fromArray, multipleFromArray } from '../src/mockHelpers';

describe('fromArray', () => {
  it('should select item from array by seed', () => {
    const testArray = [...Array(10)].map((_, index) => index);
    expect(fromArray(testArray, 1)).toEqual(2);
  });

  it('should select item from array by default seed', () => {
    const testArray = [...Array(10)].map((_, index) => index);
    expect(fromArray(testArray)).toEqual(2);
  });

  it('should select different item from array with  a different seed', () => {
    const testArray = [...Array(10)].map((_, index) => index);
    expect(fromArray(testArray, 2)).toEqual(6);
  });
});

describe('multipleFromArray', () => {
  it('should select item from array by seed', () => {
    const testArray = [...Array(10)].map((_, index) => index);
    expect(multipleFromArray(testArray, 2, 1)).toEqual([2, 6]);
  });

  it('should select all the items if amount of items is same as length', () => {
    const testArray = [...Array(10)].map((_, index) => index);
    expect(multipleFromArray(testArray, 10, 1)).toEqual([
      2,
      6,
      7,
      3,
      0,
      5,
      1,
      8,
      4,
      9,
    ]);
  });

  it('should select different item from array with  a different seed', () => {
    const testArray = [...Array(10)].map((_, index) => index);
    expect(multipleFromArray(testArray, 2, 10)).toEqual([8, 2]);
  });
});
