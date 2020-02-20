/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
 * add spaces in s to construct a sentence where each word is a valid dictionary word.
 * You may assume the dictionary does not contain duplicate words.
 * Return all such possible sentences.
 *
 * Example:
 * Given:
 * s = "catsanddog",
 * dict = ["cat", "cats", "and", "sand", "dog"].
 * A solution is ["cats and dog", "cat sand dog"].
 *
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。
 * 说明：
 * 1. 分隔时可以重复使用字典中的单词。
 * 2. 你可以假设字典中没有重复的单词
 */

/*
 * ========================== Solution 1 ==========================
 * 自顶向下，带备忘录的 DFS
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const set = new Set(wordDict)
  const cache = {}

  const dfs = (index) => {
    if (cache[index] !== undefined) return cache[index]
    if (index >= s.length) {
      cache[index] = []
      return cache[index]
    }

    const list = []
    for (let i = index; i < s.length; i += 1) {
      const str = s.slice(index, i + 1)
      if (set.has(str)) {
        const check = dfs(i + 1)
        if (!check) continue
        if (!check.length) {
          list.push([str])
        } else {
          for (const arr of check) {
            list.push([str, ...arr])
          }
        }
      }
    }

    cache[index] = list.length ? list : false
    return cache[index]
  }

  const result = dfs(0)
  return result ? result.map(list => list.join(' ')) : []
}

/*
 * ========================== Solution 2 ==========================
 * 自底向上的动态规划。内存占用超时
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak_2 = function(s, wordDict) {
  const dp = []
  const set = new Set(wordDict)

  for (let i = 1; i <= s.length; i += 1) {
    if (!dp[i]) dp[i] = []
    for (let j = i - 1; j >= 0; j -= 1) {
      const str = s.slice(j, i)
      if (!set.has(str)) continue

      if (j === 0) {
        dp[i].push(str)
      } else if (dp[j] && dp[j].length) {
        dp[i].push(...dp[j].map(word => `${word} ${str}`))
      }
    }
  }

  return dp[s.length]
}
