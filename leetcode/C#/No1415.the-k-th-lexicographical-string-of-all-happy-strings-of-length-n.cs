/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * A happy string is a string that:
 * - consists only of letters of the set ['a', 'b', 'c'].
 * - s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).
 * For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings.
 * Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.
 * Return the kth string of this list or return an empty string if there are less than k happy strings of length n.
 *
 * Example 1:
 * Input: n = 1, k = 3
 * Output: "c"
 * Explanation: The list ["a", "b", "c"] contains all happy strings of length 1. The third string is "c".
 *
 * Example 2:
 * Input: n = 1, k = 4
 * Output: ""
 * Explanation: There are only 3 happy strings of length 1.
 *
 * Example 3:
 * Input: n = 3, k = 9
 * Output: "cab"
 * Explanation: There are 12 different happy string of length 3 ["aba", "abc", "aca", "acb", "bab", "bac", "bca", "bcb", "cab", "cac", "cba", "cbc"]. You will find the 9th string = "cab"
 *
 * Example 4:
 * Input: n = 2, k = 7
 * Output: ""
 *
 * Example 5:
 * Input: n = 10, k = 100
 * Output: "abacbabacb"
 *
 * Constraints:
 * 1 <= n <= 10
 * 1 <= k <= 100
*/

public class Solution {
    public string GetHappyString(int n, int k) {
        List<string> list = new List<string>();
        string str = "abc";
        string[] strs = new string[]{ "abc", "bc", "ac", "ab" };

        void dfs(Stack<char> stack) {
            if (stack.Count == n) {
                list.Add(string.Join("", stack.ToArray()));
                return;
            }
            if (list.Count == k) return;

            if (stack.Count == 0) {
                foreach (char s in strs[0]) {
                    stack.Push(s);
                    dfs(stack);
                    stack.Pop();
                    if (list.Count == k) break;
                }
            } else {
                foreach (char s in strs[stack.Peek() - 96]) {
                    stack.Push(s);
                    dfs(stack);
                    stack.Pop();
                    if (list.Count == k) break;
                }
            }
        }

        dfs(new Stack<char>());
        if (list.Count != k) return "";

        char[] res = list[^1].ToCharArray();
        Array.Reverse(res);
        return string.Join("", res);
    }
}
