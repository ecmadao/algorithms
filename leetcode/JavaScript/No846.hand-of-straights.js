/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Alice has a hand of cards, given as an array of integers.
 * Now she wants to rearrange the cards into groups so that each group is size W,
 * and consists of W consecutive cards.
 * Return true if and only if she can.
 *
 * Example:
 * Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
 * Output: true
 * Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8].
 *
 * Input: hand = [1,2,3,4,5], W = 4
 * Output: false
 * Explanation: Alice's hand can't be rearranged into groups of 4.
 *
 * Note:
 * 1 <= hand.length <= 10000
 * 0 <= hand[i] <= 10^9
 * 1 <= W <= hand.length
 *
 * 该题目的描述和实例有误导性。实际上在组成新序列的时候，原数组内数字的 index 顺序不需考虑。
 * 即，[2, 1, 3], 3 也是合法的。
 */

/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
const isNStraightHand = (hand, W) => {
  if (W === 1) return true;
  if (hand.length % W !== 0) return false;

  const map = new Map();

  for (const num of hand) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  while (map.size) {
    const start = Math.min(...map.keys());

    let validate = true;
    let i = 0;
    while (i < W) {
      const num = start + i;
      if (map.has(num)) {
        let count = map.get(num);
        count -= 1;
        if (!count) {
          map.delete(num);
        } else {
          map.set(num, count);
        }
      } else {
        validate = false;
        break;
      }
      i += 1;
    }
    if (!validate) return false;
  }

  return true;
};

console.log(isNStraightHand([1,2,3,6,2,3,4,7,8], 3)); // true
console.log(isNStraightHand([1,2,3,6,2,3,4,7,8,9], 3)); // false
console.log(isNStraightHand([3,2,3,4,4,5,6,7,8], 3)); // true
console.log(isNStraightHand([2,1], 2)); // true
console.log(isNStraightHand([2,1,3], 3)); // true

