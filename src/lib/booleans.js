const negate = (a) => {
  return !a
};

const both = (a, b) => {
   return a && b
};

const either = (a, b) => {
  return a || b
};

const none = (a, b) => {
  return !a && !b
};

const one = (a, b) => {
  return a && !b || !a && b  
};

const truthiness = (a) => {
  return Boolean(a)   
};

const isEqual = (a, b) => {
  return a === b
};

const isGreaterThan = (a, b) => {
  return a > b
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b
};

const isOdd = (a) => {
  return a % 2 === 1
};

const isEven = (a) => {
  return a % 2 === 0
};

const isSquare = (a) => {
  return Number.isInteger(Math.sqrt(a))
};

const startsWith = (char, string) => {
  return char === string[0]
};

const containsVowels = (string) => {
  string.toLowerCase(string.includes('a' || 'e' || 'i' || 'o' || 'u'))
};

const isLowerCase = (string) => {
  return string === string.toLowerCase()
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
