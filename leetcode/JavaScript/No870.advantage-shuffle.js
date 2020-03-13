/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].
 * Return any permutation of A that maximizes its advantage with respect to B.
 *
 * Example 1:
 * Input: A = [2,7,11,15], B = [1,10,4,11]
 * Output: [2,11,7,15]
 *
 * Example 2:
 * Input: A = [12,24,8,32], B = [13,25,32,11]
 * Output: [24,32,8,12]
 *
 * Note:
 * 1. 1 <= A.length = B.length <= 10000
 * 2. 0 <= A[i] <= 10^9
 * 3. 0 <= B[i] <= 10^9
 *
 * 给定两个大小相等的数组 A 和 B，A 相对于 B 的优势可以用满足 A[i] > B[i] 的索引 i 的数目来描述。
 * 返回 A 的任意排列，使其相对于 B 的优势最大化
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
  A.sort((n1, n2) => n1 - n2)

  const search = (target) => {
    let i = 0
    let j = A.length - 1
    while (i <= j) {
      const mid = Math.floor((i + j) / 2)
      if (A[mid] <= target) {
        i += 1
      } else {
        j -= 1
      }
    }
    return i
  }

  const res = []
  for (const num of B) {
    const index = search(num)
    if (index >= A.length) {
      res.push(A.shift())
    } else {
      res.push(A[index])
      A.splice(index, 1)
    }
  }
  return res
}
