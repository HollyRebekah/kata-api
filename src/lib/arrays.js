const getNthElement = (index, array) => {
  if (index < 4) {
    return array[index];
  }
  return array[index - 4];
};

const arrayToCSVString = (array) => {
  return array.join();
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => {
    array.push(element);
    return array;
};

const addToArray2 = (element, array) => array.concat([element]);

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  return numbers.map(number => String(number))
};

const uppercaseWordsInArray = (strings) => {
  return strings.map(word => word.toUpperCase());
};

const reverseWordsInArray = (strings) => {
  return strings.map(word => word.split('').reverse().join('')
  );
};

const onlyEven = (numbers) => {
  return numbers.filter( number => number % 2 === 0
  );
};

const removeNthElement2 = (index, array) => {
  return array.filter((_, itemIndex) => itemIndex !== index);
};

const elementsStartingWithAVowel = (strings) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return strings.filter(word => {
    const firstLetter = word[0].toLowerCase();
    
    return vowels.includes(firstLetter);
  });
};

const removeSpaces = (string) => {
  // your code here
};

const sumNumbers = (numbers) => {
  // your code here
};

const sortByLastLetter = (strings) => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
