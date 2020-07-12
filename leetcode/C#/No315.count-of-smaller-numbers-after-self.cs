/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * You are given an integer array nums and you have to return a new counts array.
 * The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].
 *
 * Example:
 * Input: [5,2,6,1]
 * Output: [2,1,1,0] 
 * Explanation:
 * To the right of 5 there are 2 smaller elements (2 and 1).
 * To the right of 2 there is only 1 smaller element (1).
 * To the right of 6 there is 1 smaller element (1).
 * To the right of 1 there is 0 smaller element.
*/

public class TreeNode {
    public TreeNode left;
    public TreeNode right;
    public int val;
    public int count;
    public int leftCount;

    public TreeNode(int val) {
        this.val = val;
        this.count = 1;
    }
}

public class Solution {
    public IList<int> CountSmaller(int[] nums) {
        if (nums.Length == 0) return new int[0];

        var treeNode = new TreeNode(nums[^1]);
        int[] res = new int[nums.Length];
        
        for (int i = nums.Length - 2; i >= 0; i -= 1) {
            int count = 0;
            var node = treeNode;
            while (true) {
                if (node.val == nums[i]) {
                    count += node.leftCount;
                    node.count += 1;
                    break;
                }
                if (node.val > nums[i]) {
                    node.leftCount += 1;
                    if (node.left == null) {
                        node.left = new TreeNode(nums[i]);
                        break;
                    }
                    node = node.left;
                } else {
                    count += (node.leftCount + node.count);
                    if (node.right == null) {
                        node.right = new TreeNode(nums[i]);
                        break;
                    }
                    node = node.right;
                }
            }

            res[i] = count;
        }

        return res;
    }
}