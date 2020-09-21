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

function stringSplitter(string, split, results = []) {
  const loc = string.indexOf(split);
  if (!string) {
    return;
  }
  if (loc === -1) {
    results.push(string);
    return;
  }
  const element = string.slice(0, loc);
  if (element) {
    results.push(element);
  }
  stringSplitter(string.slice(loc + 1, string.length), split, results);
  return results;
}

function fibonacci(numb) {
  if (numb <= 2) {
    return 1;
  }
  return fibonacci(numb - 1) + fibonacci(numb - 2);
}

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e'],
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

function smallMazeBasic(maze = mySmallMaze, locations = [{currRow: 0, currColumn: 0}], path = '') {
  const {currRow, currColumn} = locations[locations.length - 1];
  if (
    currRow < 0 ||
    currColumn < 0 ||
    currRow >= maze.length ||
    currColumn >= maze[currRow].length
  ) {
    return '';
  }
  switch (maze[currRow][currColumn]) {
  case ' ':
    if (!locations.some(loc => loc.currRow === currRow && loc.currColumn === currColumn + 1)) {
      locations.push({currRow, currColumn: currColumn + 1});
      const result = smallMazeBasic(maze, locations, path + 'R');
      if(result) {
        return result;
      }
    }
    if (!locations.some(loc => loc.currRow === currRow && loc.currColumn === currColumn - 1)) {
      locations.push({currRow, currColumn: currColumn - 1});
      const result = smallMazeBasic(maze, locations, path + 'L');
      if(result) {
        return result;
      }
    }
    if (!locations.some(loc => loc.currRow === currRow - 1 && loc.currColumn === currColumn)) {
      locations.push({currRow: currRow - 1, currColumn});
      const result = smallMazeBasic(maze, locations, path + 'U');
      if(result) {
        return result;
      }
    }
    if (!locations.some(loc => loc.currRow === currRow + 1 && loc.currColumn === currColumn)) {
      locations.push({currRow: currRow + 1, currColumn});
      const result = smallMazeBasic(maze, locations, path + 'D');
      if(result) {
        return result;
      }
    }
    return '';
  case '*':
    return '';
  case 'e':
    return `Path to exit: ${path}`;
  default:
    return 'Error in maze';
  }
}

function mazeBasic() {
  return smallMazeBasic(maze);
}

function smallMazeAllPaths(maze = mySmallMaze, locations = [{currRow: 0, currColumn: 0}], path = '') {
  const {currRow, currColumn} = locations[locations.length - 1];
  if (
    currRow < 0 ||
    currColumn < 0 ||
    currRow >= maze.length ||
    currColumn >= maze[currRow].length
  ) {
    return '';
  }
  switch (maze[currRow][currColumn]) {
  case ' ':
    if (!locations.some(loc => loc.currRow === currRow && loc.currColumn === currColumn + 1)) {
      locations.push({currRow, currColumn: currColumn + 1});
      const result = smallMazeAllPaths(maze, locations, path + 'R');
      if(result) {
        return result;
      }
      locations.pop();
    }
    if (!locations.some(loc => loc.currRow === currRow && loc.currColumn === currColumn - 1)) {
      locations.push({currRow, currColumn: currColumn - 1});
      const result = smallMazeAllPaths(maze, locations, path + 'L');
      if(result) {
        return result;
      }
      locations.pop();
    }
    if (!locations.some(loc => loc.currRow === currRow - 1 && loc.currColumn === currColumn)) {
      locations.push({currRow: currRow - 1, currColumn});
      const result = smallMazeAllPaths(maze, locations, path + 'U');
      if(result) {
        return result;
      }
      locations.pop();
    }
    if (!locations.some(loc => loc.currRow === currRow + 1 && loc.currColumn === currColumn)) {
      locations.push({currRow: currRow + 1, currColumn});
      const result = smallMazeAllPaths(maze, locations, path + 'D');
      if(result) {
        return result;
      }
      locations.pop();
    }
    return '';
  case '*':
    return '';
  case 'e':
    console.log(`Path to exit: ${path}`);
    return '';
  default:
    return 'Error in maze';
  }
}

function mazeAllPaths() {
  return smallMazeAllPaths(maze);
}

function anagram(string,index = 0, word = '') {
  if(!string) {
    return '';
  }
  if(index< 0 || index>= string.length) {
    console.log(word);
    return '';
  }
return string.charAt(index) + anagram(string, index +1, word = word + string.charAt(index));
}


module.exports = {
  countSheep,
  powerCalculator,
  reverseString,
  nthNumber,
  stringSplitter,
  fibonacci,
  factorial,
  smallMazeBasic,
  mazeBasic,
  smallMazeAllPaths,
  mazeAllPaths,
  anagram
};
