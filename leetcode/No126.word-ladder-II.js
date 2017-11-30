/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given two words (beginWord and endWord), and a dictionary's word list,
 * find all shortest transformation sequence(s) from beginWord to endWord, such that:
 * 1. Only one letter can be changed at a time
 * 2. Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
 *
 * Example:
 * Given:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * Return
 * [
 *  ["hit","hot","dot","dog","cog"],
 *  ["hit","hot","lot","log","cog"]
 * ]
 *
 * Note:
 * 1. Return an empty list if there is no such transformation sequence.
 * 2. All words have the same length.
 * 3. All words contain only lowercase alphabetic characters.
 * 4. You may assume no duplicates in the word list.
 * 5. You may assume beginWord and endWord are non-empty and are not the same.
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  if (!beginWord || !endWord || !wordList.length) return [];
  const set = new Set(wordList);
  set.delete(beginWord);
  const results = [];
  let resultsTmp = [
    [beginWord]
  ];
  let queue = [beginWord];
  let finish = false;

  const loopLayer = () => {
    const queueSize = queue.length;

    for (let i = 0; i < queue.length; i += 1) {
      set.delete(queue[i]);
    }

    const arr = [];
    const tmp = [];
    for (let z = 0; z < queueSize; z += 1) {
      const word = queue.shift();

      for (let i = 0; i < word.length; i += 1) {
        let shouldBreak = false;
        for (let j = 97; j <= 122; j += 1) {
          const letter = String.fromCharCode(j);
          if (letter === word[i]) continue;
          const w = `${word.slice(0, i)}${letter}${word.slice(i + 1)}`;
          if (set.has(w)) {
            const wordArr = [...resultsTmp[z], w];
            if (w === endWord) {
              results.push(wordArr);
              finish = true;
              shouldBreak = true;
              break;
            }
            arr.push(w);
            tmp.push(wordArr);
          }
        }
        if (shouldBreak) break;
      }
    }
    resultsTmp = tmp;
    queue = arr;
  };

  while (queue.length && !finish) {
    loopLayer();
  }
  return results;
};
