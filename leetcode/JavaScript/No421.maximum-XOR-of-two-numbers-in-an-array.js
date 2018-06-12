/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.
 * Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.
 * Could you do this in O(n) runtime?
 *
 * Example:
 * Input: [3, 10, 5, 25, 2, 8]
 * Output: 28
 * Explanation: The maximum result is 5 ^ 25 = 28.
 */


function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const findXOR = (strs, node) => {
  let tmp = 0;
  let bits = '0';
  for (const str of strs) {
    if (node.left && node.right) {
      if (str === '1') {
        node = node.right;
        bits += '1';
      } else {
        node = node.left;
        bits += '1';
      }
    } else if (node.left && str === '0') {
      node = node.left;
      bits += '1';
    } else if (node.right && str === '1') {
      node = node.right;
      bits += '1';
    } else {
      node = node.left || node.right;
      bits += '0';
    }
  }
  return parseInt(bits, 2);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  const root = new Node(0);
  const nodes = [];
  const bitStrs = [];

  for (const num of nums) {
    let node = root;
    const strs = num.toString(2);
    bitStrs.push(strs);

    let offset = 32 - strs.length;
    while (offset) {
      if (!node.right) {
        node.right = new Node(0);
      }
      node = node.right;
      offset -= 1;
    }
    const cur = node;
    nodes.push(cur);
    for (const str of strs) {
      if (str === '1') {
        if (!node.left) node.left = new Node(1);
        node = node.left;
      } else {
        if (!node.right) node.right = new Node(0);
        node = node.right;
      }
    }
    node.num = num;
  }

  let result = 0;

  for (let i = 0; i < bitStrs.length; i += 1) {
    const bits = bitStrs[i];
    let node = nodes[i];
    result = Math.max(result, findXOR(bits, node));
  }
  return result;
};
