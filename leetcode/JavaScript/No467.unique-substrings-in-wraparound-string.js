/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Consider the string s to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz",
 * so s will look like this: "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".
 *
 * Now we have another string p.
 * Your job is to find out how many unique non-empty substrings of p are present in s.
 * In particular, your input is the string p and you need to output the number of different non-empty substrings of p in the string s.
 *
 * Example:
 * Input: "a"
 * Output: 1
 * Explanation: Only the substring "a" of string "a" is in the string s.
 *
 * Input: "cac"
 * Output: 2
 * Explanation: There are two substrings "a", "c" of string "cac" in the string s.
 *
 * Input: "zab"
 * Output: 6
 * Explanation: There are six substrings "z", "a", "b", "za", "ab", "zab" of string "zab" in the string s.
 *
 * Note:
 * p consists of only lowercase English letters and the size of p might be over 10000.
 *
 * 已知一个由 26 个英文字母（小写的 a 到小写的 z）组成的无限长字符串，现给出一个限定长度的字符串，
 * 求改字符串中连续子字符串可以匹配到无限长字符串中的数目。
 * 例如，给出 zabc，则 z,za,zab,zabc,a,ab,abc,b,bc,c 都可以匹配进去
 * 需要注意边缘情况，即字符串连续超过 26 个字母后
 */

/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
  const map = new Map();
  let result = 0;

  const isContinuous = (pre, next) => {
    if (next === 'a' && pre === 'z') return true;
    return next.charCodeAt() - pre.charCodeAt() === 1;
  };

  let i = 0;
  while (i < p.length) {
    let pre = p[i];
    let tmp = [0];

    if (!map.has(pre)) {
      map.set(pre, 1);
      tmp = [1];
    }
    let j = 1;

    while (j + i < p.length && isContinuous(pre, p[j + i])) {
      pre = p[j + i];
      const str = p.slice(i, i + j + 1);
      if (!map.has(pre)) {
        map.set(pre, j + 1);
        tmp[j] = tmp[j - 1] + (j > 25 ? 26 : j + 1);
      } else {
        const cached = map.get(pre);
        if (cached >= j + 1) {
          tmp[j] = tmp[j - 1];
        } else {
          tmp[j] = tmp[j - 1] + Math.min(26, (j + 1 - cached));
          map.set(pre, j + 1);
        }
      }

      j += 1;
    }
    result += tmp[j - 1];
    i += j;
  }

  return result;
};

// Test case
console.log(findSubstringInWraproundString("zab")); // 6
console.log(findSubstringInWraproundString("cac")); // 2
console.log(findSubstringInWraproundString("a")); // 1
console.log(findSubstringInWraproundString("zaba")); // 6
console.log(findSubstringInWraproundString("abc")); // 6
console.log(findSubstringInWraproundString("abaab")); // 3
console.log(findSubstringInWraproundString("abccccd")); // 8
console.log(findSubstringInWraproundString("abccccde")); // 11
console.log(findSubstringInWraproundString("abcabc")); // 6
console.log(findSubstringInWraproundString("abcdefghijklmnopqrstuvwxyz")); // 351
console.log(findSubstringInWraproundString("abcdefghijklmnopqrstuvwxyza")); // 377
console.log(findSubstringInWraproundString("vwxyefghijklmnopqrsomnopqrstuvefghijklmklmnopqrsqrstefghijklmnopqpqrstuvwxyzidefghijbcefghijklmnopqrstuvwghijklmnopqrstuvwhijklmnopbcdefghijklmnopopqrstuvwxyzstuvwxyfghijklmnopqrstuvwxyzmnopqrstuvwxyzhijklmnopfghijklfghijklmnopfghijklmnopqrsttuvwxabcdefghijklmnjklmnopqrstuvwxijklmnopabcdefghijklmnopqopqrstuvfghijklmnopqrstuvefghijkklmnopqrstuvabcdefghijklmnopqabcdefklmnopqefghijklmnopqrmbcdefghmnopqrstulnopqrstklmnopqrstuvwstuvnopqrstuvwxytuvwxhijklmnopqrstuvwxyzijklmnopqrstuabcdefghipqrstulabcdefghijklmnopijklmnopqrsabcdefgcdefghijklmnopqfghijklmnopqrfghijklmnohijklmnopqrstuvwxyzabcdhijklmnopqrstuvghijkrstuvwxyzabcdefghijklmnopqrcdefghijklmfghijklmnopqrstuvghijlmnopopqrstuvwxyjklmndefghijklmnopqrstuvwjklmghijklmnopqrstuvwxyfghijklmdefghijklmnopqrstuvwxfghijklmnopqrshijklmnopqcdefghiabcdefghijklmnopqrsttuvwuvwxyzhijklmnofghijkllmnopqrstuvwxnopqrhijklmnopqrstuvwxyzjklmnopqrstuvwxefghiefghijklmnopqrtuvwxpqrstuvklmnabcdefghijklmnopklefghijklmnopqrstuvjklmnopqrsbcdefghijkcdefghijklmfghijklmnopqrstuv")); // 531
console.log(findSubstringInWraproundString("cdefghefghijklmnopqrstuvwxmnijklmnopqrstuvbcdefghijklmnopqrstuvwabcddefghijklfghijklmabcdefghijklmnopqrstuvwxymnopqrstuvwxyz")); // 339
console.log(findSubstringInWraproundString("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz")); // 33475
