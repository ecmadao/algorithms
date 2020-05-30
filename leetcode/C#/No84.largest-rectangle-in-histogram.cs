/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given n non-negative integers representing the histogram's bar height where the width of each bar is 1,
 * find the area of largest rectangle in the histogram.
 * 
 * Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].
 * The largest rectangle is shown in the shaded area, which has area = 10 unit.
 *
 * Example:
 * Input: [2,1,5,6,2,3]
 * Output: 10
*/

public class Solution {
    public int LargestRectangleArea(int[] heights) {
        if (heights.Length == 0) return 0;

        Stack<int> stack = new Stack<int>();
        stack.Push(0);
        int res = 0;

        for (int i = 1; i < heights.Length; i += 1) {
            while (stack.Count > 0 && heights[stack.Peek()] > heights[i]) {
                int j = stack.Pop();
                res = Math.Max(res, (stack.Count > 0 ? i - stack.Peek() - 1 : i) * heights[j]);
            }
            stack.Push(i);
        }
        while (stack.Count > 0) {
            int j = stack.Pop();
            res = Math.Max(res, (stack.Count > 0 ? heights.Length - stack.Peek() - 1 : heights.Length) * heights[j]);
        }
        return res;
    }
}