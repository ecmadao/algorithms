/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 *
 * Example1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 *
 * Example2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
 *
 * 已知两个排好序的数组，求两数组顺序合并之后的中位数。要求时间复杂度为 O(log (m+n))
 */

/*
 * 思路：
 * 将两个数组转换为链表
 */

var insert = function(node, val, parent) {
  if (!node) {
    node = new Node(val);
    return node;
  }
  if (val >= node.val) {
    if (node.next) {
      insert(node.next, val, node);
    } else {
      node.next = new Node(val);
    }
  } else {
    if (parent) {
      var newNode = new Node(val);
      parent.next = newNode;
      newNode.next = node;
    } else {
      parent = new Node(val);
      parent.next = node;
      return parent;
    }
  }
};

var Node = function(val) {
  this.val = val;
  this.next = null;
};

/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number}
*/
var findMedianSortedArrays = function(nums1, nums2) {
  var node = null;
  var nextNode = null;
  for (let i = 0; i < nums1.length; i += 1) {
    var num = nums1[i];
    var newNode = new Node(num);
    if (!node) {
      node = newNode;
      nextNode = node;
    } else {
      nextNode.next = newNode;
      nextNode = newNode;
    }
  }

  for (let i = 0; i < nums2.length; i += 1) {
    var insertResult = insert(node, nums2[i]);
    node = insertResult || node;
  }

  var total = nums1.length + nums2.length;
  var index = 0;
  var count = (total % 2) === 0 ? 2 : 1;
  var mid = Math.floor(total / 2);
  var sum = 0;

  while(index <= mid) {
    if (index === mid || (count === 2 && index === mid - 1)) {
      sum += node.val;
    }
    index += 1;
    node = node.next;
  }

  return sum / count;
};

findMedianSortedArrays([1, 2], [3, 4]);
findMedianSortedArrays([], [3, 4]);

/**
 * 思路二：
 * 并归排序
 */

const findMedianSortedArrays2 = (nums1, nums2) => {
  let i1 = 0;
  let i2 = 0;
  const list = [];

  while (i1 < nums1.length && i2 < nums2.length) {
    const num1 = nums1[i1];
    const num2 = nums2[i2];

    if (num1 < num2) {
      list.push(num1);
      i1 += 1;
    } else {
      list.push(num2);
      i2 += 1;
    }
  }

  if (i1 < nums1.length) {
    list.push(...nums1.slice(i1));
  } else if (i2 < nums2.length) {
    list.push(...nums2.slice(i1));
  }
  const mid = Math.floor(list.length / 2);
  return list.length % 2 === 0 ? (list[mid] + list[mid - 1]) / 2 : list[mid];
};
