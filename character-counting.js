var params = process.argv.slice(2).join('');

function countLetters(letters) {
  return letters.split('').reduce(function(result, letter) {
    result[letter] ? result[letter]++ : result[letter] = 1;
    return result;
  }, {});
};

console.log(countLetters(params));