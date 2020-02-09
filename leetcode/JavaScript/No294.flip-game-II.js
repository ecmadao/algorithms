/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--".
 * The game ends when a person can no longer make a move and therefore the other person will be the winner.
 * Write a function to determine if the starting player can guarantee a win.
 *
 * Example:
 * Input: s = "++++"
 * Output: true
 * Explanation: The starting player can guarantee a win by flipping the middle "++" to become "+--+".
 *
 * Follow up:
 * Derive your algorithm's runtime complexity.
 *
 * 给定一个只有 + 和 - 的字符串。轮流将 连续 的两个 "++" 反转成 "--"。 当一方无法进行有效的翻转时便意味着游戏结束，则另一方获胜。
 * 请你写出一个函数来判定起始玩家是否存在必胜的方案
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var canWin = function(s) {
  const list = s.split('')

  const _canWin = (list) => {
    for (let i = 0; i < list.length; i += 1) {
      if (list[i] === '+' && list[i + 1] === '+') {
        list[i] = '-'
        list[i + 1] = '-'
        const result = _canWin(list)
        list[i] = '+'
        list[i + 1] = '+'
        if (!result) return true
      }
    }

    return false
  }

  return _canWin(list)
}
