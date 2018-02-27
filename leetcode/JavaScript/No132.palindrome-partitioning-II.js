/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return the minimum cuts needed for a palindrome partitioning of s.
 *
 * Example:
 * Given s = "aab",
 * Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.
 *
 * 将字符串剪切成回文的组合，求最小剪切次数
 */

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  const tmp = {};
  const isPal = [];

  for (let i = s.length - 1; i >= 0; i -= 1) {
    tmp[i] = s.length - i - 1;
    isPal[i] = [];
    for (let j = i; j < s.length; j += 1) {
      if((i + 1 > j - 1 || isPal[i + 1][j - 1]) && s[i] === s[j]) {
        isPal[i][j] = true;
        const m = j + 1 >= s.length ? 0 : 1 + tmp[j + 1];
        tmp[i] = Math.min(tmp[i], m);
      }
    }
  }
  return tmp[0];
};

/**
 * 拆分开来：
 * 先进行一次遍历，使用 DP，利用 isPal 来储存回文
 * 之后再进行遍历，需要注意对 j + 1 >= s.length ? 0 : 1 + tmp[j + 1] 的判断
 */
/**
 * @param {string} s
 * @return {number}
 */
var minCut_2 = function(s) {
  const tmp = {};
  const isPal = [];

  for(let i = s.length - 1; i >= 0; i -= 1) {
    isPal[i] = [];
    for(let j = i; j < s.length; j += 1) {
      if((i + 1 > j - 1 || isPal[i + 1][j - 1]) && s[i] == s[j]) {
        isPal[i][j] = true;
      }
    }
  }

  for (let i = s.length - 1; i >= 0; i -= 1) {
    tmp[i] = s.length - i - 1;
    for (let j = i; j < s.length; j += 1) {
      if(isPal[i][j]) {
        const m = j + 1 >= s.length ? 0 : 1 + tmp[j + 1];
        tmp[i] = Math.min(tmp[i], m);
      }
    }
  }
  return tmp[0];
};
