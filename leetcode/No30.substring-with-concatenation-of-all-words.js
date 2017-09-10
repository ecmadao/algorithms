/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * You are given a string, s, and a list of words, words,
 * that are all of the same length.
 * Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.
 *
 * Example:
 * s: "barfoothefoobarman"
 * words: ["foo", "bar"]
 * should return the indices: [0,9].
 *
 * Node:
 * order does not matter
 *
 * 给出一个字符串和数组，求字符串中所有完全匹配数组元素组合的子字符串，返回子字符串所在位置的索引
 * 例如：
 * s -> "wordgoodgoodgoodbestword"
 * words -> ["word","good","best","good"]
 * result -> [8]
 *
 * s -> "abababab",
 * words -> ["a","b","a"]
 * result -> [0, 2, 4]
 *
 * 注意几个问题：
 * 1. words 中元素可以重复
 * 2. words 中各元素长度一样
 * 3. 所以如果 words -> ["a","b","a"]，则子字符串中也要有两个 a 一个 b
 */

/*
 * 检验子字符串是否完全匹配 words
 * 1. words 中每个元素都在子字符串中
 * 2. words 中每个元素在子字符串中出现的次数 = 其在 words 中出现的次数
 */
var mathString = function(words, totalLength) {
  var wordLength = words[0].length;
  // 生成 word: wordCount 的对象，
  // 并利用 Set 去除 words 中重复的元素，降低遍历次数
  var wordCont = words.reduce(function(pre, next) {
    if (!pre[next]) {
      pre[next] = 1;
    } else {
      pre[next] += 1;
    }
    return pre;
  }, {});
  var array = [...new Set(words)];

  return function(string) {
    var result = true;

    // 遍历各个 word（已去重），算出其在子字符串中出现的次数
    // 如果两者相等则该 word 匹配
    // 否则应该及时截断遍历返回 false
    for (var i = 0; i < array.length; i += 1) {
      var word = array[i];
      var count = 0;
      var targetCount = wordCont[word];

      var j = 0;
      while(j < totalLength) {
        if (string.slice(j, j + wordLength) === word) {
          count += 1;
        }
        j += wordLength;
      }
      if (count !== targetCount) {
        result = false;
        break;
      }
      if (!result) break;
    }
    return result;
  };
};

/**
* @param {string} s
* @param {string[]} words
* @return {number[]}
*/
var findSubstring = function(s, words) {
  var result = [];
  if (!words.length) return result;
  // words 中各元素长度一样，则可以求出子字符串长度 length
  // 然后 head = 0, tail = length，分别依次 +1，遍历所有符合长度的子字符串
  var length = words[0].length * words.length;
  var match = mathString(words, length);
  var head = 0;
  var tail = length;
  while(tail <= s.length) {
    var string = s.slice(head, tail);
    var matchResult = match(string);
    if (matchResult) {
      result.push(head);
    }
    head += 1;
    tail += 1;
  }
  return result;
};