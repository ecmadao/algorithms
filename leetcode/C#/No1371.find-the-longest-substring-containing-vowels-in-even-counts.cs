/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given the string s, return the size of the longest substring containing each vowel an even number of times.
 * That is, 'a', 'e', 'i', 'o', and 'u' must appear an even number of times.
 *
 * Example 1:
 * Input: s = "eleetminicoworoep"
 * Output: 13
 * Explanation: The longest substring is "leetminicowor" which contains two each of the vowels: e, i and o and zero of the vowels: a and u.
 *
 * Example 2:
 * Input: s = "leetcodeisgreat"
 * Output: 5
 * Explanation: The longest substring is "leetc" which contains two e's.
 *
 * Example 3:
 * Input: s = "bcbcbc"
 * Output: 6
 * Explanation: In this case, the given string "bcbcbc" is the longest because all vowels: a, e, i, o and u appear zero times.
 *
 * Constraints:
 * 1 <= s.length <= 5 x 10^5
 * s contains only lowercase English letters.
*/

public class Solution {
    public int FindTheLongestSubstring(string s) {
        string target = "aeiou";
        Dictionary<int, int> dict = new Dictionary<int, int>();
        dict[0] = -1;

        int tag = 0;
        int max = 0;
        for (int i = 0; i < s.Length; i += 1) {
            for (int j = 0; j < target.Length; j += 1) {
                if (s[i] == target[j]) {
                    tag ^= (1 << (target.Length - (j + 1)));
                    break;
                }
            }
            if (dict.ContainsKey(tag)) {
                max = Math.Max(max, i - dict[tag]);
            } else {
                dict[tag] = i;
            }
        }
        return max;
    }
}
