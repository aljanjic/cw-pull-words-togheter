const sentencify = require('./sentencify');

describe('sentencify', () => {
  it('["i", "am", "an", "AI"] should return "I am an AI."', () => {
    expect(sentencify(["i", "am", "an", "AI"])).toBe('I am an AI.');
  });

  it('["yes"] should return "Yes."', () => {
    expect(sentencify(['yes'])).toBe('Yes.')});

  it('["FIELDS", "of", "CORN", "are", "to", "be", "sown"] should return "FIELDS of CORN are to be sown."', () => {
    expect(sentencify(["FIELDS", "of", "CORN", "are", "to", "be", "sown"])).toBe("FIELDS of CORN are to be sown.")});  

  it('["i\'m", "afraid", "I", "can\'t", "let", "you", "do", "that"] should return "I\'m afraid I can\'t let you do that."', () => {
    expect(sentencify(["i'm", "afraid", "I", "can't", "let", "you", "do", "that"])).toBe("I'm afraid I can't let you do that.")});    


});



