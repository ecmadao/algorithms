/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.
 *
 * Example:
 * Given:
 * s1 = "aabcc",
 * s2 = "dbbca",
 * When s3 = "aadbbcbcac", return true.
 * When s3 = "aadbbbaccc", return false.
 *
 * 要求 s3 由 s1 和 s2 交叉构成，不一定必须 s1-s2-s1-s2 这样交叉，
 * 但 s1, s2 中的各个字母必须从头到尾按照顺序取出来组成 s3
 */

/**
 * 思路：
 * DP
 * 使用一个二维矩阵 M[[]] 储存数据，
 * 矩阵索引 i,j 指向的 M[i][j] 代表由长度为 i 的 s1 和长度为 j 的 s2 能否组成长度为 i + j 的 s3
 * /

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  const tmp = [];

  for (let i = 0; i < s1.length + 1; i += 1) {
    tmp[i] = [];
  
    for (let j = 0; j < s2.length + 1; j += 1) {
      if (i === 0 && j === 0) {
        // 当 s1, s2 都是空字符串时，一定可以组成长度为 0 的 s3
        tmp[i][j] = true;
      } else if (i === 0) {
        // 当 s1 为空时，能否组成 s3 由 s2 决定
        // 若能组成，则必有 tmp[i][j - 1] 为 true，且 s2, s3 的当前字母相等
        tmp[i][j] = tmp[i][j - 1] && (s3[i + j - 1] === s2[j - 1]);
      } else if (j === 0) {
        // 当 s2 为空时，能否组成 s3 由 s1 决定
        // 若能组成，则必有 tmp[i - 1][j] 为 true，且 s1, s3 的当前字母相等
        tmp[i][j] = tmp[i - 1][j] && (s3[i + j - 1] === s1[i - 1]);
      } else {
        tmp[i][j] = (tmp[i][j - 1] && (s3[i + j - 1] === s2[j - 1])) || (tmp[i - 1][j] && (s3[i + j - 1] === s1[i - 1]));
      }
    }
  }
  return tmp[s1.length][s2.length];
};
