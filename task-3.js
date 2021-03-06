// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// function compareLength(a, b) {
//   return b.length - a.length;
// }

// const findLongestWord = function (string) {
//   return string.split(" ").sort(compareLength)[0];
// };

const findLongestWord = function (string) {
  string = string.split(" ");
  let longest = 0;
  let longestPosition;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i].length >= longest) {
      longest = string[i].length;
      longestPosition = i;
    }
  }
  return string[longestPosition];
};

//  /*
//   * Вызовы функции для проверки работоспособности твоей реализации.
//   */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
