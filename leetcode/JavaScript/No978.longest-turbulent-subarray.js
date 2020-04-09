/**
 * Difficulty:
 * Medsium
 *
 * Desc:
 * A subarray A[i], A[i+1], ..., A[j] of A is said to be turbulent if and only if:
 * For i <= k < j, A[k] > A[k+1] when k is odd, and A[k] < A[k+1] when k is even;
 * OR, for i <= k < j, A[k] > A[k+1] when k is even, and A[k] < A[k+1] when k is odd.
 * That is, the subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.
 * Return the length of a maximum size turbulent subarray of A.
 * 
 * Example 1:
 * Input: [9,4,2,10,7,8,8,1,9]
 * Output: 5
 * Explanation: (A[1] > A[2] < A[3] > A[4] < A[5])
 * 
 * Example 2:
 * Input: [4,8,12,16]
 * Output: 2
 * 
 * Example 3:
 * Input: [100]
 * Output: 1
 * 
 * Note:
 * 1 <= A.length <= 40000
 * 0 <= A[i] <= 10^9
 * 
 * 当 A 的子数组 A[i], A[i+1], ..., A[j] 满足下列条件时，我们称其为湍流子数组：
 * 若 i <= k < j，当 k 为奇数时， A[k] > A[k+1]，且当 k 为偶数时，A[k] < A[k+1]；
 * 或 若 i <= k < j，当 k 为偶数时，A[k] > A[k+1] ，且当 k 为奇数时， A[k] < A[k+1]。
 * 也就是说，如果比较符号在子数组中的每个相邻元素对之间翻转，则该子数组是湍流子数组。
 * 返回 A 的最大湍流子数组的长度。
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
  if (!A.length) return 0
  let res = 1
  let i = 0
  const getSymbol = (a1, a2) => {
    if (a1 > a2) return '>'
    if (a1 < a2) return '<'
    return null
  }
  while (i < A.length - 1) {
    if (A[i] === A[i + 1]) {
      i += 1
      continue
    }

    const j = i
    let s = getSymbol(A[i], A[i + 1])
    while (i < A.length && s === getSymbol(A[i], A[i + 1])) {
      // console.log(`A[i]: ${A[i]}, A[i + 1]: ${A[i + 1]}, s: ${s}`)
      s = s === '>' ? '<' : '>'
      i += 1
    }
    res = Math.max(res, i - j + 1)
    if (i === j) i += 1
  }

  return res
};