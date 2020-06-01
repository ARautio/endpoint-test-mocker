import seedrandom from 'seedrandom';

const DEFAULT_SEED = 1;

const getRandomInt = (max: number, seed: number) => {
  return Math.floor(seedrandom(seed.toString())() * Math.floor(max));
};

/**
 * fromArray
 * @param array
 * @param seed
 * @param forceIndex
 */
export const fromArray = (
  array: any,
  seed: any = DEFAULT_SEED,
  forceIndex: number
) => {
  return array[forceIndex || getRandomInt(array.length - 1, seed)];
};

/**
 * multipleFromArray
 * @param array
 * @param seed
 */
export const multipleFromArray = (
  array: any,
  amount: number,
  seed: any = DEFAULT_SEED
) => {
  let resultArray: any[] = [];
  let selectableArray: any[] = array;
  for (let i = 0; i < amount; i++) {
    const index = getRandomInt(selectableArray.length - 1, seed + i);
    resultArray = [...resultArray, selectableArray[index]];
    selectableArray.splice(index, 1);
  }
  return resultArray;
};

/**
 * betweenIntegers
 * @param params.min - Minimum selectable value
 * @param params.max - Maximum selectable value
 * @param seed - seed number
 */
export const betweenIntegers = (
  { min, max }: { min: number; max: number },
  seed: any = DEFAULT_SEED
) => {
  return getRandomInt(max - min, seed) + min;
};
