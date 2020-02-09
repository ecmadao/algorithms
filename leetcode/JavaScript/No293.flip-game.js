/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--".
 * The game ends when a person can no longer make a move and therefore the other person will be the winner.
 * Write a function to compute all possible states of the string after one valid move.
 *
 * Example:
 * Input: s = "++++"
 * Output:
 * [
 *  "--++",
 *  "+--+",
 *  "++--"
 * ]
 *
 * Note: If there is no valid move, return an empty list [].
 *
 * 给定一个只有 + 和 - 的字符串，求将连续的两个 "++" 反转成 "--" 后可能的结果
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
  const result = []

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '+' && s[i + 1] === '+') {
      const arr = s.split('')
      arr[i] = '-'
      arr[i + 1] = '-'
      result.push(arr.join(''))
    }
  }
  return result
}
