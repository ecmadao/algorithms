/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a non negative integer number num.
 * For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.
 *
 * Example:
 * For num = 5 you should return [0,1,1,2,1,2].
 *
 * Follow up:
 * - It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
 * - Space complexity should be O(n).
 * - Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
 */

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  const results = [];

  const count = (start, end, zeroCount) => {
    let pre = 1;
    results.push(pre);

    for (let i = start + 1; i <= end; i += 1) {
      if (i % 2 === 1) {
        pre += 1;
      } else {
        const bits = (i - 1).toString(2);
        let end = bits.length - 1;
        while (bits[end] === '1') {
          end -= 1;
        }
        const total = bits.length - 1 - end;
        pre = pre - total + 1;
      }
      results.push(pre);
    }
  };

  if (num === 0) return [0];
  if (num === 1) return [0, 1];

  let start = 2;
  let times = 1;
  results.push(0, 1);

  while (start <= num) {
    const next = start * 2;
    count(start, Math.min(next - 1, num), times);
    times += 1;
    start = next;
  }

  return results;
};
