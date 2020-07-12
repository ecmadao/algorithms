/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.
 * - '?' Matches any single character.
 * - '*' Matches any sequence of characters (including the empty sequence).
 * The matching should cover the entire input string (not partial).
 * 
 * Note:
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters like ? or *.
 * 
 * Example 1:
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 * 
 * Example 2:
 * Input:
 * s = "aa"
 * p = "*"
 * Output: true
 * Explanation: '*' matches any sequence.
 * 
 * Example 3:
 * Input:
 * s = "cb"
 * p = "?a"
 * Output: false
 * Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
 * 
 * Example 4:
 * Input:
 * s = "adceb"
 * p = "*a*b"
 * Output: true
 * Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
 * 
 * Example 5:
 * Input:
 * s = "acdcb"
 * p = "a*c?b"
 * Output: false
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const dp = [];

    const match = (i, j) => {
        if (j >= p.length) return i >= s.length;
        if (i >= s.length) return /^\*{1,}$/.test(p.slice(j));

        if (!dp[i]) dp[i] = [];
        if (dp[i][j] !== undefined) return dp[i][j];

        let res = s[i] === p[j];

        if (p[j] === '?') {
            res = match(i + 1, j + 1);
        } else if (p[j] == '*') {
            res = match(i + 1, j) || match(i, j + 1);
        } else {
            res = res && match(i + 1, j + 1);
        }
        
        dp[i][j] = res;
        return res;
    }

    return match(0, 0);
};
