/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 *
 * Example1:
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 * Example2:
 * Input: "cbbd"
 * Output: "bb"
 *
 * 寻找字符串中的最长回文字符串
 */

 /**
 * @param {string} s
 * @return {string}
 *
 * 该方法的核心思想是，从左侧开始向右遍历，每个点都当做是回文的中心点，以此向左右扩张，直到边界
 * 当点的右侧的字符串长度 * 2 小于已知回文的长度时，则没有必要继续遍历，直接中断即可
 */
var longestPalindrome_1 = function(s) {
  var length = s.length
  var longest = ''

  var getPalindrome = function(left, right) {
    while(left >= 0 && right < length) {
      if (s[left] !== s[right]) {
        break
      }
      left -= 1
      right += 1
    }
    return s.slice(left + 1, right)
  }

  for (var i = 0; i < length; i += 1) {
    if (longest.length > (length - i) * 2) break
    // odd
    var palindrome = getPalindrome(i, i)
    if (palindrome.length > longest.length) longest = palindrome

    // even
    palindrome = getPalindrome(i, i + 1)
    if (palindrome.length > longest.length) longest = palindrome
  }

  return longest
}

/**
 * @param {string} s
 * @return {string}
 * 动态规划法
 * 基本思路和上一个方法一致，也是从左侧开始遍历，每个点都当做回文的中心点（或者对称回文)
 */
var longestPalindrome_2 = function(s) {
  if (s.length <= 1) return s
  const tmp = {}
  let result = s[0]

  for (let i = 0; i < s.length; i += 1) {
    if (!tmp[i]) tmp[i] = []
    tmp[i][i] = true

    let j = i - 1
    while (j >= 0 && i + (i - j) <= s.length) {
      if (!tmp[j]) tmp[j] = []
      tmp[j][j] = true

      const l1 = i + (i - j)
      if (l1 < s.length) {
        tmp[j][l1] = s[j] === s[l1] && tmp[j + 1][l1 - 1] !== false
      }

      const l2 = i + (i - j) - 1
      tmp[j][l2] = s[j] === s[l2] && tmp[j + 1][l2 - 1] !== false

      if (tmp[j][l1] && l1 + 1 - j > result.length) {
        result = s.slice(j, l1 + 1)
      }

      if (tmp[j][l2] && l2 + 1 - j > result.length) {
        result = s.slice(j, l2 + 1)
      }

      j -= 1
    }
  }

  return result
}


/*
 * 除了上面的方法以外，还有一种更加优化的方式，叫做 Manacher 算法
 * 其本质和上式一样，也是从左向右进行遍历
 *
 * 参考文献：
 * 最长回文子串——Manacher 算法: https://segmentfault.com/a/1190000003914228
 * https://www.felix021.com/blog/read.php?2040
 * https://blog.csdn.net/ggggiqnypgjg/article/details/6645824
 * https://www.hackerrank.com/topics/manachers-algorithm
 */

/**
 * @param {string} s
 * @return {string}
 * Manacher 算法
 */
var longestPalindrome_3 = function(s) {
  if (s.length <= 1) return s
  const tmp = [1]
  let maxCenterIndex = null

  const str = `#${s.split('').join('#')}#`
  let palindromeCenterIndexWithMaxRight = 0

  for (let i = 1; i < str.length; i += 1) {
    const maxRight = palindromeCenterIndexWithMaxRight + tmp[palindromeCenterIndexWithMaxRight] - 1

    if (maxRight <= i) {
      let tmpIndex = i - 1
      while (tmpIndex >=0 && i - tmpIndex + i < str.length && str[tmpIndex] === str[i - tmpIndex + i]) tmpIndex -= 1
      tmp[i] = i - tmpIndex
    } else {
      const mirrorIndex = palindromeCenterIndexWithMaxRight - (i - palindromeCenterIndexWithMaxRight)
      let mirrorRightIndex = Math.min(
        i + tmp[mirrorIndex] - 1,
        maxRight
      )

      while (mirrorRightIndex < str.length && i - (mirrorRightIndex - i) >= 0 && str[mirrorRightIndex] === str[i - (mirrorRightIndex - i)]) mirrorRightIndex += 1

      tmp[i] = mirrorRightIndex - i
    }

    if (i + tmp[i] - 1 > maxRight) palindromeCenterIndexWithMaxRight = i

    if (maxCenterIndex === null || tmp[i] > tmp[maxCenterIndex]) maxCenterIndex = i
  }

  return str.slice(
    maxCenterIndex - (tmp[maxCenterIndex] - 1),
    maxCenterIndex + tmp[maxCenterIndex]
  ).replace(/#/g, '')
}

console.log(
  longestPalindrome_3('babad')
)
console.log(
  longestPalindrome_3('b')
)
console.log(
  longestPalindrome_3('bb')
)
console.log(
  longestPalindrome_3('ba')
)
console.log(
  longestPalindrome_3('cbbd')
)
