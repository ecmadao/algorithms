/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * A full binary tree is a binary tree where each node has exactly 0 or 2 children.
 * Return a list of all possible full binary trees with N nodes.  Each element of the answer is the root node of one possible tree.
 * Each node of each tree in the answer must have node.val = 0.
 * You may return the final list of trees in any order.
 *
 * Example 1:
 * Input: 7
 * Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
 *
 * Note:
 * 1 <= N <= 20
*/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 * 1, 3, 5, 7, 9
 */
 
public class Solution {
    public IList<TreeNode> AllPossibleFBT(int N) {
        List<TreeNode> res = new List<TreeNode>();
        if (N % 2 == 0) return res;
        
        N -= 1;
        if (N == 0) {
            res.Add(new TreeNode(0));
            return res;
        }

        for (int i = 1; i <= N - 1; i += 2) {
            IList<TreeNode> left = AllPossibleFBT(i);
            IList<TreeNode> right = AllPossibleFBT(N - i);
            
            foreach (TreeNode leftNode in left) {
                foreach (TreeNode rightNode in right) {
                    TreeNode root = new TreeNode(0);
                    root.left = leftNode;
                    root.right = rightNode;
                    res.Add(root);
                }
            }
        }
        return res;
    }
}