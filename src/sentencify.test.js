const sentencify = require('./sentencify');

describe('sentencify', () => {
  it('should return hello', () => {
    expect(sentencify()).toBe('hello');
  });
});
