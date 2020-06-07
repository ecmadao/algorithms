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

  const res = [];
  const queue = [];
  queue.push([beginWord]);

  while (queue.length && !res.length) {
    for (const list of queue) set.delete(list[list.length - 1]);

    let len = queue.length;
    while (len > 0) {
      const list = queue.shift();
      const word = list[list.length - 1];

      let done = false;
      for (let i = 0; i < word.length && !done; i += 1) {
        for (let j = 97; j <= 122 && !done; j += 1) {
          const letter = String.fromCharCode(j);
          if (letter === word[i]) continue;

          const newWord = `${word.slice(0, i)}${letter}${word.slice(i + 1)}`;
          if (!set.has(newWord)) continue;

          if (newWord === endWord) {
            list.push(newWord);
            res.push(list);
            done = true;
            break;
          }

          queue.push([
            ...list,
            newWord
          ]);
        }
      }
      len -= 1;
    }
  }

  return res;
};