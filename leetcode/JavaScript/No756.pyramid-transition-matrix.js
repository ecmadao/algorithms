/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * We are stacking blocks to form a pyramid. Each block has a color which is a one letter string.
 * We are allowed to place any color block C on top of two adjacent blocks of colors A and B, if and only if ABC is an allowed triple.
 * We start with a bottom row of bottom, represented as a single string. We also start with a list of allowed triples allowed. Each allowed triple is represented as a string of length 3.
 * Return true if we can build the pyramid all the way to the top, otherwise false.
 *
 * Example 1:
 * Input: bottom = "BCD", allowed = ["BCG", "CDE", "GEA", "FFF"]
 * Output: true
 * Explanation:
 * We can stack the pyramid like this:
 *     A
 *    / \
 *   G   E
 *  / \ / \
 * B   C   D
 * We are allowed to place G on top of B and C because BCG is an allowed triple.  Similarly, we can place E on top of C and D, then A on top of G and E.
 *
 * Example 2:
 * Input: bottom = "AABA", allowed = ["AAA", "AAB", "ABA", "ABB", "BAC"]
 * Output: false
 * Explanation:
 * We can't stack the pyramid to the top.
 * Note that there could be allowed triples (A, B, C) and (A, B, D) with C != D.
 *
 * Note:
 * 1. bottom will be a string with length in range [2, 8].
 * 2. allowed will have length in range [0, 200].
 * 3. Letters in all strings will be chosen from the set {'A', 'B', 'C', 'D', 'E', 'F', 'G'}.
 *
 * 现在，我们用一些方块来堆砌一个金字塔。 每个方块用仅包含一个字母的字符串表示。
 * 使用三元组表示金字塔的堆砌规则如下：
 * 对于三元组(A, B, C) ，“C”为顶层方块，方块“A”、“B”分别作为方块“C”下一层的的左、右子块。当且仅当(A, B, C)是被允许的三元组，我们才可以将其堆砌上。
 * 初始时，给定金字塔的基层 bottom，用一个字符串表示。一个允许的三元组列表 allowed，每个三元组用一个长度为 3 的字符串表示。
 * 如果可以由基层一直堆到塔尖就返回 true，否则返回 false
 *
 * 注意：给出的 allowed 中的元素可以重用
 */

/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {
  const map = allowed.reduce((m, str) => {
    const key = str.slice(0, -1)
    if (!m[key]) m[key] = []
    m[key].push(str.slice(-1))
    return m
  }, {})

  const dfs = (index, len, queue) => {
    if (index === len) {
      index = len + 1
      len = queue.length
    }

    const key = queue.slice(index - 1, index + 1).join('')
    if (!map[key] || !map[key].length) return false
    if (index + 1 === queue.length) return true

    for (const str of map[key]) {
      queue.push(str)
      const result = dfs(index + 1, len, queue)
      queue.pop()
      if (result) return result
    }
    return false
  }

  return dfs(1, bottom.length, bottom.split(''))
}

// Test case
// "BCD"
// ["ACC","ACB","ABD","DAA","BDC","BDB","DBC","BBD","BBC","DBD","BCC","CDD","ABA","BAB","DDC","CCD","DDA","CCA","DDD"]