const sockMerchant = require('../scripts/sockMerchant');

describe('Sock Merchant Algorithm', () => {
  it('Algorithm result only 2 array', () => {
    expect(sockMerchant(2, [10, 10])).toBe(1);
  });
  it('Algorithm result only 3 array', () => {
    expect(sockMerchant(3, [10, 10, 10])).toBe(1);
  });
  it('Algorithm result only 4 array', () => {
    expect(sockMerchant(4, [10, 10, 10, 10])).toBe(2);
  });
  it('Algorithm result should be 1 array 4', () => {
    expect(sockMerchant(4, [10, 11, 10, 10])).toBe(1);
  });
  it('Algorithm result only 8 array should be 4', () => {
    expect(sockMerchant(8, [10, 11, 10, 11, 20, 20, 21, 21])).toBe(4);
  });
  it('Algorithm result only 3 array should be 0', () => {
    expect(sockMerchant(3, [10, 11, 12])).toBe(0);
  });
});
