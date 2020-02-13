/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Median is the middle value in an ordered integer list.
 * If the size of the list is even, there is no middle value.
 * So the median is the mean of the two middle value.
 *
 * For example,
 * [2,3,4] , the median is 3
 * [2,3], the median is (2 + 3) / 2 = 2.5
 *
 * Design a data structure that supports the following two operations:
 * - void addNum(int num) - Add a integer number from the data stream to the data structure.
 * - double findMedian() - Return the median of all elements so far.
 *
 * Example:
 * addNum(1)
 * addNum(2)
 * findMedian() -> 1.5
 * addNum(3)
 * findMedian() -> 2
 *
 * 中位数是有序列表（递增或递减排序）中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。
 * 例如，
 * [2,3,4] 的中位数是 3
 * [2,3] 的中位数是 (2 + 3) / 2 = 2.5
 *
 * 设计一个支持以下两种操作的数据结构：
 * 1. void addNum(int num) - 从数据流中添加一个整数到数据结构中。
 * 2. double findMedian() - 返回目前所有元素的中位数
 */

/*
 * ================================================================= Solution 1 =================================================================
 * 最大堆 + 最小堆
 * 用于存储输入数字中较小一半的最大堆
 * 用于存储输入数字的较大一半的最小堆
 * 则取两个堆的堆顶元素，就是整个有序数组的中位数了
 */

const more = (a, b) => a - b > 0;
const less = (a, b) => a - b < 0;
// 数组中的两个元素交换位置
const exchange = (array, indexA, indexB) => {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

class Heap {
  constructor(compare) {
    this.compare = compare;
    this.heap = [];
  }

  get count() {
    return this.heap.length;
  }

  get top() {
    return this.heap[0];
  }

  check(cI, fI) {
    return this.compare(this.heap[fI], this.heap[cI]);
  }

  enqueue(val) {
    this.heap.push(val);
    this.sortWithFather(this.heap.length);
  }

  sortWithFather(cIndex) {
    const fIndex = Math.floor(cIndex / 2);
    if (fIndex <= 0) return;
    if (!this.check(cIndex - 1, fIndex - 1)) {
      exchange(this.heap, cIndex - 1, fIndex - 1);
      this.sortWithFather(fIndex);
    }
  }

  sortWithChild(fIndex) {
    const cIndex1 = fIndex * 2;
    const cIndex2 = cIndex1 + 1;

    if (cIndex1 > this.heap.length) return;
    if (!this.check(cIndex1 - 1, fIndex - 1)) exchange(this.heap, cIndex1 - 1, fIndex - 1);

    if (cIndex2 > this.heap.length) return;
    if (!this.check(cIndex2 - 1, fIndex - 1)) exchange(this.heap, cIndex2 - 1, fIndex - 1);

    this.sortWithChild(cIndex1);
    this.sortWithChild(cIndex2);
  }

  dequeue() {
    exchange(this.heap, 0, this.heap.length - 1);
    const result = this.heap.pop();
    this.sortWithChild(1);
    return result;
  }
}


/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.count = 0;
  this.minHeap = new Heap(less);
  this.maxHeap = new Heap(more);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if (!this.maxHeap.count) {
    this.maxHeap.enqueue(num);
  } else {
    const max = this.maxHeap.top;
    if (!this.minHeap.count) {
      if (max <= num) {
        this.minHeap.enqueue(num);
      } else {
        this.maxHeap.dequeue();
        this.maxHeap.enqueue(num);
        this.minHeap.enqueue(max);
      }
    } else {
      const min = this.minHeap.top;
      if (max >= num) {
        if (this.maxHeap.count <= this.minHeap.count) {
          this.maxHeap.enqueue(num);
        } else {
          this.maxHeap.dequeue();
          this.maxHeap.enqueue(num);
          this.minHeap.enqueue(max);
        }
      } else if (min <= num) {
        if (this.minHeap.count <= this.maxHeap.count) {
          this.minHeap.enqueue(num);
        } else {
          this.minHeap.dequeue();
          this.minHeap.enqueue(num);
          this.maxHeap.enqueue(min);
        }
      } else {
        if (this.minHeap.count <= this.maxHeap.count) {
          this.minHeap.enqueue(num);
        } else {
          this.maxHeap.enqueue(num);
        }
      }
    }
  }
  this.count += 1;
};

/**
 * @return {number}
 * [1, 2, 3]
 * [1, 2, 3, 4, 5, 6]
 */
MedianFinder.prototype.findMedian = function() {
  if (this.count % 2 === 0) {
    const min = this.minHeap.top;
    const max = this.maxHeap.top;
    return (min + max) / 2;
  } else {
    return this.minHeap.count > this.maxHeap.count
      ? this.minHeap.top
      : this.maxHeap.top;
  }
};


// Test case

// Test heap
const heap = new Heap(less);
heap.enqueue(-1);
console.log(heap.heap);
heap.enqueue(-2);
console.log(heap.heap);

// Test algorithms
let obj;

obj = new MedianFinder();
obj.addNum(-1);
console.log(obj.findMedian());
obj.addNum(-2);
console.log(obj.findMedian());
obj.addNum(-3);
console.log(obj.findMedian());
obj.addNum(-4);
console.log(obj.findMedian());
obj.addNum(-5);
console.log(obj.findMedian());

obj = new MedianFinder();
obj.addNum(0);
obj.addNum(9);
obj.addNum(3);
obj.addNum(1);
obj.addNum(5);
obj.addNum(5);
console.log(obj.findMedian());

obj = new MedianFinder();
obj.addNum(1);
obj.addNum(2);
console.log(obj.findMedian());
obj.addNum(3);
console.log(obj.findMedian());

obj = new MedianFinder();
obj.addNum(1);
console.log(obj.findMedian());
obj.addNum(2);
console.log(obj.findMedian());
obj.addNum(3);
console.log(obj.findMedian());
obj.addNum(4);
console.log(obj.findMedian());
obj.addNum(5);
console.log(obj.findMedian());
obj.addNum(6);
console.log(obj.findMedian());
obj.addNum(7);
console.log(obj.findMedian());
obj.addNum(8);
console.log(obj.findMedian());
obj.addNum(9);
console.log(obj.findMedian());
obj.addNum(10);
console.log(obj.findMedian());

/*
 * ================================================================= Solution 2 =================================================================
 * 二分搜索查找插入位
 */

const searchInsert = (nums, val) => {
  if (!nums.length) return 0
  if (nums[0] >= val) return 0
  if (nums[nums.length - 1] <= val) return nums.length

  let i = 0
  let j = nums.length - 1

  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    const num = nums[mid]
    if (num === val) return mid
    if (num < val) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }
  return i
}

/**
* initialize your data structure here.
*/
var MedianFinder = function() {
  this.nums = []
}

/**
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
  const index = searchInsert(this.nums, num)
  this.nums.splice(index, 0, num)
}

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  if (this.nums.length % 2 === 0) {
    return (this.nums[this.nums.length / 2] + this.nums[this.nums.length / 2 - 1]) / 2
  } else {
    return this.nums[(this.nums.length - 1) / 2]
  }
}

/**
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/