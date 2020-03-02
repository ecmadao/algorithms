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
 *
 * 给一非空的单词列表，返回前 k 个出现次数最多的单词。
 * 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序
 */

/*
 * ========================= Solution 1 =========================
 * 最大堆
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
var topKFrequent_1 = function(words, k) {
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

/*
 * ========================= Solution 2 =========================
 * 快排分区法
 */

const partition = (list, i, j) => {
  const target = i
  const base = list[target]

  while (i < j) {
    while (i < j && list[j][1] <= base[1]) j -= 1
    while (i < j && list[i][1] >= base[1]) i += 1

    if (i >= j) break
    const tmp = list[i]
    list[i] = list[j]
    list[j] = tmp
  }

  list[target] = list[i]
  list[i] = base
  return i
}

/**
* @param {string[]} words
* @param {number} k
* @return {string[]}
*/
var topKFrequent_2 = function(words, k) {
  const dict = words.reduce((m, word) => {
    m[word] = (m[word] || 0) + 1
    return m
  }, {})
  const list = Object.entries(dict)
  const map = list.reduce((m, item) => {
    if (!m[item[1]]) m[item[1]] = []
    m[item[1]].push(item[0])
    return m
  }, {})

  let i = 0
  let j = list.length - 1
  while (i < j) {
    const mid = partition(list, i, j)
    if (mid === k) break
    if (mid < k) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }
  const data = list.slice(0, k).sort((i1, i2) => {
    if (i1[1] === i2[1]) {
      if (i1[0] > i2[0]) return 1
      if (i1[0] < i2[0]) return -1
      return 0
    }
    return i2[1] - i1[1]
  })

  i = data.length - 1
  const last = data[i]
  while (i - 1 >= 0 && data[i - 1][1] === last[1]) i -= 1

  const result = data.slice(0, i).map(item => item[0])
  result.push(
    ...map[last[1]].sort().slice(0, data.length - i)
  )
  return result
}
