/**
 * Desc:
 * Given an integer array nums, return the number of range sums that lie in [lower, upper] inclusive.
 * Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j (i ≤ j), inclusive.
 *
 * Example:
 * Input: nums = [-2,5,-1], lower = -2, upper = 2,
 * Output: 3
 * Explanation:
 * The three ranges are : [0,0], [2,2], [0,2] and their respective sums are: -2, -1, 2.

 * Note:
 * A naive algorithm of O(n2) is trivial. You MUST do better than that.
 */

/**
 * 思路解析：
 * 首先用 sum(i) 表示 nums[0] + nums[1] + ... + nums[i]
 * 如果使用暴露破解法，
 * 则要求其所有可能的 range sum，对于每个 sum 判断其是否在 [lower, upper] 之内。
 * 即对于每一个索引位于 i 的元素，都要求：
 * i, i + (i - 1), i + (i - 1) + (i - 2), ..., i + (i - 1) + ... + 1 + 0
 * 或者表示成：
 * sum(i) - sum(i - 1), sum(i) - sum(i - 2), sum(i) - sum(i - 3), ... sum(i) - sum(0), sum(i)
 * 则复杂度为 n^2
 *
 * 但换一种思路，如果已经计算出了 sum(0), sum(1), sum(2), ... , sum(i),
 * 问有多少种 range sum 能够让 sum(i) 位于 [lower, upper] 内，
 * 则假设，在 sum(i) 以前，即从 sum(0) 到 sum(i - 1) 内，有某 sum 值符合该条件，
 * 则应该有：
 * sum(i) - sum 位于 [lower, upper] 之间。
 * 因此，寻找 sum(0) 到 sum(i - 1) 内符合条件的 sum 即可。同样，对于 sum(i - 1) 类推
 */

function Node(val) {
  this.val = val;
  this.count = 1;
  this.leftCount = 0;
  this.rightCount = 0;

  this.left = null;
  this.right = null;
}

const insertNode = (node, val) => {
  if (node.val === val) {
    node.count += 1;
  } else if (node.val > val) {
    node.leftCount += 1;
    if (!node.left) {
      node.left = new Node(val);
    } else {
      insertNode(node.left, val);
    }
  } else {
    node.rightCount += 1;
    if (!node.right) {
      node.right = new Node(val);
    } else {
      insertNode(node.right, val);
    }
  }
};

const countSmallerRangeCount = (node, val) => {
  if (!node) return 0;
  // 如果当前节点的值和 val 相等，则左子树全部节点一定都小于 val
  if (node.val === val) return node.leftCount;
  // 如果当前节点的值 > val，则右子树全部节点一定都大于 val，不必遍历
  if (node.val > val) return countSmallerRangeCount(node.left, val);
  return node.count + node.leftCount + countSmallerRangeCount(node.right, val);
};

const countLargerRangeCount = (node, val) => {
  if (!node) return 0;
  // 如果当前节点的值和 val 相等，则右子树全部节点一定都小于 val
  if (node.val === val) return node.rightCount;
  // 如果当前节点的值 < val，则左子树全部节点一定都小于 val，不必遍历
  if (node.val < val) return countLargerRangeCount(node.right, val);
  return node.count + node.rightCount + countLargerRangeCount(node.left, val);
};

const countRangeCount = (root, min, max) => {
  const total = root.count + root.leftCount + root.rightCount;
  const left = countSmallerRangeCount(root, min);
  const right = countLargerRangeCount(root, max);
  return total - left - right;
};

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
const countRangeSum = (nums, lower, upper) => {
  let count = 0;
  const sums = [];
  const root = new Node(0);

  for (const num of nums) {
    const sum = sums.length ? num + sums.slice(-1)[0] : num;
    sums.push(sum);
    const min = sum - upper;
    const max = sum - lower;
    count += countRangeCount(root, min, max);
    insertNode(root, sum);
  }
  return count;
};

console.log(countRangeSum([-2, 5, -1], -2, 2)); // 3
console.log(countRangeSum([-2, 5, 99, -1], -2, 2)); // 2
console.log(countRangeSum([-3, 1, -2, 5, 99, -1], -2, 2)); // 6

