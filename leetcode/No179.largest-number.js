/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a list of non negative integers, arrange them such that they form the largest number.
 *
 * Example:
 * given [3, 30, 34, 5, 9], the largest formed number is 9534330.
 *
 * Note:
 * The result may be very large, so you need to return a string instead of an integer.
 *
 * 将数组中的数字组合成最大的数字。利用最大堆
 */

class Heap {
  constructor(arr) {
    this.heap = [...arr];
    for (let i = this.heap.length - 1; i >= 0; i -= 1) {
      this.sortWithChild(i + 1);
    }
  }

  more(index1, index2) {
    const num1 = this.heap[index1 - 1] + '';
    const num2 = this.heap[index2 - 1] + '';
    const n1 = Number(num1[0]);
    const n2 = Number(num2[0]);
    if (n1 > n2) {
      return true;
    } else {
      return Number(num1 + num2) > Number(num2 + num1);
    }
  }

  exchange(index1, index2) {
    const tmp = this.heap[index1 - 1];
    this.heap[index1 - 1] = this.heap[index2 - 1];
    this.heap[index2 - 1] = tmp;
  }

  enqueue(child) {
    this.heap.push(child);
    const childIndex = this.heap.length;
    this.sortWithFather(childIndex);
  }

  sortWithFather(childIndex) {
    const fatherIndex = Math.floor(childIndex / 2);
    if (fatherIndex <= 0) return;
    if (this.more(childIndex, fatherIndex)) {
      this.exchange(childIndex, fatherIndex);
      this.sortWithFather(fatherIndex);
    }
  }

  sortWithChild(fatherIndex) {
    if (fatherIndex <= 0) return;
    const childIndex1 = fatherIndex * 2;
    if (childIndex1 > this.heap.length) return;
    if (this.more(childIndex1, fatherIndex)) {
      this.exchange(childIndex1, fatherIndex);
    }

    const childIndex2 = fatherIndex * 2 + 1;
    if (childIndex2 > this.heap.length) return;
    if (this.more(childIndex2, fatherIndex)) {
      this.exchange(childIndex2, fatherIndex);
    }

    this.sortWithChild(childIndex1);
    this.sortWithChild(childIndex2);
  }

  get head() {
    this.exchange(1, this.heap.length);
    const result = this.heap.pop();
    this.sortWithChild(1);
    return result;
  }

  get length() {
    return this.heap.length;
  }
}


/**
* @param {number[]} nums
* @return {string}
*/
var largestNumber = function(nums) {
  const heap = new Heap(nums);
  const result = [];
  while (heap.length) {
    const num = heap.head;
    if (!result.length && num === 0) continue;
    result.push(num);
  }
  return result.length ? result.join('') : '0';
};
