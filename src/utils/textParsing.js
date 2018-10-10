export const joinArrayGrammatically = (arr) => {
  let outStr = '';
    if (arr.length === 1) {
        outStr = arr[0];
    } else if (arr.length === 2) {
        outStr = arr.join(' and ');
    } else if (arr.length > 2) {
        outStr = arr.slice(0, -1).join(', ') + ', and ' + arr.slice(-1);
    }
    return outStr;
};

export const capitalizeWord = (word) => {
  let lower = word.toLowerCase();

  return lower.charAt(0).toUpperCase() + lower.substr(1);
};

export const initialCasePhrase = (phrase) => {
  let words = [];

  let substrings = phrase.split(' ');

  substrings.forEach(s => words.push(capitalizeWord(s)));

  return words.join(' ');
};