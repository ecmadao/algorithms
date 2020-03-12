/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
 * You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.
 *
 * Example 1:
 * Input: name = "alex", typed = "aaleex"
 * Output: true
 * Explanation: 'a' and 'e' in 'alex' were long pressed.
 *
 * Example 2:
 * Input: name = "saeed", typed = "ssaaedd"
 * Output: false
 * Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
 *
 * Example 3:
 * Input: name = "leelee", typed = "lleeelee"
 * Output: true
 *
 * Example 4:
 * Input: name = "laiden", typed = "laiden"
 * Output: true
 * Explanation: It's not necessary to long press any character.
 *
 * Note:
 * name.length <= 1000
 * typed.length <= 1000
 * The characters of name and typed are lowercase letters.
 *
 * 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。
 * 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True
 */

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  if (name.length > typed.length) return false

  let i = 0
  let j = 0

  while (i < name.length && j < typed.length) {
    if (name[i] !== typed[j]) {
      let raw = j
      while (j < typed.length && typed[j] === typed[j - 1]) j += 1
      if (raw === j || j === typed.length) return false
    } else {
      i += 1
      j += 1
    }
  }

  while (j < typed.length && typed[j] === typed[j - 1]) j += 1
  return j >= typed.length && i >= name.length
}
