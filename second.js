letter_count('arithmetics'); // {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}!

function letter_count(str) {
  const tracker = {};
  const split = str.split('');
  for (const letter of split) {
    if (tracker[letter]) {
      tracker[letter]++;
    } else {
      tracker[letter] = 1;
    }
  }
  return tracker
}