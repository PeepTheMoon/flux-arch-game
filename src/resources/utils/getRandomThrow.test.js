const { default: getRandomThrow } = require('./getRandomThrow.js');

describe('getRandomThrow function', () => {
  it('returns a random number between 0 and 2', () => {
    const computerThrow = getRandomThrow();

    expect(computerThrow).not.toBeUndefined();
  });
});
