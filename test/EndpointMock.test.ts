import EndpointMock from '../src/EndpointMock';

describe('EndpointMock', () => {
  it('should define seed if given from setValue', () => {
    const SEED = 15;
    const endpointMock = new EndpointMock();
    const endpointMockWithSeed = endpointMock.setValue({ seed: SEED });
    expect(endpointMockWithSeed.seed).toEqual(SEED);
  });

  it('should define seed and amount if given from setValue', () => {
    const SEED = 15;
    const AMOUNT = 10;
    const endpointMock = new EndpointMock();
    const endpointMockWithSeed = endpointMock.setValue({ seed: SEED });
    expect(endpointMockWithSeed.seed).toEqual(SEED);

    const endpointMockWithSeedAndAmount = endpointMock.setValue({
      amount: AMOUNT,
    });
    expect(endpointMockWithSeedAndAmount.seed).toEqual(SEED);
    expect(endpointMockWithSeedAndAmount.amount).toEqual(AMOUNT);
  });

  it('should convert string seed to number', () => {
    const endpointMock = new EndpointMock('TEST');
    expect(endpointMock.seed).toEqual(320);

    endpointMock.setValue({ seed: '12345678-1234-5678-1234-567812345678' });
    expect(endpointMock.seed).toEqual(1860);
  });
});
