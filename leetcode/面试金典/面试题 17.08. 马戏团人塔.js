/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 有个马戏团正在设计叠罗汉的表演节目，一个人要站在另一人的肩膀上。
 * 出于实际和美观的考虑，在上面的人要比下面的人矮一点且轻一点。已知马戏团每个人的身高和体重，请编写代码计算叠罗汉最多能叠几个人。
 *
 * 示例：
 * 输入：height = [65,70,56,75,60,68] weight = [100,150,90,190,95,110]
 * 输出：6
 * 解释：从上往下数，叠罗汉最多能叠 6 层：(56,90), (60,95), (65,100), (68,110), (70,150), (75,190)
 *
 * 提示：
 * height.length == weight.length <= 10000
 */

/**
 * @param {number[]} height
 * @param {number[]} weight
 * @return {number}
 */
var bestSeqAtIndex = function(height, weight) {
  const sequence = height.map((h, i) => [h, weight[i]]).sort((sq1, sq2) => {
    // 重点是，从小到大排列高度，而高度相同时，重量从大到小排列
    if (sq2[0] === sq1[0]) return sq2[1] - sq1[1]
    return sq1[0] - sq2[0]
  })

  const search = (nums, target, start, end) => {
    if (!nums.length) return 0
    let i = start
    let j = end - 1
    while (i < j) {
      const mid = Math.floor((i + j) / 2)
      if (nums[mid] === target) return mid
      if (nums[mid] < target) {
        i = mid + 1
      } else {
        j = mid - 1
      }
    }

    return nums[i] < target ? i + 1 : i
  }

  let res = 0
  const dp = []
  for (const sq of sequence) {
    const index = search(dp, sq[1], 0, res)
    dp[index] = sq[1]
    if (index === res) res += 1
  }

  return res
}
