/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
 *
 * Example 1:
 * Input: "Hello"
 * Output: "hello"
 *
 * Example 2:
 * Input: "here"
 * Output: "here"
 *
 * Example 3:
 * Input: "LOVELY"
 * Output: "lovely"
 *
 * Example 4:
 * Input: "Y&O8u"
 * Output: "y&o8u"
 */

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  return str.split('').map((letter) => {
    const code = letter.charCodeAt()
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(code + 32)
    }
    return letter
  }).join('')
}
