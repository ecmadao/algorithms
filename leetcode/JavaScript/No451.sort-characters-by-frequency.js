/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a string, sort it in decreasing order based on the frequency of characters.
 *
 * Example:
 * Input:
 * "tree"
 * Output:
 * "eert"
 * Explanation:
 * 'e' appears twice while 'r' and 't' both appear once.
 * So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
 *
 * Input:
 * "cccaaa"
 * Output:
 * "cccaaa"
 * Explanation:
 * Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
 * Note that "cacaca" is incorrect, as the same characters must be together.
 *
 * Input:
 * "Aabb"
 * Output:
 * "bbAa"
 * Explanation:
 * "bbaA" is also a valid answer, but "Aabb" is incorrect.
 * Note that 'A' and 'a' are treated as two different characters.
 *
 * 几乎和 No.347 Top K Frequent Elements 一模一样
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
* @param {string} s
* @return {string}
*/
var frequencySort = function(s) {
  const tmp = new Map();
  for (let i = 0; i < s.length; i += 1) {
    const str = s[i];
    const fre = tmp.get(str) !== undefined
      ? tmp.get(str) + 1
      : 1;
    tmp.set(str, fre);
  }
  const heap = new Heap(tmp.keys(), tmp);
  const results = [];
  while (heap.heap.length) {
    const str = heap.dequeue();
    results.push(str.repeat(tmp.get(str)));
  }
  return results.join('');
};