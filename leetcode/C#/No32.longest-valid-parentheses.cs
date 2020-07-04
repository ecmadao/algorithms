/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.
 *
 * Example 1:
 * Input: "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()"
 *
 * Example 2:
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
*/

public class Solution {
    public int LongestValidParentheses(string s) {
        Stack<int> stack = new Stack<int>();
        int left = -1;
        int res = 0;

        for (int i = 0; i < s.Length; i += 1) {
            if (s[i] == ')') {
                if (stack.Count == 0) {
                    left = i;
                } else {
                    stack.Pop();
                    int lastIndex = stack.Count == 0 ? left : stack.Peek();
                    res = Math.Max(res, i - lastIndex);
                }
            } else {
                stack.Push(i);
            }
        }

        return res;
    }
}