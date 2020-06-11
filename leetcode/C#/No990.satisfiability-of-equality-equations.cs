/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array equations of strings that represent relationships between variables,
 * each string equations[i] has length 4 and takes one of two different forms: "a==b" or "a!=b".
 * Here, a and b are lowercase letters (not necessarily different) that represent one-letter variable names.
 * Return true if and only if it is possible to assign integers to variable names so as to satisfy all the given equations.
 *
 * Example 1:
 * Input: ["a==b","b!=a"]
 * Output: false
 * Explanation:
 * If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.
 * There is no way to assign the variables to satisfy both equations.
 *
 * Example 2:
 * Input: ["b==a","a==b"]
 * Output: true
 * Explanation: We could assign a = 1 and b = 1 to satisfy both equations.
 *
 * Example 3:
 * Input: ["a==b","b==c","a==c"]
 * Output: true
 *
 * Example 4:
 * Input: ["a==b","b!=c","c==a"]
 * Output: false
 *
 * Example 5:
 * Input: ["c==c","b==d","x!=z"]
 * Output: true
 *
 * Note:
 * 1 <= equations.length <= 500
 * equations[i].length == 4
 * equations[i][0] and equations[i][3] are lowercase letters
 * equations[i][1] is either '=' or '!'
 * equations[i][2] is '='
*/

public class Solution {
    public bool EquationsPossible(string[] equations) {
        Dictionary<char, char> dict = new Dictionary<char, char>();

        char find (char target) {
            while (target != dict[target]) target = dict[target];
            return target;
        }

        Array.Sort(equations, (e1, e2) => {
            if (e1[1] == e2[1]) return 0;
            if (e1[1] == '=') return -1;
            return 1;
        });

        foreach (string equation in equations) {
            char s1 = equation[0];
            char s2 = equation[^1];

            if (!dict.ContainsKey(s1)) dict[s1] = s1;
            if (!dict.ContainsKey(s2)) dict[s2] = s2;
            char f1 = find(s1);
            char f2 = find(s2);

            if (equation[1] == '!' && f1 == f2) return false;
            if (equation[1] == '=') dict[f1] = f2;
        }

        return true;
    }
}