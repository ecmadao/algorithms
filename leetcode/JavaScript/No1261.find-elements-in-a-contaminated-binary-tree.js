/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a binary tree with the following rules:
 * 1. root.val == 0
 * 2. If treeNode.val == x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
 * 3. If treeNode.val == x and treeNode.right != null, then treeNode.right.val == 2 * x + 2
 *
 * Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.
 * You need to first recover the binary tree and then implement the FindElements class:
 * 1. FindElements(TreeNode* root) Initializes the object with a contamined binary tree, you need to recover it first.
 * 2. bool find(int target) Return if the target value exists in the recovered binary tree.
 *
 * Example 1:
 * Input
 * ["FindElements","find","find"]
 * [[[-1,null,-1]],[1],[2]]
 * Output
 * [null,false,true]
 * Explanation
 * FindElements findElements = new FindElements([-1,null,-1]);
 * findElements.find(1); // return False
 * findElements.find(2); // return True
 *
 * Example 2:
 * Input
 * ["FindElements","find","find","find"]
 * [[[-1,-1,-1,-1,-1]],[1],[3],[5]]
 * Output
 * [null,true,true,false]
 * Explanation
 * FindElements findElements = new FindElements([-1,-1,-1,-1,-1]);
 * findElements.find(1); // return True
 * findElements.find(3); // return True
 * findElements.find(5); // return False
 *
 * Example 3:
 * Input
 * ["FindElements","find","find","find","find"]
 * [[[-1,null,-1,-1,null,-1]],[2],[3],[4],[5]]
 * Output
 * [null,true,false,false,true]
 * Explanation
 * FindElements findElements = new FindElements([-1,null,-1,-1,null,-1]);
 * findElements.find(2); // return True
 * findElements.find(3); // return False
 * findElements.find(4); // return False
 * findElements.find(5); // return True
 *
 * Constraints:
 * 1. TreeNode.val == -1
 * 2. The height of the binary tree is less than or equal to 20
 * 3. The total number of nodes is between [1, 10^4]
 * 4. Total calls of find() is between [1, 10^4]
 * 5. 0 <= target <= 10^6
 *
 * 给出一个满足下述规则的二叉树：
 * 1. root.val == 0
 * 2. 如果 treeNode.val == x 且 treeNode.left != null，那么 treeNode.left.val == 2 * x + 1
 * 3. 如果 treeNode.val == x 且 treeNode.right != null，那么 treeNode.right.val == 2 * x + 2
 *
 * 现在这个二叉树受到「污染」，所有的 treeNode.val 都变成了 -1。
 * 请你先还原二叉树，然后实现 FindElements 类：
 * 1. FindElements(TreeNode* root) 用受污染的二叉树初始化对象，你需要先把它还原。
 * 2. bool find(int target) 判断目标值 target 是否存在于还原后的二叉树中并返回结果。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
  this.root = root
  this.cache = new Set()
  root.val = 0

  const queue = [this.root]
  while (queue.length) {
    const node = queue.pop()
    this.cache.add(node.val)
    if (node.left) {
      node.left.val = 2 * node.val + 1
      queue.push(node.left)
    }
    if (node.right) {
      node.right.val = 2 * node.val + 2
      queue.push(node.right)
    }
  }
};

/**
* @param {number} target
* @return {boolean}
*/
FindElements.prototype.find = function(target) {
  return this.cache.has(target)
};

/**
* Your FindElements object will be instantiated and called as such:
* var obj = new FindElements(root)
* var param_1 = obj.find(target)
*/