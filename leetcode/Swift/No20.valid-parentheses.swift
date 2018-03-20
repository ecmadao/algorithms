/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 *
 * 给出一个含有括号的字符串，判断其是否正确的闭合
 * 例如，'[](){}' 是正确闭合的，'{[()]}' 也是正确闭合的，但 '[](}' 这样的就不是
 */

class Solution {
    let charMap: [Character:Character] = [
        "}": "{",
        ")": "(",
        "]": "["
    ]

    func isValid(_ s: String) -> Bool {
        var stack = [Character]()
        for char in s {
            let c = charMap[char]
            if c == nil {
                stack.append(char)
            } else {
                if stack.popLast() != c {
                    return false
                }
            }
        }
        return stack.count == 0
    }
}
