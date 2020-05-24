import { multipleFromArray } from './mockHelpers';

class EndpointMock {
  seed: number;
  amount: number;

  constructor(seed: number = 1) {
    this.seed = seed;
    this.amount = 1;
  }

  arrayBuilder(item: (index: number) => any) {
    const indexes = [...Array(this.amount)].map((_, index) => item(index));
    return multipleFromArray(indexes, this.amount, this.seed);
  }

  setValue({ amount, seed }: { amount?: number; seed?: number }) {
    if (amount !== undefined) {
      this.amount = amount;
    }
    if (seed !== undefined) {
      this.seed = seed;
    }
    return this;
  }
}

export default EndpointMock;
