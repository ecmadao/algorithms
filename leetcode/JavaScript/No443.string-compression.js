/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of characters, compress it in-place.
 * The length after compression must always be smaller than or equal to the original array.
 * Every element of the array should be a character (not int) of length 1.
 * After you are done modifying the input array in-place, return the new length of the array.
 *
 * Follow up:
 * Could you solve it using only O(1) extra space?
 *
 * Example:
 * Input:
 * ["a","a","b","b","c","c","c"]
 * Output:
 * Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
 * Explanation:
 * "aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".
 *
 * Input:
 * ["a"]
 * Output:
 * Return 1, and the first 1 characters of the input array should be: ["a"]
 * Explanation:
 * Nothing is replaced.
 *
 * Input:
 * ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
 * Output:
 * Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
 * Explanation:
 * Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
 * Notice each digit has it's own entry in the array.
 *
 * Note:
 * - All characters have an ASCII value in [35, 126].
 * - 1 <= len(chars) <= 1000.
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let count = 1;
  let index = 1;
  let preIndex = 0;
  while (index < chars.length) {
    const char = chars[index];
    if (char !== chars[index - 1]) {
      if (count > 1) {
        const insert = `${count}`;
        chars.splice(preIndex + 1, count - 1, ...insert);
        preIndex = preIndex + insert.length + 1;
        index = preIndex + 1;
        count = 1;
      } else {
        preIndex = index;
        index += 1;
      }
    } else {
      count += 1;
      index += 1;
    }
  }
  if (count > 1) {
    chars.splice(preIndex + 1, count - 1, ...`${count}`);
  }
  return chars.length;
};
