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
 * 需要注意的是，在 Swift 中直接用字符串操作的话会超时，且麻烦！可以转为数组后再进行计算
 */

class Solution {
    func findPalindrome(_ arr: Array<Character>, left: Int, right: Int) -> String {
        var leftIndex = left
        var rightIndex = right
        while leftIndex >= 0 && rightIndex < arr.count {
            if arr[leftIndex] != arr[rightIndex] {
                break
            }
            leftIndex -= 1
            rightIndex += 1
        }
        return String(arr[leftIndex + 1..<rightIndex])
    }

    func longestPalindrome(_ s: String) -> String {
        var result = String()
        var palindrome = String()
        let arr: Array<Character> = Array(s)
        var index = 0

        while index < arr.count {
            if result.count >= (arr.count - index) * 2 {
                break
            }

            palindrome = findPalindrome(arr, left: index, right: index)
            if palindrome.count > result.count {
                result = palindrome
            }

            palindrome = findPalindrome(arr, left: index, right: index + 1)
            if palindrome.count > result.count {
                result = palindrome
            }
            index += 1
        }
        return result
    }
}