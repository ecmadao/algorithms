/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a non-empty array of integers, return the k most frequent elements.
 *
 * Example:
 * Given [1,1,1,2,2,3] and k = 2, return [1,2].
 *
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 *
 * 考察最大堆
 */

const exchange = (arr, index1, index2) => {
  const tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
};

class Heap {
  constructor(arr, frequentMap) {
    this.frequentMap = frequentMap;
    this.heap = [...arr];
    for (let i = this.heap.length - 1; i >= 0; i -= 1) {
      // 每一个元素作为父元素，和其子元素进行比较
      this.sortWithChild(i + 1);
    }
  }

  more(fatherPos, childPos) {
    return this.frequentMap.get(this.heap[fatherPos - 1]) < this.frequentMap.get(this.heap[childPos - 1]);
  }

  sortWithChild(pos) {
    const childPos1 = pos * 2;
    const childPos2 = pos * 2 + 1;

    if (childPos1 > this.heap.length) return;
    if (this.more(pos, childPos1)) {
      exchange(this.heap, pos - 1, childPos1 - 1);
    }

    if (childPos2 > this.heap.length) return;
    if (this.more(pos, childPos2)) {
      exchange(this.heap, pos - 1, childPos2 - 1);
    }
    this.sortWithChild(childPos1);
    this.sortWithChild(childPos2);
  }

  dequeue() {
    exchange(this.heap, 0, this.heap.length - 1);
    const result = this.heap.pop();
    this.sortWithChild(1);
    return result;
  }
}

/**
* @param {number[]} nums
* @param {number} k
* @return {number[]}
*/
var topKFrequent = function(nums, k) {
  const frequentMap = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    const frequent = frequentMap.get(num) !== undefined
      ? frequentMap.get(num) + 1
      : 1;
    frequentMap.set(num, frequent);
  }
  const keys = frequentMap.keys();
  const heap = new Heap(keys, frequentMap);
  const result = [];
  for (let i = 1; i <= k; i += 1) {
    result.push(heap.dequeue())
  }
  return result;
};

// Test Case
// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
// topKFrequent([5,-3,9,1,7,7,9,10,2,2,10,10,3,-1,3,7,-9,-1,3,3], 3) => [3, 7, 10]