/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
 *
 * Example:
 * Input: S = "ADOBECODEBANC", T = "ABC"
 * Output: "BANC"
 *
 * Note:
 * If there is no such window in S that covers all characters in T, return the empty string "".
 * If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/

public class Solution {
    public string MinWindow(string s, string t) {
        Dictionary<char, int> dict = new Dictionary<char, int>();
        Dictionary<char, int> cache = new Dictionary<char, int>();
        foreach (char letter in t) {
            int c = 0;
            dict.TryGetValue(letter, out c);
            dict[letter] = c + 1;
            cache[letter] = 0;
        }

        string res = "";
        int i = 0;
        int j = 0;
        int missing = t.Length;
        while (i <= s.Length && j < s.Length) {
            if (missing == 0) {
                if (res == "" || res.Length > i - j) {
                    res = s.Substring(j, i - j);
                }
                if (cache.ContainsKey(s[j])) {
                    cache[s[j]] -= 1;
                    if (cache[s[j]] < dict[s[j]]) missing += 1;
                }
                j += 1;
            } else {
                if (i == s.Length) break;
                if (dict.ContainsKey(s[i])) {
                    cache[s[i]] += 1;
                    if (cache[s[i]] <= dict[s[i]]) missing -= 1;
                }
                i += 1;
            }
        }
        return res;
    }
}