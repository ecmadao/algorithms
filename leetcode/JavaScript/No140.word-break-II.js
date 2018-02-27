/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
 * add spaces in s to construct a sentence where each word is a valid dictionary word.
 * You may assume the dictionary does not contain duplicate words.
 * Return all such possible sentences.
 *
 * Example:
 * Given:
 * s = "catsanddog",
 * dict = ["cat", "cats", "and", "sand", "dog"].
 * A solution is ["cats and dog", "cat sand dog"].
 *
 * 和上一题相比，要求写出所有可能的截断，并通过空格拼接起来。
 * 思路：
 * 依旧是 DP，但需要一个对象，将给定 index 之后单词所有的可能截断储存起来
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  const set = new Set(wordDict);
  const tmp = {};

  const check = (index) => {
    if (tmp[index] !== undefined) return tmp[index];
    if (index >= s.length) {
      tmp[index] = [];
      return tmp[index];
    }
    const localResults = [];
    for (let i = index; i < s.length; i += 1) {
      const str = s.slice(index, i + 1);
      if (set.has(str)) {
        const r = check(i + 1);
        if (!r) continue;
        if (r.length) {
          for (let j = 0; j < r.length; j += 1) {
            const arr = r[j];
            localResults.push([str, ...arr]);
          }
        } else {
          localResults.push([str]);
        }
      }
    }

    tmp[index] = localResults.length ? localResults : false;
    return tmp[index];
  };
  const results = check(0);
  const arr = [];
  for (let i = 0; i < results.length; i += 1) {
    arr.push(results[i].join(' '));
  }
  return arr;
};
