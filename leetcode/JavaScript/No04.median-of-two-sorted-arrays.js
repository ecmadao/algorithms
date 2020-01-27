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


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Solution 1:
 * 并归排序
 */
const findMedianSortedArrays1 = (nums1, nums2) => {
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

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * Solution 2
 */
var findMedianSortedArrays2 = function(nums1, nums2) {
  let i = 0
  let j = 0
  let mid = Math.ceil((nums1.length + nums2.length) / 2)

  while ((i + j + 1) < mid) {
    if (j >= nums2.length || nums1[i] <= nums2[j]) {
      i += 1
    } else if (i >= nums1.length || nums1[i] >= nums2[j]) {
      j += 1
    }
  }

  if ((nums1.length + nums2.length) % 2 === 1) {
    if (i < nums1.length && j < nums2.length) {
      return nums1[i] < nums2[j] ? nums1[i] : nums2[j]
    } else if (i < nums1.length) {
      return nums1[i]
    } else {
      return nums2[j]
    }
  }
  let n1
  let n2
  if (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      n1 = nums1[i]
      n2 = i < nums1.length - 1 ? Math.min(nums1[i + 1], nums2[j]) : nums2[j]
    } else {
      n1 = nums2[j]
      n2 = j < nums2.length - 1 ? Math.min(nums2[j + 1], nums1[i]) : nums1[i]
    }
  } else if (i < nums1.length) {
    n1 = nums1[i]
    n2 = nums1[i + 1]
  } else {
    n1 = nums2[j]
    n2 = nums2[j + 1]
  }
  return (n1 + n2) / 2
}

console.log(
  findMedianSortedArrays([], [1]) // 1
)
console.log(
  findMedianSortedArrays([3], [-2,-1]) // -1
)
console.log(
  findMedianSortedArrays([], [1,2]) // 1.5
)
console.log(
  findMedianSortedArrays([1,3], [2]) // 2
)
console.log(
  findMedianSortedArrays([1,3], [2,4]) // 2.5
)
console.log(
  findMedianSortedArrays([1,2,3,4,5,6,7], [8]) // 4.5
)
console.log(
  findMedianSortedArrays([0,0], [0,0]) // 0
)
console.log(
  findMedianSortedArrays([1,3,4,5,6,7,8], [2]) // 4.5
)
console.log(
  findMedianSortedArrays([1,3,4,5,6,7,8,9], [2]) // 5
)
console.log(
  findMedianSortedArrays([1,3,4,5,7,8,9], [6]) // 5.5
)
console.log(
  findMedianSortedArrays([1,3,5,7,8,9], [6]) // 6
)
