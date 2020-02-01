/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * We are playing the Guess Game. The game is as follows:
 * I pick a number from 1 to n. You have to guess which number I picked.
 * Every time you guess wrong, I'll tell you whether the number is higher or lower.
 *
 * You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):
 * -1 : The number you need to guess is lower
 * 1 : The number you need to guess is higher
 * 0 : Congrats! You got it!
 *
 * Example:
 * Input: n = 10, pick = 6
 * Output: 6
 */

 /**
 * @param {n} number
 * @return {number}
 */
const guessNumber = (n) => {
  let i = 1
  let j = n

  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    switch (guess(mid)) {
      case 0:
        return mid
      case 1:
        i = mid + 1
        break
      case -1:
        j = mid - 1
        break
    }
  }
}
