/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You have a list of words and a pattern, and you want to know which words in words matches the pattern.
 * A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.
 * (Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.)
 * Return a list of the words in words that match the given pattern.
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
 * Output: ["mee","aqq"]
 * Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}.
 * "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
 * since a and b map to the same letter.
 *
 * Note:
 * 1. 1 <= words.length <= 50
 * 2. 1 <= pattern.length = words[i].length <= 20
 *
 * 你有一个单词列表 words 和一个模式  pattern，你想知道 words 中的哪些单词与模式匹配。
 * 如果存在字母的排列 p ，使得将模式中的每个字母 x 替换为 p(x) 之后，我们就得到了所需的单词，那么单词与模式是匹配的。
 * （回想一下，字母的排列是从字母到字母的双射：每个字母映射到另一个字母，没有两个字母映射到同一个字母。）
 * 返回 words 中与给定模式匹配的单词列表。
 * 你可以按任何顺序返回答案。
 */

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  return words.reduce((list, word) => {
    if (word.length !== pattern.length) return list

    let i = 0
    let j = 0
    const tmp = {}
    const tmp2 = {}
    while (i < word.length && j < pattern.length) {
      const c = word[i]
      const p = pattern[j]
      if (tmp[c] && tmp[c] !== p) {
        break
      } else if (tmp2[p] && tmp2[p] !== c) {
        break
      }
      tmp[c] = p
      tmp2[p] = c
      i += 1
      j += 1
    }
    if (i === word.length && j === pattern.length) list.push(word)
    return list
  }, [])
}
