/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * In a deck of cards, each card has an integer written on it.
 * Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:
 *
 * Each group has exactly X cards.
 * All the cards in each group have the same integer.
 *
 * Example 1:
 * Input: deck = [1,2,3,4,4,3,2,1]
 * Output: true
 * Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
 *
 * Example 2:
 * Input: deck = [1,1,1,2,2,2,3,3]
 * Output: false´
 * Explanation: No possible partition.
 *
 * Example 3:
 * Input: deck = [1]
 * Output: false
 * Explanation: No possible partition.
 *
 * Example 4:
 * Input: deck = [1,1]
 * Output: true
 * Explanation: Possible partition [1,1].
 *
 * Example 5:
 * Input: deck = [1,1,2,2,2,2]
 * Output: true
 * Explanation: Possible partition [1,1],[2,2],[2,2].
 *
 * Constraints:
 * 1. 1 <= deck.length <= 10^4
 * 2. 0 <= deck[i] < 10^4
 *
 * 给定一副牌，每张牌上都写着一个整数。
 * 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 * 1. 每组都有 X 张牌。
 * 2. 组内所有的牌上都写着相同的整数。
 * 仅当你可选的 X >= 2 时返回 true。
 */

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  deck.sort((n1, n2) => n1 - n2)
  let i = 0
  let count = -1
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)

  while (i < deck.length) {
    let k = i
    while (i + 1 < deck.length && deck[i + 1] === deck[i]) i += 1
    const c = i - k + 1

    if (count === -1) {
      count = c
    } else {
      count = gcd(count, c)
    }
    if (count <= 1) return false
    i += 1
  }
  return count > 1
}
