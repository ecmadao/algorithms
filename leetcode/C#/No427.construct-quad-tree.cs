/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a n * n matrix grid of 0's and 1's only. We want to represent the grid with a Quad-Tree.
 * Return the root of the Quad-Tree representing the grid.
 * Notice that you can assign the value of a node to True or False when isLeaf is False, and both are accepted in the answer.
 *
 * A Quad-Tree is a tree data structure in which each internal node has exactly four children. Besides, each node has two attributes:
 * val: True if the node represents a grid of 1's or False if the node represents a grid of 0's. 
 * isLeaf: True if the node is leaf node on the tree or False if the node has the four children.
 * class Node {
 *    public boolean val;
 *    public boolean isLeaf;
 *    public Node topLeft;
 *    public Node topRight;
 *    public Node bottomLeft;
 *    public Node bottomRight;
 * }
 * 
 * We can construct a Quad-Tree from a two-dimensional area using the following steps:
 * If the current grid has the same value (i.e all 1's or all 0's) set isLeaf True and set val to the value of the grid and set the four children to Null and stop.
 * If the current grid has different values, set isLeaf to False and set val to any value and divide the current grid into four sub-grids as shown in the photo.
 * Recurse for each of the children with the proper sub-grid.
 *
 * If you want to know more about the Quad-Tree, you can refer to the wiki.
 * Quad-Tree format:
 * The output represents the serialized format of a Quad-Tree using level order traversal, where null signifies a path terminator where no node exists below.
 * It is very similar to the serialization of the binary tree. The only difference is that the node is represented as a list [isLeaf, val].
 * If the value of isLeaf or val is True we represent it as 1 in the list [isLeaf, val] and if the value of isLeaf or val is False we represent it as 0.
 *
 * Example 1:
 * Input: grid = [[0,1],[1,0]]
 * Output: [[0,1],[1,0],[1,1],[1,1],[1,0]]
 * Explanation: The explanation of this example is shown below:
 * Notice that 0 represnts False and 1 represents True in the photo representing the Quad-Tree.
 *
 * Example 2:
 * Input: grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]
 * Output: [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]
 * Explanation: All values in the grid are not the same. We divide the grid into four sub-grids.
 * The topLeft, bottomLeft and bottomRight each has the same value.
 * The topRight have different values so we divide it into 4 sub-grids where each has the same value.
 * Explanation is shown in the photo below:
 *
 * Example 3:
 * Input: grid = [[1,1],[1,1]]
 * Output: [[1,1]]
 *
 * Example 4:
 * Input: grid = [[0]]
 * Output: [[1,0]]
 *
 * Example 5:
 * Input: grid = [[1,1,0,0],[1,1,0,0],[0,0,1,1],[0,0,1,1]]
 * Output: [[0,1],[1,1],[1,0],[1,0],[1,1]]
 *
 * Constraints:
 * n == grid.length == grid[i].length
 * n == 2^x where 0 <= x <= 6
*/

/*
// Definition for a QuadTree node.
public class Node {
    public bool val;
    public bool isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;

    public Node() {
        val = false;
        isLeaf = false;
        topLeft = null;
        topRight = null;
        bottomLeft = null;
        bottomRight = null;
    }
    
    public Node(bool _val, bool _isLeaf) {
        val = _val;
        isLeaf = _isLeaf;
        topLeft = null;
        topRight = null;
        bottomLeft = null;
        bottomRight = null;
    }
    
    public Node(bool _val,bool _isLeaf,Node _topLeft,Node _topRight,Node _bottomLeft,Node _bottomRight) {
        val = _val;
        isLeaf = _isLeaf;
        topLeft = _topLeft;
        topRight = _topRight;
        bottomLeft = _bottomLeft;
        bottomRight = _bottomRight;
    }
}
*/

public class Solution {
    private static Node Build(int[][] grid, int[] start, int[] end) {
        Node res = new Node(true, false);
        int width = end[0] - start[0];

        if (width == 1) {
            res.isLeaf = true;
            res.val = grid[start[0]][start[1]] == 0 ? false : true;
            return res;
        }

        res.topLeft = Build(grid, start, new int[2]{ start[0] + width / 2, start[1] + width / 2 });
        res.topRight = Build(grid, new int[2]{ start[0], start[1] + width / 2 }, new int[2]{ start[0] + width / 2, end[1] });
        res.bottomLeft = Build(grid, new int[2]{ start[0] + width / 2, start[1] }, new int[2]{ end[0], start[1] + width / 2 });
        res.bottomRight = Build(grid, new int[2]{ start[0] + width / 2, start[1] + width / 2 }, end);

        if (
            res.topLeft.val == res.topRight.val && res.topLeft.val == res.bottomLeft.val && res.topLeft.val == res.bottomRight.val
            && res.topLeft.isLeaf && res.topRight.isLeaf && res.bottomLeft.isLeaf && res.bottomRight.isLeaf
        ) {
            res = new Node(res.topLeft.val, true);
        }
        return res;
    }

    public Node Construct(int[][] grid) {
        return Build(grid, new int[2]{ 0, 0 }, new int[2]{ grid.Length, grid.Length });
    }
}