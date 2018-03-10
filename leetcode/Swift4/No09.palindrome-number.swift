/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Determine whether an integer is a palindrome. Do this without extra space.
 *
 * Hints:
 * Could negative integers be palindromes? (ie, -1)
 * If you are thinking of converting the integer to string, note the restriction of using extra space.
 * You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?
 * There is a more generic way of solving this problem.
 *
 * 判断数字是否回文
 */

class Solution {
    func isPalindrome(_ x: Int) -> Bool {
        if x < 0 { return false }
        var num = 0
        var raw = x
        while raw > 0 {
            num = num * 10 + raw % 10
            raw = raw / 10
        }
        return num == x
    }
}

