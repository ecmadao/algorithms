/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Find the kth largest element in an unsorted array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 *
 * Example:
 * Given [3,2,1,5,6,4] and k = 2, return 5.
 *
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ array's length.
 *
 * 求乱序数组中第 K 大的元素。最小堆问题
 */

/* ================= 最小堆 ================= */
const buildFromTail = (array) => {
  let binaryHeaps = [...array];
  for (let i = binaryHeaps.length - 1; i >= 0; i -= 1) {
    // 每一个元素作为父元素，和其子元素进行比较
    binaryHeaps = sortWithChild(binaryHeaps, i + 1);
  }
  return binaryHeaps;
};

const less = (num1, num2) => num1 < num2;
const exchange = (arr, i1, i2) => {
  const tmp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = tmp;
  return arr;
};

const sortWithChild = (heaps, fatherIndex) => {
  const childIndexLeft = fatherIndex * 2;
  const childIndexRight = childIndexLeft + 1;

  if (childIndexLeft > heaps.length) return heaps;
  // 如果子元素的大小 < 父元素，则交换位置
  if (less(heaps[childIndexLeft - 1], heaps[fatherIndex - 1])) {
    heaps = exchange(heaps, childIndexLeft - 1, fatherIndex - 1);
  }

  if (childIndexRight > heaps.length) return heaps;
  if (less(heaps[childIndexRight - 1], heaps[fatherIndex - 1])) {
    heaps = exchange(heaps, childIndexRight - 1, fatherIndex - 1);
  }

  // 将两个子元素作为父元素，继续和它们的子元素进行排序
  heaps = sortWithChild(heaps, childIndexLeft);
  heaps = sortWithChild(heaps, childIndexRight);
  return heaps;
};

/**
* @param {number[]} nums
* @param {number} k
* @return {number}
*/
var findKthLargest = function(nums, k) {
  const kItems = nums.slice(0, k);
  const heaps = buildFromTail(kItems);

  for (let i = k; i < nums.length; i += 1) {
    const val = nums[i];
    // 如果元素大于堆顶，则交换值，并重新排列堆
    if (val > heaps[0]) {
      heaps[0] = val;
      sortWithChild(heaps, 1);
    }
  }
  return heaps[0];
};
