import { multipleFromArray } from './mockHelpers';

/**
 * EndpointMock
 */
class EndpointMock {
  seed: number;
  amount: number;

  constructor(seed: number | string = 1) {
    this.seed = convertToSeed(seed);
    this.amount = 1;
  }

  arrayBuilder(item: (index: number) => any) {
    const indexes = [...Array(this.amount)].map((_, index) => item(index));
    return multipleFromArray(indexes, this.amount, this.seed);
  }

  setValue({ amount, seed }: { amount?: number; seed?: number | string }) {
    if (amount !== undefined) {
      this.amount = amount;
    }
    if (seed !== undefined) {
      this.seed = convertToSeed(seed);
    }
    return this;
  }
}

/**
 * convertToSeed - Converts number or text to usable seed in EndpointMock class
 * @param input - Seed text or number
 * @returns seedNumber
 */
const convertToSeed = (input: string | number): number => {
  if (typeof input === 'string') {
    let number = 0;
    for (let index = 0; index < input.length; index++) {
      number += input.charCodeAt(index);
    }
    return number;
  }
  return input;
};

export default EndpointMock;
