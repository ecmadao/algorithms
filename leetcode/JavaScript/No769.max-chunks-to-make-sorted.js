/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array arr that is a permutation of [0, 1, ..., arr.length - 1], we split the array into some number of "chunks" (partitions), and individually sort each chunk.
 * After concatenating them, the result equals the sorted array.
 * What is the most number of chunks we could have made?
 *
 * Example 1:
 * Input: arr = [4,3,2,1,0]
 * Output: 1
 * Explanation:
 * Splitting into two or more chunks will not return the required result.
 * For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn't sorted.
 *
 * Example 2:
 * Input: arr = [1,0,2,3,4]
 * Output: 4
 * Explanation:
 * We can split into two chunks, such as [1, 0], [2, 3, 4].
 * However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.
 *
 * Note:
 * 1. arr will have length in range [1, 10].
 * 2. arr[i] will be a permutation of [0, 1, ..., arr.length - 1].
 *
 * 数组arr是[0, 1, ..., arr.length - 1]的一种排列，我们将这个数组分割成几个“块”，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。
 * 我们最多能将数组分成多少块?
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  let max = arr[0]
  let min = arr[0]

  const data = []

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > max) {
      data.push(max)
      max = arr[i]
      min = arr[i]
    } else if (arr[i] < min) {
      while (
        data.length &&
        (data[data.length - 1] > arr[i])
      ) data.pop()
      min = arr[i]
    }
  }
  if (!data.length || data[data.length - 1] < min) data.push(max)

  return data.length
}
