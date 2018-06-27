/**
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

/**
 * ====================== Solution 1 - Sort + 二分搜索 ======================
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller_SORT = function(nums) {
  const counts = [];
  const maxIndex = nums.length - 1;
  if (maxIndex < 0) return counts;
  counts[maxIndex] = 0;
  const sorted = [nums[maxIndex]];

  const getInsertIndex = (num, left, right) => {
    if (num <= sorted[left]) {
      return num === sorted[left]
          ? left > 0 ? getInsertIndex(num, left - 1, right) : left
          : left;
    }
    if (num >= sorted[right]) {
      return num === sorted[right]
        ? getInsertIndex(num, left, right - 1)
        : right + 1;
    }
    const mid = Math.floor((left + right) / 2);
    if (num <= sorted[mid]) return getInsertIndex(num, left, mid - 1);
    return getInsertIndex(num, mid + 1, right);
  };

  for (let i = maxIndex - 1; i >= 0; i -= 1) {
    const num = nums[i];
    const insertIndex = getInsertIndex(num, 0, sorted.length - 1);
    sorted.splice(insertIndex, 0, num);
    counts[i] = insertIndex;
  }

  return counts;
};


/**
 * ====================== Solution 2 - BST ======================
 * https://leetcode.com/problems/count-of-smaller-numbers-after-self/discuss/76580/9ms-short-Java-BST-solution-get-answer-when-building-BST
 */

const Node = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.leftNum = 0;
  this.count = 1;
}

const countSmaller_BST = (nums) => {
  if (!nums.length) return [];
  const head = new Node(nums[nums.length - 1]);

  const counts = [];
  counts[nums.length - 1] = 0;

  let node;
  for (let i = nums.length - 2; i >= 0; i -= 1) {
    const num = nums[i];
    node = head;
    let count = 0;
    while (node) {
      if (num === node.val) {
        count += node.leftNum;
        node.count += 1;
        break;
      } else if (num < node.val) {
        node.leftNum += 1;
        if (!node.left) {
          node.left = new Node(num);
          break;
        } else {
          node = node.left;
        }
      } else {
        count += (node.count + node.leftNum);
        if (!node.right) {
          node.right = new Node(num);
          break;
        } else {
          node = node.right;
        }
      }
    }
    counts[i] = count;
  }
  return counts;
};


/**
 * ====================== Solution 3 - BIT ======================
 * https://leetcode.com/problems/count-of-smaller-numbers-after-self/discuss/76657/3-ways-(Segment-Tree-Binary-Indexed-Tree-Binary-Search-Tree)-clean-python-code
 */

const updateTree = (tree, i) => {
  while (i < tree.length) {
    tree[i] = (tree[i] || 0) + 1;
    i += (i & -i);
  }
};

const sumTree = (tree, i) => {
  let count = 0;
  while (i > 0) {
    count += (tree[i] || 0);
    i -= (i & -i);
  }
  return count;
};

/**
 * raw array: [5, 2, 6, 1]
 * sorted: [1, 2, 5, 6]
 *
 * in raw array from 1 to 5:
 * num = 1, sortedIndex = 0, with empty BIT, return 0;
 * num = 6, sortedIndex = 3, with BIT[1] = 1, BIT[2] = 1, return BIT[3] + BIT[2] = 1;
 * num = 2, sortedIndex = 1, with BIT[1] = 1, BIT[2] = 1, BIT[4] = 1, return BIT[1] = 1;
 * num = 5, sortedIndex = 2, with BIT[1] = 1, BIT[2] = 2, BIT[4] = 2, return BIT[2] = 2;
 * finally return [2, 1, 1, 0]
 */
const countSmaller_BIT = (nums) => {
  const sortedNums = [...new Set(nums)].sort((a, b) => a - b);
  const tmpDict = {};
  for (let i = 0; i < sortedNums.length; i += 1) {
    const num = sortedNums[i];
    tmpDict[num] = i;
  }

  const tree = new Array(Object.keys(tmpDict).length + 1).fill(0);
  let counts = [];
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    const num = nums[i];
    const index = tmpDict[num];
    counts.unshift(sumTree(tree, index));
    updateTree(tree, index + 1);
  }
  return counts;
};


// Test case

console.log(countSmaller_SORT([5, 2, 6, 1])); // [2, 1, 1, 0]
console.log(countSmaller_SORT([5, 0, 2, 6, 1])); // [3, 0, 1, 1, 0]
console.log(countSmaller_SORT([2, 0, 1])); // [2, 0, 0]
console.log(countSmaller_SORT([0, 2, 0, 1])); // [0, 2, 0, 0]
console.log(countSmaller_SORT([0, 0, 1, 0, 1])); // [ 0, 0, 1, 0, 0 ]
