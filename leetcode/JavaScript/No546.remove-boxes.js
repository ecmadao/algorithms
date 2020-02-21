/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given several boxes with different colors represented by different positive numbers.
 * You may experience several rounds to remove boxes until there is no box left.
 * Each time you can choose some continuous boxes with the same color (composed of k boxes, k >= 1), remove them and get k*k points.
 * Find the maximum points you can get.
 *
 * Example:
 * Input:
 * [1, 3, 2, 2, 2, 3, 4, 3, 1]
 *
 * Output:
 * 23
 *
 * Explanation:
 * [1, 3, 2, 2, 2, 3, 4, 3, 1]
 * ----> [1, 3, 3, 4, 3, 1] (3*3=9 points)
 * ----> [1, 3, 3, 3, 1] (1*1=1 points)
 * ----> [1, 1] (3*3=9 points)
 * ----> [] (2*2=4 points)
 *
 * Note: The number of boxes n would not exceed 100.
 *
 * 给出一些不同颜色的盒子，盒子的颜色由数字表示，即不同的数字表示不同的颜色。
 * 你将经过若干轮操作去去掉盒子，直到所有的盒子都去掉为止。
 * 每一轮你可以移除具有相同颜色的连续 k 个盒子（k >= 1），这样一轮之后你将得到 k*k 个积分。
 * 当你将所有盒子都去掉之后，求你能获得的最大积分和
 */

/**
 * @param {number[]} boxes
 * @return {number}
 *
 * DFS
 */
var removeBoxes = function(boxes) {
  const indexes = boxes.reduce((dict, num, index) => {
    if (!dict[num]) dict[num] = []
    dict[num].push(index)
    return dict
  }, {})
  const cache = new Map()

  const dfs = (presame, left, right) => {
    if (left > right) return presame * presame
    const key = `${presame}-${left}-${right}`
    if (cache.has(key)) return cache.get(key)

    const base = boxes[left]
    let i = left
    while (boxes[i] === base && i <= right) i += 1
    presame += (i - left)

    let result = presame * presame + dfs(0, i, right)

    for (const index of indexes[base]) {
      if (index > right) break
      if (index <= i - 1) continue
      result = Math.max(
        result,
        dfs(0, i, index - 1) + dfs(presame, index, right)
      )
    }

    cache.set(key, result)
    return result
  }

  return dfs(0, 0, boxes.length - 1)
}

// Test case
console.log(removeBoxes([1, 3, 2, 2, 2, 3, 4, 3, 1])); // 23
console.log(removeBoxes([1, 2, 1, 2, 1])); // 11
