/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
 * You can use each character in text at most once. Return the maximum number of instances that can be formed.
 *
 * Example 1:
 * Input: text = "nlaebolko"
 * Output: 1
 *
 * Example 2:
 * Input: text = "loonbalxballpoon"
 * Output: 2
 *
 * Example 3:
 * Input: text = "leetcode"
 * Output: 0
 *
 * Constraints:
 * 1 <= text.length <= 10^4
 * text consists of lower case English letters only.
*/


public class Solution {
    public int MaxNumberOfBalloons(string text) {
        int res = int.MaxValue;
        Dictionary<char, int> dict = new Dictionary<char, int>() {
            {'a', 0},
            {'b', 0},
            {'l', 0},
            {'o', 0},
            {'n', 0}
        };

        foreach (char str in text) {
            if (dict.ContainsKey(str)) {
                dict[str] += 1;
            }
        }
        foreach (char key in dict.Keys) {
            switch (key) {
                case 'a':
                case 'b':
                case 'n':
                    res = Math.Min(res, dict[key]);
                    break;
                default:
                    res = Math.Min(res, dict[key] / 2);
                    break;
            }
        }
        return res;
    }
}