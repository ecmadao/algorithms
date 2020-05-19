/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
 *
 * Example 1:
 * Input: "aba"
 * Output: True
 *
 * Example 2:
 * Input: "abca"
 * Output: True
 * Explanation: You could delete the character 'c'.
 *
 * Note:
 * The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
*/

public class Solution {
    private bool IsPalidrome(string s, int i, int j) {
        while (i < j) {
            if (s[i++] != s[j--]) return false;
        }
        return true;
    }

    public bool ValidPalindrome(string s) {
        int i = 0;
        int j = s.Length - 1;

        while (i < j) {
            if (s[i] != s[j]) {
                if (s[i + 1] == s[j]) {
                    if (IsPalidrome(s, i + 1, j)) return true;
                }
                if (s[i] == s[j - 1]) {
                     if (IsPalidrome(s, i, j - 1)) return true;
                }
                return false;
            }
            i += 1;
            j -= 1;
        }
        return true;
    }
}


// abab