/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const keyboardSets = [
      new Set(["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]),
      new Set(["A", "S", "D", "F", "G", "H", "J", "K", "L"]),
      new Set(["Z", "X", "C", "V", "B", "N", "M"])
  ];
  const result = [];

  for (const word of words) {
      const wordSet = new Set(word.toUpperCase().split(''))
      for (const keyboardSet of keyboardSets) {
          let isSubSet = true;
          for (const char of wordSet.values()) {
              if (!keyboardSet.has(char)) {
                  isSubSet = false;
                  break;
              }
          }
          if (isSubSet) {
              result.push(word);
              break;
          }
      }
  }
  return result;
};
