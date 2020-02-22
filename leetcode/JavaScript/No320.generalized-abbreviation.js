/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Write a function to generate the generalized abbreviations of a word.
 * Note: The order of the output does not matter.
 *
 * Example:
 * Input: "word"
 * Output:
 * ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
 *
 * 请你写出一个能够举单词全部缩写的函数
 */

/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
  const result = [word]

  const dfs = (index, prefix) => {
    let i = 1
    while (i <= word.length - index) {
      const tmp = word.slice(index + i)
      if (tmp.length <= 1) {
        result.push(`${prefix}${i}${tmp}`)
      } else {
        result.push(
          ...generateAbbreviations(tmp.slice(1)).map(str => `${prefix}${i}${tmp[0]}${str}`)
        )
      }
      i += 1
    }
  }

  for (let i = 0; i < word.length; i += 1) {
    dfs(i, word.slice(0, i))
  }

  return result
}
