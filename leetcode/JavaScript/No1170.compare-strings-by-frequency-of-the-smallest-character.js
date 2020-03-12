/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Let's define a function f(s) over a non-empty string s, which calculates the frequency of the smallest character in s. For example, if s = "dcce" then f(s) = 2 because the smallest character is "c" and its frequency is 2.
 * Now, given string arrays queries and words, return an integer array answer, where each answer[i] is the number of words such that f(queries[i]) < f(W), where W is a word in words.
 *
 * Example 1:
 * Input: queries = ["cbd"], words = ["zaaaz"]
 * Output: [1]
 * Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").
 *
 * Example 2:
 * Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
 * Output: [1,2]
 * Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both > f("cc").
 *
 * Constraints:
 * 1. 1 <= queries.length <= 2000
 * 2. 1 <= words.length <= 2000
 * 3. 1 <= queries[i].length, words[i].length <= 10
 * 4. queries[i][j], words[i][j] are English lowercase letters.
 *
 * 我们来定义一个函数 f(s)，其中传入参数 s 是一个非空字符串；该函数的功能是统计 s  中（按字典序比较）最小字母的出现频次。
 * 例如，若 s = "dcce"，那么 f(s) = 2，因为最小的字母是 "c"，它出现了 2 次。
 * 现在，给你两个字符串数组待查表 queries 和词汇表 words，请你返回一个整数数组 answer 作为答案，其中每个 answer[i] 是满足 f(queries[i]) < f(W) 的词的数目，W 是词汇表 words 中的词。
 */

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
  const f = (str) => {
    let s = str[0]
    let c = 1
    for (let i = 1; i < str.length; i += 1) {
      if (str[i] < s) {
        s = str[i]
        c = 1
      } else if (str[i] === s) {
        c += 1
      }
    }
    return c
  }

  const nums = words.map(word => f(word)).sort((n1, n2) => n1 - n2)

  const search = (target) => {
    let i = 0
    let j = nums.length - 1

    while (i <= j) {
      const mid = Math.floor((i + j) / 2)
      if (nums[mid] <= target) {
        i = mid + 1
      } else {
        j = mid - 1
      }
    }
    return i
  }

  return queries.map(qs => nums.length - search(f(qs)))
}
