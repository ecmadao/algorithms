/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * S and T are strings composed of lowercase letters. In S, no letter occurs more than once.
 * S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted.
 * More specifically, if x occurs before y in S, then x should occur before y in the returned string.
 * Return any permutation of T (as a string) that satisfies this property.
 *
 * Example:
 * Input:
 * S = "cba"
 * T = "abcd"
 * Output: "cbad"
 * Explanation:
 * "a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a".
 * Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.
 *
 * Note:
 * 1. S has length at most 26, and no character is repeated in S.
 * 2. T has length at most 200.
 * 3. S and T consist of lowercase letters only.
 *
 * 字符串S和 T 只包含小写字符。在 S 中，所有字符只会出现一次。
 * S 已经根据某种规则进行了排序。我们要根据 S 中的字符顺序对 T 进行排序。更具体地说，如果 S 中 x 在 y 之前出现，那么返回的字符串中 x 也应出现在 y 之前。
 * 返回任意一种符合条件的字符串 T
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
  const map = S.split('').reduce((m, s, i) => {
    m.set(s, i)
    return m
  }, new Map())

  return T.split('').sort(
    (s1, s2) => (map.has(s1) ? map.get(s1) : 26) - (map.has(s2) ? map.get(s2) : 26)
  ).join('')
}
