/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * Note: For the purpose of this problem, we define empty string as valid palindrome.
 *
 * Example 1:
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 *
 * Example 2:
 * Input: "race a car"
 * Output: false
*/

public class Solution {
    public bool IsDigitOrLetter(char s) {
        return Char.IsDigit(s) || Char.IsLetter(s);
    }

    public bool IsPalindrome(string s) {
        int i = 0;
        int j = s.Length - 1;

        while (i < j) {
            if (!IsDigitOrLetter(s[i])) {
                i += 1;
                continue;
            }
            if (!IsDigitOrLetter(s[j])) {
                j -= 1;
                continue;
            }
            if (Char.ToUpper(s[i]) != Char.ToUpper(s[j])) return false;
            i += 1;
            j -= 1;
        }
        return true;
    }
}