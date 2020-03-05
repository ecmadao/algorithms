/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.
 * Each person may dislike some other people, and they should not go into the same group.
 * Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.
 * Return true if and only if it is possible to split everyone into two groups in this way.
 *
 * Example 1:
 * Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
 * Output: true
 * Explanation: group1 [1,4], group2 [2,3]
 *
 * Example 2:
 * Input: N = 3, dislikes = [[1,2],[1,3],[2,3]]
 * Output: false
 *
 * Example 3:
 * Input: N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
 * Output: false
 *
 * Note:
 * 1. 1 <= N <= 2000
 * 2. 0 <= dislikes.length <= 10000
 * 3. 1 <= dislikes[i][j] <= N
 * 4. dislikes[i][0] < dislikes[i][1]
 * 5. There does not exist i != j for which dislikes[i] == dislikes[j].
 *
 * 给定一组 N 人（编号为 1, 2, ..., N）， 我们想把每个人分进任意大小的两组。
 * 每个人都可能不喜欢其他人，那么他们不应该属于同一组。
 * 形式上，如果 dislikes[i] = [a, b]，表示不允许将编号为 a 和 b 的人归入同一组。
 * 当可以用这种方法将每个人分进两组时，返回 true；否则返回 false
 */

/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
  const adjs = {}

  for (const [p1, p2] of dislikes) {
    if (!adjs[p1]) adjs[p1] = []
    if (!adjs[p2]) adjs[p2] = []
    adjs[p1].push(p2)
    adjs[p2].push(p1)
  }

  const dfs = (i, colorMap, color) => {
    colorMap[i] = color
    const next = color === 1 ? 2 : 1

    for (const p of adjs[i]) {
      if (colorMap[p]) {
        if (colorMap[p] === color) return false
        continue
      }
      const result = dfs(p, colorMap, next)
      if (!result) return false
    }
    return true
  }

  for (const i of Object.keys(adjs)) {
    const check = dfs(i, {}, 1)
    if (!check) return false
  }
  return true
}
