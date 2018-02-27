/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two words (beginWord and endWord), and a dictionary's word list,
 * find the length of shortest transformation sequence from beginWord to endWord, such that:
 * 1. Only one letter can be changed at a time.
 * 2. Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
 *
 * Example:
 * Given:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
 * return its length 5.
 *
 * Note:
 * 1. Return 0 if there is no such transformation sequence.
 * 2. All words have the same length.
 * 3. All words contain only lowercase alphabetic characters.
 * 4. You may assume no duplicates in the word list.
 * 5. You may assume beginWord and endWord are non-empty and are not the same.
 *
 * 从 beginWord 到 endWord，每次只能转换一个字母，转换后的单词必须存在于 wordList 中。求最小转换次数
 */

/**
 * 思路：
 * 将该题看做是树的结构，每个节点的值是一个单词，其各个子节点是该单词各位置上改变一个字母后的新单词
 * 则从 beginWord 到 endWord 的搜索就是 DSF 或者 BSF
 * 要求寻找最短路径，则需要广度优先搜索
 *
 * Note:
 * 1. 对于每个节点上的单词，要针对其各个位置上的字母进行替换
 * 2. 替换的时候，直接将字母依次换为 a - z，比遍历 wordList 速度更快
 * 3. js 遍历英文字母可通过 String.fromCharCode
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (!beginWord || !endWord || !wordList.length) return 0;
  let set = new Set(wordList);
  let minLen = 2;
  let queue = [beginWord];

  // 作为广度优先遍历，while 的第一层遍历，相当于树的每一层
  while (queue.length) {
    const queueSize = queue.length;
    const arr = [];

    // 遍历了该层的所有节点
    for (let z = 0; z < queueSize; z += 1) {
      const word = queue.pop();
      for (let i = 0; i < word.length; i += 1) {
        // 从 a 到 z 遍历
        for (let j = 97; j <= 122; j += 1) {
          const letter = String.fromCharCode(j);
          const w = `${word.slice(0, i)}${letter}${word.slice(i + 1)}`;
          if (set.has(w)) {
            if (w === endWord) return minLen;
            arr.push(w);
            set.delete(w);
          }
        }
      }
    }
    queue = arr;
    minLen += 1;
  }
  return 0;
};
