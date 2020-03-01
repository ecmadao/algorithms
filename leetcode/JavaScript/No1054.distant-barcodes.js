/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * In a warehouse, there is a row of barcodes, where the i-th barcode is barcodes[i].
 * Rearrange the barcodes so that no two adjacent barcodes are equal.
 * You may return any answer, and it is guaranteed an answer exists.
 *
 * Example 1:
 * Input: [1,1,1,2,2,2]
 * Output: [2,1,2,1,2,1]
 *
 * Example 2:
 * Input: [1,1,1,1,2,2,3,3]
 * Output: [1,3,1,3,2,1,2,1]
 *
 * Note:
 * 1. 1 <= barcodes.length <= 10000
 * 2. 1 <= barcodes[i] <= 10000
 *
 * 在一个仓库里，有一排条形码，其中第 i 个条形码为 barcodes[i]。
 * 请你重新排列这些条形码，使其中两个相邻的条形码**不能**相等。
 * 你可以返回任何满足该要求的答案，此题保证存在答案。
 */

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
  const map = barcodes.reduce((m, n) => {
    const data = m[n] || [n ,0]
    data[1] += 1
    m[n] = data
    return m
  }, {})
  const list = Object.values(map).sort((n1, n2) => n1[1] - n2[1])

  let i = 0
  while (i < barcodes.length) {
    const last = list[list.length - 1]
    barcodes[i] = last[0]
    last[1] -= 1
    if (!last[1]) list.pop()
    i += 2
  }

  i = 1
  while (i < barcodes.length) {
    const last = list[list.length - 1]
    barcodes[i] = last[0]
    last[1] -= 1
    if (!last[1]) list.pop()
    i += 2
  }

  return barcodes
}
