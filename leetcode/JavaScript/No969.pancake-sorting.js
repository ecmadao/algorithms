/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array A, we can perform a pancake flip: We choose some positive integer k <= A.length, then reverse the order of the first k elements of A.
 * We want to perform zero or more pancake flips (doing them one after another in succession) to sort the array A.
 * Return the k-values corresponding to a sequence of pancake flips that sort A.  Any valid answer that sorts the array within 10 * A.length flips will be judged as correct.
 *
 * Example 1:
 * Input: [3,2,4,1]
 * Output: [4,2,4,3]
 * Explanation:
 * We perform 4 pancake flips, with k values 4, 2, 4, and 3.
 * Starting state: A = [3, 2, 4, 1]
 * After 1st flip (k=4): A = [1, 4, 2, 3]
 * After 2nd flip (k=2): A = [4, 1, 2, 3]
 * After 3rd flip (k=4): A = [3, 2, 1, 4]
 * After 4th flip (k=3): A = [1, 2, 3, 4], which is sorted.
 *
 * Example 2:
 * Input: [1,2,3]
 * Output: []
 * Explanation: The input is already sorted, so there is no need to flip anything.
 * Note that other answers, such as [3, 3], would also be accepted.
 *
 * Note:
 * 1 <= A.length <= 100
 * A[i] is a permutation of [1, 2, ..., A.length]
 * 
 * 给定数组 A，我们可以对其进行煎饼翻转：我们选择一些正整数 k <= A.length，然后反转 A 的前 k 个元素的顺序。
 * 我们要执行零次或多次煎饼翻转（按顺序一次接一次地进行）以完成对数组 A 的排序。
 * 返回能使 A 排序的煎饼翻转操作所对应的 k 值序列。任何将数组排序且翻转次数在 10 * A.length 范围内的有效答案都将被判断为正确
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
  const res = []
  const sorted = [...A].sort((n1, n2) => n1 - n2)

  while (sorted.length) {
    const target = sorted.pop()
    const index = A.indexOf(target)
    if (index === sorted.length) continue

    if (index !== 0) {
      res.push(index + 1)
      A.splice(0, index + 1, ...A.slice(0, index + 1).reverse())
    }
    res.push(sorted.length + 1)
    A.splice(0, sorted.length + 1, ...A.slice(0, sorted.length + 1).reverse())
  }
  return res
}

// [3,2,4,1] - 3
// [4,2,3,1] - 4
// [1,3,2,4] - 2
// [3,1,2,4] - 3
// [2,1,3,4] - 2
// [1,2,3,4]

/**
 * @param {number[]} A
 * @return {number[]}
 * 
 * 注意题目描述，A[i] 是 [1, 2, ..., A.length] 的排列
 * 因此 A 中元素必定是 1,2,3...A.length
 * 所以我们不需要预先对 A 进行排序
 */
var pancakeSort_2 = function(A) {
  const res = []
  
  let i = A.length
  while (i) {
    const index = A.indexOf(i)
    if (index + 1 === i) {
      i -= 1
      continue
    }

    if (index !== 0) {
      res.push(index + 1)
      A.splice(0, index + 1, ...A.slice(0, index + 1).reverse())
    }
    res.push(i)
    A.splice(0, i, ...A.slice(0, i).reverse())

    i -= 1
  }
  return res
}
