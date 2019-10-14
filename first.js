function pigIt(str){
  //Code here
  let split = str.split(' ');
  let wordAlt;
  const answer = [];
  for (const word of split) {
    wordAlt = word.split('');
    let punc;
    
    if (!!wordAlt[wordAlt.length - 1].match(/^[.,:!?]/)) {
      punc = wordAlt.splice(wordAlt.length - 1, 1)[0];
    }
    let firstLetter = wordAlt.splice(0, 1);
    
    if (punc) {
      wordAlt.push(punc);
    } else {
      wordAlt.push(firstLetter + 'ay');
    }

    answer.push(wordAlt.join(''));
  }
  return answer.join(' ');
}

console.log(pigIt('Hey buddy, this is in piglatin! haha'));
