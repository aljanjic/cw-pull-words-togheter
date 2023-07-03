const sentencify = require('./sentencify');

describe('sentencify', () => {
  it('["i", "am", "an", "AI"] should return "I am an AI."', () => {
    expect(sentencify(["i", "am", "an", "AI"])).toBe('I am an AI.');
  });

  it('["i", "am", "an", "AI"] should return "I am an AI."', () => {
    expect(sentencify(['yes'])).toBe('Yes.')});

});



