/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string text, we are allowed to swap two of the characters in the string. Find the length of the longest substring with repeated characters.
 * 
 * Example 1:
 * Input: text = "ababa"
 * Output: 3
 * Explanation: We can swap the first 'b' with the last 'a', or the last 'b' with the first 'a'. Then, the longest repeated character substring is "aaa", which its length is 3.
 * 
 * Example 2:
 * Input: text = "aaabaaa"
 * Output: 6
 * Explanation: Swap 'b' with the last 'a' (or the first 'a'), and we get longest repeated character substring "aaaaaa", which its length is 6.
 * 
 * Example 3:
 * Input: text = "aaabbaaa"
 * Output: 4
 * 
 * Example 4:
 * Input: text = "aaaaa"
 * Output: 5
 * Explanation: No need to swap, longest repeated character substring is "aaaaa", length is 5.
 * 
 * Example 5:
 * Input: text = "abcdef"
 * Output: 1
 * 
 * Constraints:
 * 1 <= text.length <= 20000
 * text consist of lowercase English characters only.
 * 
 * 如果字符串中的所有字符都相同，那么这个字符串是单字符重复的字符串。
 * 给你一个字符串 text，你只能交换其中两个字符一次或者什么都不做，然后得到一些单字符重复的子串。返回其中最长的子串的长度。
 */

/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {
  let i = 0
  let res = 0
  
  const dict = {}
  while (i < text.length) {
    const base = text[i]
    if (!dict[base]) dict[base] = []
    
    const k = i
    while (i + 1 < text.length && text[i + 1] === base) i += 1
    dict[base].push([i + 1 - k, k, i]) // len, start, end
    i += 1
  }
      
  for (const list of Object.values(dict)) {
    for (let i = 0; i < list.length; i += 1) {
      const cur = list[i]
      const next = list[i + 1]
      if (!next) {
        res = Math.max(res, cur[0])
        break
      }
      
      if (cur[2] + 2 === next[1]) {
        res = Math.max(
          res,
          list.length > 2 ? (next[0] + cur[0] + 1) : (next[0] + cur[0])
        )
      } else {
        res = Math.max(
          res,
          Math.max(next[0], cur[0]) + 1
        )
      }
    }
  }

  
  return res
};