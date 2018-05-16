/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Print a binary tree in an m*n 2D string array following these rules:
 * 1. The row number m should be equal to the height of the given binary tree.
 * 2. The column number n should always be an odd number.
 * 3. The root node's value (in string format) should be put in the exactly middle of the first row it can be put.
 *  The column and the row where the root node belongs will separate the rest space into two parts (left-bottom part and right-bottom part). You should print the left subtree in the left-bottom part and print the right subtree in the right-bottom part. The left-bottom part and the right-bottom part should have the same size. Even if one subtree is none while the other is not, you don't need to print anything for the none subtree but still need to leave the space as large as that for the other subtree. However, if two subtrees are none, then you don't need to leave space for both of them.
 * 4. Each unused space should contain an empty string "".
 * 5. Print the subtrees following the same rules.
 *
 * Example:
 * Input:
     1
    /
   2
 * Output:
 * [["", "1", ""],
 * ["2", "", ""]]
 *
 * Input:
     1
    / \
   2   3
    \
     4
 * Output:
 * [["", "", "", "1", "", "", ""],
 * ["", "2", "", "", "", "3", ""],
 * ["", "", "4", "", "", "", ""]]
 *
 * Input:
        1
       / \
      2   5
     /
    3
   /
  4
 * Output:
 * [["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
 * ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
 * ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
 * ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]
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
 * @return {string[][]}
 */
var printTree = function(root) {
  const queue = [{
    layer: 0,
    node: root,
    index: 0,
    total: 1
  }];

  let i = 0;
  let curLayer = 0;
  let n = 1;

  while (i < queue.length) {
    const item = queue[i];
    if (item.layer + 1 !== curLayer) {
      curLayer = item.layer + 1;
      n = n * 2 + 1;
    }
    if (item.node.left) {
      queue.push({
        layer: item.layer + 1,
        node: item.node.left,
        index: item.index * 2,
        total: item.total * 2
      });
    }
    if (item.node.right) {
      queue.push({
        layer: item.layer + 1,
        node: item.node.right,
        index: item.index * 2 + 1,
        total: item.total * 2
      });
    }
    i += 1;
  }
  n = (n - 1) / 2;

  const m = queue[queue.length - 1].layer;
  const result = new Array(m + 1)
    .fill(1).map(_ => new Array(n).fill(''));

  curLayer = m;
  let offset = 0;
  while (queue.length) {
    const {
      node,
      layer,
      index,
      total
    } = queue.pop();
    if (curLayer !== layer) {
      curLayer = layer;
      offset = offset * 2 + 1;
    }
    const interval = total >= 2 ? (n - total - 2 * (offset)) / (total - 1) : 0;
    result[layer][index * interval + index + offset] = `${node.val}`;
  }
  return result;
};
