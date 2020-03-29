/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You have a set of tiles, where each tile has one letter tiles[i] printed on it.
 * Return the number of possible non-empty sequences of letters you can make.
 *
 * Example 1:
 * Input: "AAB"
 * Output: 8
 * Explanation:
 * The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
 *
 * Example 2:
 * Input: "AAABBC"
 * Output: 188
 *
 * Note:
 * 1. 1 <= tiles.length <= 7
 * 2. tiles consists of uppercase English letters.
 *
 * 你有一套活字字模 tiles，其中每个字模上都刻有一个字母 tiles[i]。返回你可以印出的非空字母序列的数目。
 */

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  let res = 0

  const dfs = (list) => {
    if (!list.length) return
    for (let i = 0; i < list.length; i += 1) {
      if (list[i] === list[i - 1]) continue
      const num = list[i]
      res += 1
      list.splice(i, 1)
      dfs(list)
      list.splice(i, 0, num)
    }
  }
  dfs(tiles.split('').sort())
  return res
}
