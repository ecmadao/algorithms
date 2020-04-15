/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * 请实现两个函数，分别用来序列化和反序列化二叉树。
 *
 * 示例:
 * 你可以将以下二叉树：
 *    1
 *   / \
 *  2   3
 *     / \
 *    4   5
 * 序列化为 "[1,2,3,null,null,4,5]"
 *
 * 注意：本题与主站 297 题相同：https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
 */

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Codec {

    // Encodes a tree to a single string.
    public string serialize(TreeNode root) {
        if (root == null) return "";

        List<string> arr = new List<string>();
        arr.Add($"{root.val}");

        Queue<TreeNode> queue = new Queue<TreeNode>();
        queue.Enqueue(root);

        while (queue.Count > 0) {
            TreeNode node = queue.Dequeue();
            arr.Add(node.left != null ? $"{node.left.val}" : "null");
            arr.Add(node.right != null ? $"{node.right.val}" : "null");

            if (node.left != null) queue.Enqueue(node.left);
            if (node.right != null) queue.Enqueue(node.right);
        }
        return string.Join(",", arr);
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(string data) {
        if (data == "") return null;
        string[] arr = data.Split(",");
        if (arr.Length <= 0) return null;

        TreeNode res = new TreeNode(Int32.Parse(arr[0]));
        Queue<TreeNode> queue = new Queue<TreeNode>();
        queue.Enqueue(res);

        int i = 1;
        while (i < arr.Length) {
            TreeNode node = queue.Dequeue();
            if (node == null) continue;

            string leftStr = arr[i++];
            string rightStr = i < arr.Length ? arr[i++] : "null";

            TreeNode left = leftStr == "null" ? null : new TreeNode(Int32.Parse(leftStr));
            TreeNode right = rightStr == "null" ? null : new TreeNode(Int32.Parse(rightStr));

            node.left = left;
            node.right = right;

            queue.Enqueue(left);
            queue.Enqueue(right);
        }
        return res;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));