/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a sorted array, two integers k and x,
 * find the k closest elements to x in the array. The result should also be sorted in ascending order.
 * If there is a tie, the smaller elements are always preferred.
 *
 * Example:
 * Input: [1,2,3,4,5], k=4, x=3
 * Output: [1,2,3,4]
 *
 * Input: [1,2,3,4,5], k=4, x=-1
 * Output: [1,2,3,4]
 *
 * Note:
 * The value k is positive and will always be smaller than the length of the sorted array.
 * Length of the given array is positive and will not exceed 104
 * Absolute value of elements in the array and x will not exceed 104
 *
 * 给一个从小到大顺序排列的数组，求出数组中最接近 x 的 k 个元素，要求返回数组，且内部元素也是从小到大顺序排列
 */

/**
 * 思路：
 * 最开始尝试使用了 kd tree，绝对是这类问题的王者答案，但无奈这个题目的数据集并不复杂，只有一维，没有必要使用 kd tree，
 * 使用了也会超时
 * 因此，一个模拟 kd tree 思路的简单答案如下，便于理解，可以通过，但效率不高
 * 从头遍历数组，记录当前数字和目标值之差
 * 当结果的长度小于目标长度时，可以尽情的将当前数字塞入数组，但同时需要记录距离最大的值
 * 当长度超度目标个数时，则如果新的点和目标点距离小于最大距离，则将其塞入结果中，并删除结果中距离最大的值，
 * 然后重新计算出距离最大的值
 */
var Queue = function() {
  this.arr = [];
  this.dis = [];
  this.maxDis = null;
  this.maxDisIndex = null;
  this.length = 0;

  this.enqueue = function(val, dis) {
    this.length += 1;
    this.arr.push(val);
    this.dis.push(dis);
    if (!this.maxDis || dis > this.maxDis) {
      this.maxDis = dis;
    }
    this.maxDisIndex = this.dis.indexOf(this.maxDis);
  };

  this.replace = function(val, dis) {
    this.arr.push(val);
    this.dis.push(dis);

    this.arr.splice(this.maxDisIndex, 1);
    this.dis.splice(this.maxDisIndex, 1);

    this.maxDisIndex = 0;
    this.maxDis = this.dis[0];
    for (var i = 0; i < this.dis.length; i += 1) {
      var dis = this.dis[i];
      if (dis > this.maxDis) {
        this.maxDis = dis;
        this.maxDisIndex = i;
      }
    }
  };
};

/**
* @param {number[]} arr
* @param {number} k
* @param {number} x
* @return {number[]}
*/
var findClosestElements_normal = function(arr, k, x) {
  var queue = new Queue();
  for (var i = 0; i < arr.length; i += 1) {
    var num = arr[i];
    var dis = Math.abs(num - x);
    if (queue.length < k) {
      queue.enqueue(num, dis);
    } else if (dis < queue.maxDis) {
      queue.replace(num, dis);
    }
  }
  return queue.arr;
};

/* ======================================================= */
/**
 * 一个更简单的思路其实就是，先通过类似二叉搜索树的方法，找到目标点可以被插入的 index
 * 然后从这个 index 开始向两端遍历，保留距离小的位置
 */
var binarySearch = function(arr, x) {
  if (arr[0] > x) return -1;
  if (arr[arr.length - 1] < x) return arr.length;

  var index = 0;
  while(index < arr.length) {
    if (arr[index] === x) return index;
    if (arr[index] < x) {
      if (index + 1 < arr.length && arr[index + 1] >= x) {
        return index + 1;
      } else {
        index += 1;
      }
    }
  }
  return index;
};

/**
* @param {number[]} arr
* @param {number} k
* @param {number} x
* @return {number[]}
*/
var findClosestElements = function(arr, k, x) {
  var targetIndex = binarySearch(arr, x);

  var start = targetIndex;
  var end = targetIndex;
  while(end - start < k) {
    if (start <= 0) return arr.slice(0, k);
    if (end >= arr.length) return arr.slice(arr.length - k);
    if (x - arr[start - 1] <= arr[end] - x) {
      start -= 1;
    } else {
      end += 1;
    }
  }
  return arr.slice(start, end);
};