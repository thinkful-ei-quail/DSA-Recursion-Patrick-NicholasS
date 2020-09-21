function countSheep(numSheep) {
  if (numSheep <= 0) {
    console.log('All sheep jumped over the fence');
    return;
  }
  console.log(`${numSheep}: Another sheep jumps over the fence`);
  return countSheep(numSheep - 1);
}

function powerCalculator(base, expo) {
  if (expo < 0) {
    console.log('exponent should be >= 0');
    return;
  }
  if (expo === 0) {
    return 1;
  }
  return base * powerCalculator(base, expo - 1);
}

function reverseString(word) {
  if (word === '') {
    return '';
  }
  return word[word.length - 1] + reverseString(word.slice(0, word.length - 1));
}

function nthNumber(num) {
  if (num === 1) {
    return 1;
  }
  return num + nthNumber(num - 1);
}

function stringSplitter(string, split) {
  const results = [];
  stringSplitterHelper(string, split, results);
  return results;
}

function stringSplitterHelper(string, split, results) {
  const loc = string.indexOf(split);
  if(!string) {
    return;
  }
  if (loc === -1) {
    results.push(string);
    return;
  }
  const element = string.slice(0, loc);
  if(element) {
    results.push(element);
  }
  stringSplitterHelper(string.slice(loc + 1, string.length), split, results);
}

function fibonacci(numb) {
  if (numb <= 2) {
    return 1;
  }
  return fibonacci(numb-1) + fibonacci(numb-2);
}

module.exports = {
  countSheep,
  powerCalculator,
  reverseString,
  nthNumber,
  stringSplitter,
  fibonacci
};

// const {nthNumber} = require("./recursion")
