function sentencify(words = []) {

  if (words.length === 0) return '';
  words[0] = `${words[0].charAt(0).toUpperCase()}${words[0].slice(1)}`;
  return `${words.join(' ')}.`;
}

module.exports = sentencify;
