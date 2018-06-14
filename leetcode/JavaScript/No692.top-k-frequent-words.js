/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a non-empty list of words, return the k most frequent elements.
 * Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.
 *
 * Example:
 * Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
 * Output: ["i", "love"]
 * Explanation:
 * "i" and "love" are the two most frequent words.
 * Note that "i" comes before "love" due to a lower alphabetical order.
 *
 * Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
 * Output: ["the", "is", "sunny", "day"]
 * Explanation:
 * "the", "is", "sunny" and "day" are the four most frequent words,
 * with the number of occurrence being 4, 3, 2 and 1 respectively.
 *
 * Note:
 * - You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * - Input words contain only lowercase letters.
 *
 * Follow up:
 * Try to solve it in O(n log k) time and O(n) extra space.
 */


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
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const compare = (n, m) => {
    if (n.count > m.count) return true;
    if (n.count === m.count) return n.word < m.word;
    return false;
  };

  const heap = new Heap(compare);
  const frequency = {};
  const results = [];

  for (const word of words) {
    if (!frequency[word]) {
      frequency[word] = 1;
    } else {
      frequency[word] += 1;
    }
  }

  for (const word of Object.keys(frequency)) {
    heap.enqueue({
      word,
      count: frequency[word]
    });
  }

  while (results.length < k) {
    const val = heap.dequeue();
    results.push(val.word);
  }
  return results;
};

