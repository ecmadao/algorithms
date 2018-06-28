/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an encoded string, return it's decoded string.
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
 * Note that k is guaranteed to be a positive integer.
 * You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
 * Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.
 * For example, there won't be input like 3a or 2[4].
 *
 * Example:
 * s = "3[a]2[bc]", return "aaabcbc".
 * s = "3[a2[c]]", return "accaccacc".
 * s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const decode = (start) => {
    let numStr = '';
    let string = '';
    while (s[start] !== '[' && start < s.length) {
      numStr += s[start];
      start += 1;
    }
    if (numStr === '') numStr = '1';
    start += 1;

    while (start < s.length) {
      const str = s[start];
      if (/\d/.test(str) || str === '[') {
        const tmp = decode(start);
        string += tmp.string;
        start = tmp.start;
      } else if (str === ']') {
        string = string.repeat(Number(numStr));
        start += 1;
        return {
          string,
          start
        };
      } else {
        string += str;
        start += 1;
      }
    }
    return {
      string,
      start
    };
  };

  let result = '';
  let start = 0;
  while (start < s.length) {
    const str = s[start];
    if (/\d/.test(str) || str === '[') {
      const tmp = decode(start);
      result += tmp.string;
      start = tmp.start;
    } else {
      result += str;
      start += 1;
    }
  }

  return result;
};

// Test case
console.log(decodeString("3[a]2[bc]")); // aaabcbc
console.log(decodeString("3[a]bc")); // aaabc
console.log(decodeString("3[a2[c]]")); // accaccacc
console.log(decodeString("3[a2[c4[d]e]f]g")); // acddddecddddefacddddecddddefacddddecddddefg
console.log(decodeString("2[abc]3[cd]ef")); // abcabccdcdcdef
console.log(decodeString("sd2[f2[e]g]i")); // sdfeegfeegi
