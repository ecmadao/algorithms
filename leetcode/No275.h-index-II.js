/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Follow up for H-Index:
 * What if the citations array is sorted in ascending order? Could you optimize your algorithm?
 */

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  for (let i = 0; i < citations.length; i += 1) {
    const largerCount = citations.length - i;
    const num = citations[i];
    if (largerCount <= num) return largerCount;
  }
  return 0;
};
