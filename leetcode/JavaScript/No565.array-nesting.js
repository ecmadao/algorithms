/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * A zero-indexed array A of length N contains all integers from 0 to N-1.
 * Find and return the longest length of set S, where S[i] = {A[i], A[A[i]], A[A[A[i]]], ... } subjected to the rule below.
 *
 * Suppose the first element in S starts with the selection of element A[i] of index = i,
 * the next element in S should be A[A[i]], and then A[A[A[i]]]… By that analogy,
 * we stop adding right before a duplicate element occurs in S.
 *
 * Example:
 * Input: A = [5,4,0,3,1,6,2]
 * Output: 4
 * Explanation:
 * A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.
 *
 * One of the longest S[K]:
 * S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}
 *
 * Note:
 * - N is an integer within the range [1, 20,000].
 * - The elements of A are all distinct.
 * - Each element of A is an integer within the range [0, N-1].
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting_1 = function(nums) {
  let result = 0;
  const tmpMap = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    let num = nums[i];
    if (tmpMap.has(num)) {
      if (tmpMap.get(num) > 0) continue;
    }
    tmpMap.set(num, 0);
    const tmp = new Set([num]);

    while (num < nums.length && !tmp.has(nums[num])) {
      num = nums[num];
      if (tmpMap.has(num) && tmpMap.get(num) >= tmp.size) {
        break;
      }
      tmpMap.set(num, tmp.size);
      tmp.add(num);
    }

    if (tmp.size > result) result = tmp.size;
  }
  return result;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting_2 = function(nums) {
  let i = 0
  let result = 0
  let cache = new Set()

  while (i < nums.length) {
    if (cache.has(i)) { i += 1; continue }

    const set = new Set()
    let j = i
    while (!set.has(nums[j])) {
      set.add(nums[j])
      cache.add(j)
      j = nums[j]
    }
    if (result < set.size) result = set.size
    i += 1
  }

  return result
}
