/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Example 1:
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 *
 * Example 2:
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 * Input: "pwwkew"
 * Output: 3
 * Explanation:
 * The answer is "wke", with the length of 3. 
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

public class Solution {
    public int LengthOfLongestSubstring(string s) {
        int res = 0;
        int i = 0;
        int j = 0;
        Dictionary<char, int> dict = new Dictionary<char, int>();

        while (j < s.Length) {
            char str = s[j];

            if (dict.ContainsKey(str)) {
                res = Math.Max(res, j - i);

                int k = dict[str];
                while (i <= k) {
                    dict.Remove(s[i]);
                    i += 1;
                }
            }

            dict[str] = j;
            j += 1;
        }

        return Math.Max(res, j - i);
    }
}