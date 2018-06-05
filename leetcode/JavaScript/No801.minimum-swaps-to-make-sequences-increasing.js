/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * We have two integer sequences A and B of the same non-zero length.
 * We are allowed to swap elements A[i] and B[i].
 * Note that both elements are in the same index position in their respective sequences.
 * At the end of some number of swaps, A and B are both strictly increasing.
 * (A sequence is strictly increasing if and only if A[0] < A[1] < A[2] < ... < A[A.length - 1].)
 * Given A and B, return the minimum number of swaps to make both sequences strictly increasing.
 * It is guaranteed that the given input always makes it possible.
 *
 * Example:
 * Input: A = [1,3,5,4], B = [1,2,3,7]
 * Output: 1
 * Explanation:
 * Swap A[3] and B[3].  Then the sequences are:
 * A = [1, 3, 5, 7] and B = [1, 2, 3, 4]
 * which are both strictly increasing.
 *
 * Note:
 * 1. A, B are arrays with the same length, and that length will be in the range [1, 1000].
 * 2. A[i], B[i] are integer values in the range [0, 2000].
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minSwap = function(A, B) {
  let i = 1;
  let swip = 1;
  let notSwip = 0;

  while (i < A.length) {
    const a = A[i];
    const b = B[i];

    let sTmp = Infinity;
    let nsTmp = Infinity;

    if (a > A[i - 1] && b > B[i - 1]) {
      sTmp = Math.min(sTmp, swip + 1);
      nsTmp = Math.min(nsTmp, notSwip);
    }
    if (a > B[i - 1] && b > A[i - 1]) {
      sTmp = Math.min(notSwip + 1, sTmp);
      nsTmp = Math.min(nsTmp, swip);
    }
    swip = sTmp;
    notSwip = nsTmp;
    i += 1;
  }

  return Math.min(swip, notSwip);
};

// Test case
console.log(minSwap([0,4,4,5,9], [0,1,6,8,10])); // 1