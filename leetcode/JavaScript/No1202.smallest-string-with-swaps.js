/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * You are given a string s, and an array of pairs of indices in the string pairs where pairs[i] = [a, b] indicates 2 indices(0-indexed) of the string.
 * You can swap the characters at any pair of indices in the given pairs any number of times.
 * Return the lexicographically smallest string that s can be changed to after using the swaps.
 *
 * Example 1:
 * Input: s = "dcab", pairs = [[0,3],[1,2]]
 * Output: "bacd"
 * Explaination:
 * Swap s[0] and s[3], s = "bcad"
 * Swap s[1] and s[2], s = "bacd"
 *
 * Example 2:
 * Input: s = "dcab", pairs = [[0,3],[1,2],[0,2]]
 * Output: "abcd"
 * Explaination:
 * Swap s[0] and s[3], s = "bcad"
 * Swap s[0] and s[2], s = "acbd"
 * Swap s[1] and s[2], s = "abcd"
 *
 * Example 3:
 * Input: s = "cba", pairs = [[0,1],[1,2]]
 * Output: "abc"
 * Explaination:
 * Swap s[0] and s[1], s = "bca"
 * Swap s[1] and s[2], s = "bac"
 * Swap s[0] and s[1], s = "abc"
 *
 * Constraints:
 * 1. 1 <= s.length <= 10^5
 * 2. 0 <= pairs.length <= 10^5
 * 3. 0 <= pairs[i][0], pairs[i][1] < s.length
 * 4. s only contains lower case English letters.
 *
 * 给你一个字符串 s，以及该字符串中的一些「索引对」数组 pairs，其中 pairs[i] = [a, b] 表示字符串中的两个索引（编号从 0 开始）。
 * 你可以 任意多次交换 在 pairs 中任意一对索引处的字符。
 * 返回在经过若干次交换后，s 可以变成的按字典序最小的字符串
 */


/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
  const find = (uf, i) => {
    while (uf[i] !== i) i = uf[i]
    return i
  }

  const union = (uf, n1, n2) => {
    if (uf[n1] === undefined) uf[n1] = n1
    if (uf[n2] === undefined) uf[n2] = n2

    const f1 = find(uf, n1)
    const f2 = find(uf, n2)

    if (s[f1] < s[f2]) {
      uf[f2] = f1
    } else {
      uf[f1] = f2
    }
  }

  const uf = Array.from({ length: s.length }, (_, i) => i)
  for (const [i, j] of pairs) {
    union(uf, i, j)
  }

  const map = {}
  for (let i = 0; i < uf.length; i += 1) {
    const f = find(uf, uf[i])
    if (!map[f]) map[f] = []
    map[f].push(i)
  }

  const res = s.split('')
  for (const indexes of Object.values(map)) {
    const strs = indexes.map(i => s[i]).sort()

    for (let i = 0; i < indexes.length; i += 1) {
      res[indexes[i]] = strs[i]
    }
  }

  return res.join('')
}
