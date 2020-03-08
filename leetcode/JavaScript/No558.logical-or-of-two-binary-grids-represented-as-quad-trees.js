/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * A Binary Matrix is a matrix in which all the elements are either 0 or 1.
 * Given quadTree1 and quadTree2. quadTree1 represents a n * n binary matrix and quadTree2 represents another n * n binary matrix.
 * Return a Quad-Tree representing the n * n binary matrix which is the result of logical bitwise OR of the two binary matrixes represented by quadTree1 and quadTree2.
 * Notice that you can assign the value of a node to True or False when isLeaf is False, and both are accepted in the answer.
 * A Quad-Tree is a tree data structure in which each internal node has exactly four children. Besides, each node has two attributes:
 * 1. val: True if the node represents a grid of 1's or False if the node represents a grid of 0's.
 * 2. isLeaf: True if the node is leaf node on the tree or False if the node has the four children.
 * class Node {
 *     public boolean val;
 *     public boolean isLeaf;
 *     public Node topLeft;
 *     public Node topRight;
 *     public Node bottomLeft;
 *     public Node bottomRight;
 * }
 *
 * We can construct a Quad-Tree from a two-dimensional area using the following steps:
 * 1. If the current grid has the same value (i.e all 1's or all 0's) set isLeaf True and set val to the value of the grid and set the four children to Null and stop.
 * 2. If the current grid has different values, set isLeaf to False and set val to any value and divide the current grid into four sub-grids as shown in the photo.
 * Recurse for each of the children with the proper sub-grid.
 *
 * If you want to know more about the Quad-Tree, you can refer to the wiki.
 * Quad-Tree format:
 * The input/output represents the serialized format of a Quad-Tree using level order traversal, where null signifies a path terminator where no node exists below.
 * It is very similar to the serialization of the binary tree. The only difference is that the node is represented as a list [isLeaf, val].
 * If the value of isLeaf or val is True we represent it as 1 in the list [isLeaf, val] and if the value of isLeaf or val is False we represent it as 0.
 *
 * Example 1:
 * Input: quadTree1 = [[0,1],[1,1],[1,1],[1,0],[1,0]], quadTree2 = [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]
 * Output: [[0,0],[1,1],[1,1],[1,1],[1,0]]
 * Explanation:
 * quadTree1 and quadTree2 are shown above. You can see the binary matrix which is represented by each Quad-Tree.
 * If we apply logical bitwise OR on the two binary matrices we get the binary matrix below which is represented by the result Quad-Tree.
 * Notice that the binary matrices shown are only for illustration, you don't have to construct the binary matrix to get the result tree.
 *
 * Example 2:
 * Input: quadTree1 = [[1,0]], quadTree2 = [[1,0]]
 * Output: [[1,0]]
 * Explanation:
 * Each tree represents a binary matrix of size 1*1. Each matrix contains only zero.
 * The resulting matrix is of size 1*1 with also zero.
 *
 * Example 3:
 * Input: quadTree1 = [[0,0],[1,0],[1,0],[1,1],[1,1]], quadTree2 = [[0,0],[1,1],[1,1],[1,0],[1,1]]
 * Output: [[1,1]]
 *
 * Example 4:
 * Input: quadTree1 = [[0,0],[1,1],[1,0],[1,1],[1,1]], quadTree2 = [[0,0],[1,1],[0,1],[1,1],[1,1],null,null,null,null,[1,1],[1,0],[1,0],[1,1]]
 * Output: [[0,0],[1,1],[0,1],[1,1],[1,1],null,null,null,null,[1,1],[1,0],[1,0],[1,1]]
 *
 * Example 5:
 * Input: quadTree1 = [[0,1],[1,0],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]], quadTree2 = [[0,1],[0,1],[1,0],[1,1],[1,0],[1,0],[1,0],[1,1],[1,1]]
 * Output: [[0,0],[0,1],[0,1],[1,1],[1,0],[1,0],[1,0],[1,1],[1,1],[1,0],[1,0],[1,1],[1,1]]
 *
 * Constraints:
 * 1. quadTree1 and quadTree2 are both valid Quad-Trees each representing a n * n grid.
 * 2. n == 2^x where 0 <= x <= 9.
 *
 * 四叉树是一种树数据，其中每个结点恰好有四个子结点：topLeft、topRight、bottomLeft 和 bottomRight。四叉树通常被用来划分一个二维空间，递归地将其细分为四个象限或区域。
 * 我们希望在四叉树中存储 True/False 信息。四叉树用来表示 N * N 的布尔网格。对于每个结点, 它将被等分成四个孩子结点直到这个区域内的值都是相同的。
 * 每个节点都有另外两个布尔属性：isLeaf 和 val。当这个节点是一个叶子结点时 isLeaf 为真。val 变量储存叶子结点所代表的区域的值。
 */

/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
var intersect = function(quadTree1, quadTree2) {
  if (
    (quadTree1.isLeaf && quadTree1.val) ||
    (quadTree2.isLeaf && !quadTree2.val)
  ) {
    return quadTree1
  } else if (
    (quadTree2.isLeaf && quadTree2.val) ||
    (quadTree1.isLeaf && !quadTree1.val)
  ) {
    return quadTree2
  } else {
    const topLeft = intersect(quadTree1.topLeft, quadTree2.topLeft)
    const topRight = intersect(quadTree1.topRight, quadTree2.topRight)
    const bottomLeft = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft)
    const bottomRight = intersect(quadTree1.bottomRight, quadTree2.bottomRight)

    if (
      topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf &&
      topLeft.val === topRight.val && topLeft.val === bottomLeft.val && topLeft.val === bottomRight.val
    ) {
      return topLeft
    }

    return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight)
  }
}

/*
A:                 B:                 C (A or B):
+-------+-------+  +-------+---+---+  +-------+-------+
|       |       |  |       | F | F |  |       |       |
|   T   |   T   |  |   T   +---+---+  |   T   |   T   |
|       |       |  |       | T | T |  |       |       |
+-------+-------+  +-------+---+---+  +-------+-------+
|       |       |  |       |       |  |       |       |
|   F   |   F   |  |   T   |   F   |  |   T   |   F   |
|       |       |  |       |       |  |       |       |
+-------+-------+  +-------+-------+  +-------+-------+
*/