/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.
 * Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].
 *
 * Example 1:
 * Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
 * Output: 1
 *
 * Constraints:
 * 1 <= dominoes.length <= 40000
 * 1 <= dominoes[i][j] <= 9
 *
 * 给你一个由一些多米诺骨牌组成的列表 dominoes。
 * 如果其中某一张多米诺骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。
 * 形式上，dominoes[i] = [a, b] 和 dominoes[j] = [c, d] 等价的前提是 a==c 且 b==d，或是 a==d 且 b==c。
 * 在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对 (i, j) 的数量。
 */

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  dominoes.sort((d1, d2) => {
    return Number(d1.sort().join('')) - Number(d2.sort().join(''))
  })

  let i = 0
  let res = 0
  while (i < dominoes.length) {
    let j = i
    while (
      (i + 1 < dominoes.length) &&
      (dominoes[i][0] === dominoes[i + 1][0] && dominoes[i][1] === dominoes[i + 1][1])
    ) i += 1

    const c = i + 1 - j
    res += (c * (c - 1) / 2)
    i += 1
  }
  return res
}
