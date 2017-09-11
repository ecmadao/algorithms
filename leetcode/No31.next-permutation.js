/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 * If such arrangement is not possible,
 * it must rearrange it as the lowest possible order (ie, sorted in ascending order).
 * The replacement must be in-place, do not allocate extra memory.
 *
 * Example:
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 *
 * 求一个排列的下一个全排列（按照字典序法排列）。如果已经是最后一个全排列，则从头开始
 * 注意，不能创建新数组，必须在原有数组上修改。函数不要有返回值。
 */

/*
 * 思路：
 * 想要做对这货，必须好好的理解什么是全排列，什么是字典序法排列
 *
 * 全排列：
 * 数组内元素的所有可能排列，比如一个数组 [1, 2, 3]，其全排列为
 * [1, 2, 3], [1, 3, 2], [3, 2, 1], [3, 1, 2], [2, 1, 3], [2, 3, 1]
 * 字典序法排列：
 * 对于由数字组成的排列来说，就是按照从小到大的顺序排列
 * [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]
 * 可以看到，每个位置上的数字都是从小到大依次增大
 *
 * 回过头来看看题目，它要求写出给出排列的按照字典顺序的下一个全排列，且如果已经是最后一个排列，则从头开始
 * 可以通过字典顺序全排列的定义推理出，如果一个排列是全排列的最后一个排列，那么它里面的元素一定是按照从大到小的顺序排列的，
 * 比如上面的 [3, 2, 1]
 * 因此，我们可以从数组的末位开始向前遍历：
 * 1. 如果每一位都是已遍历元素中最大的，则一定是全排列的最后一位，那么原地反转数组即可；
 * 2. 如果当前位的数值小于不是最大的，比如 [1, 2, 3, 5, 4]，遍历到 3 时，小于最大值 5，
 * 我们可以知道，3 前面的排列是稳定的，只要从已遍历过的数中（5，4）选出最接近 3 的数，两者交换位置，
 * 然后再对数组中当前索引之后的元素进行一个从小到大的快排，就能获取到下一个全排列
 * （因为 3 之前的数全部按照从大到小排列，所以已经是最大排列，此时只能改变 3 位置上的数值；而要求是下一个全排列，则只能选出最接近 3 的数）
 */

// 一个原地快排
var quickSort = function(array, start, end) {
  if (start >= end) return;

  var base = array[start];
  var i = start;
  var j = end;

  while (true) {
    while(base - array[j] <= 0) {
      if (j - 1 < start) break;
      j -= 1;
    }

    while(base - array[i] >= 0) {
      if (i + 1 > end) break;
      i += 1;
    }

    if (j <= i) break;
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  array[start] = array[j];
  array[j] = base;
  quickSort(array, start, j - 1);
  quickSort(array, j + 1, end);
};

/**
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/
var nextPermutation = function(nums) {
  if (nums.length > 1) {
    var end = nums.length - 1;
    var max = nums[end];
    var finished = false;
    while(end >= 0) {
      var num = nums[end];
      if (num >= max) {
        max = num;
        end -= 1;
        continue;
      } else {
        // 从已经遍历过的数中选出最接近当前数的值，两者交换位置
        // 然后对当前索引之后的数组进行快排
        var i = end + 1;
        var minOffset = nums[i] - num;
        i += 1;
        while(i < nums.length) {
          if (nums[i] <= num) break;
          if (nums[i] > num) {
            var offset = nums[i] - num;
            minOffset = offset < minOffset ? offset : minOffset;
          }
          i += 1;
        }
        var temp = nums[end];
        nums[end] = nums[i - 1];
        nums[i - 1] = temp;
        quickSort(nums, end + 1, nums.length - 1);
        finished = true;
        break;
      }
    }

    if (!finished) {
      nums.reverse();
    }
  }
};