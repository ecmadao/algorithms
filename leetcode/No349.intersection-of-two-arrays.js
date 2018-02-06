/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given two arrays, write a function to compute their intersection.
 *
 * Example:
 * Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
 *
 * Note:
 * Each element in the result must be unique.
 * The result can be in any order.
 */

const getIntersection = (s1, s2) => {
  const results = [];
  for (let num of s1.keys()) {
    if (s2.has(num)) results.push(num);
  }
  return results;
};

/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number[]}
*/
var intersection = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  if (set1.size > set2.size) return getIntersection(set2, set1);
  return getIntersection(set1, set2);
};
