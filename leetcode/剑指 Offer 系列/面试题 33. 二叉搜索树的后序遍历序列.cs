/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。
 * 如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
 * 参考以下这颗二叉搜索树：
 *     5
 *    / \
 *   2   6
 *  / \
 * 1   3
 *
 * 示例 1：
 * 输入: [1,6,3,2,5]
 * 输出: false
 *
 * 示例 2：
 * 输入: [1,3,2,6,5]
 * 输出: true
 *
 * 提示：
 * 数组长度 <= 1000
 */

public class Solution {
    public bool VerifyPostorder(int[] postorder) {
        int pre = int.MaxValue;
        Stack<int> stack = new Stack<int>();
        for (int i = postorder.Length - 1; i >= 0; i -= 1) {
            if (postorder[i] > pre) return false;
            while (stack.Count > 0 && stack.Peek() > postorder[i]) pre = stack.Pop();
            stack.Push(postorder[i]);
        }
        return true;
    }
}

// 1,3,2,6,8,7,5
