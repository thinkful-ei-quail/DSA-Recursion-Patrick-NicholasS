function countSheep(numSheep) {
  if(numSheep <= 0) {
    console.log('All sheep jumped over the fence');
    return;
  }
  console.log(`${numSheep}: Another sheep jumps over the fence`);
  return countSheep(numSheep - 1);
}

function powerCalculator(base, expo) {
  if(expo < 0) {
    console.log('exponent should be >= 0');
    return;
  }
  if (expo === 0) {
    return 1;
  }
  return base * powerCalculator(base, expo - 1);
}

function reverseString(word) {
  if(word === '') {
    return '';
  }
  return word[word.length - 1] + reverseString(word.slice(0, word.length - 1));
}

function nthNumber(num) {
 if (num === 1) {
   return 1;
 }
 return num + nthNumber(num-1);
}

function stringSplitter(string,split) {
  const loc = string.indexOf(split);
  if (loc === -1)
  return string;

const result = [string.slice(0,loc)]
result.push(stringSplitter(string.slice(loc+1,string.length),split));
return result;
}

module.exports = {
  countSheep,
  powerCalculator,
  reverseString,
  nthNumber,
  stringSplitter
};

// const {nthNumber} = require("./recursion")