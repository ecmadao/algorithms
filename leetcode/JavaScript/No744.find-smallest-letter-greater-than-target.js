/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.
 * Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.
 *
 * Examples:
 * Input:
 * letters = ["c", "f", "j"]
 * target = "a"
 * Output: "c"
 *
 * Input:
 * letters = ["c", "f", "j"]
 * target = "c"
 * Output: "f"
 *
 * Input:
 * letters = ["c", "f", "j"]
 * target = "d"
 * Output: "f"
 *
 * Input:
 * letters = ["c", "f", "j"]
 * target = "g"
 * Output: "j"
 *
 * Input:
 * letters = ["c", "f", "j"]
 * target = "j"
 * Output: "c"
 *
 * Input:
 * letters = ["c", "f", "j"]
 * target = "k"
 * Output: "c"
 *
 * Note:
 * 1. letters has a length in range [2, 10000].
 * 2. letters consists of lowercase letters, and contains at least 2 unique letters.
 * 3. target is a lowercase letter.
 *
 * 给定一个只包含小写字母的有序数组letters 和一个目标字母 target，寻找有序数组里面比目标字母大的最小字母。
 * 数组里字母的顺序是循环的。举个例子，如果目标字母target = 'z' 并且有序数组为 letters = ['a', 'b']，则答案返回 'a'
 */

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 *
 * 线性扫描
 */
var nextGreatestLetter_1 = function(letters, target) {
  for (const letter of letters) {
    if (letter > target) return letter
  }
  return letters[0]
}

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 *
 * 二分
 */
var nextGreatestLetter_2 = function(letters, target) {
  let i = 0
  let j = letters.length - 1

  while (i < j) {
    const mid = Math.floor((i + j) / 2)
    const letter = letters[mid]
    if (letter <= target) {
      i = mid + 1
    } else {
      j = mid
    }
  }

  return letters[i] > target ? letters[i] : letters[0]
}
