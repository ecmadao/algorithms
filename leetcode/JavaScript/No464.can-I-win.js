/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * In the "100 game," two players take turns adding, to a running total, any integer from 1..10. The player who first causes the running total to reach or exceed 100 wins.
 * What if we change the game so that players cannot re-use integers?
 * For example, two players might take turns drawing from a common pool of numbers of 1..15 without replacement until they reach a total >= 100.
 * Given an integer maxChoosableInteger and another integer desiredTotal, determine if the first player to move can force a win, assuming both players play optimally.
 * You can always assume that maxChoosableInteger will not be larger than 20 and desiredTotal will not be larger than 300.
 * 
 * Example
 * Input:
 * maxChoosableInteger = 10
 * desiredTotal = 11
 * Output:
 * false
 * Explanation:
 * 1. No matter which integer the first player choose, the first player will lose.
 * 2. The first player can choose an integer from 1 up to 10.
 * 3. If the first player choose 1, the second player can only choose integers from 2 up to 10.
 * 4. The second player will win by choosing 10 and get a total = 11, which is >= desiredTotal.
 * 5. Same with other integers chosen by the first player, the second player will always win.
 */

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  if (!desiredTotal || maxChoosableInteger >= desiredTotal) return true
  // 等差数列求和
  if ((maxChoosableInteger + 1) * (maxChoosableInteger / 2) < desiredTotal) return false

  const _canIWin = (cache, sum, position) => {
    if (sum >= desiredTotal) return false
    if (cache.has(position)) return cache.get(position)

    for (let i = 1; i <= maxChoosableInteger; i += 1) {
      if (position & (1 << i)) continue

      position |= 1 << i
      const result = _canIWin(cache, sum + i, position)
      position &= ~(1 << i)

      if (!result) {
        return cache.set(position, true).get(position)
      }
    }

    cache.set(position, false)
    return false
  }

  return _canIWin(new Map(), 0, 0)
}

