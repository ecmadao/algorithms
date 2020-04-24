/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 括号。设计一种算法，打印n对括号的所有合法的（例如，开闭一一对应）组合。
 * 说明：解集不能包含重复的子集。
 *
 * 例如，给出 n = 3，生成结果为：
 * [
 *  "((()))",
 *  "(()())",
 *  "(())()",
 *  "()(())",
 *  "()()()"
 * ]
 */

public class Solution {
    public IList<string> GenerateParenthesis(int n) {
        List<string> res = new List<string>();

        void dfs(int left, int right, string prefix) {
            if (left == n) {
                res.Add(
                    prefix +
                    string.Join("", new string[n - right].Select(val => ")").ToArray())
                );
                return;
            }
            dfs(left + 1, right, prefix + "(");
            if (left > right) dfs(left, right + 1, prefix + ")");
        }

        dfs(0, 0, "");
        return res;
    }
}