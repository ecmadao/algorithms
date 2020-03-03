/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given strings A and B of the same length, we say A[i] and B[i] are equivalent characters.
 *
 * For example, if A = "abc" and B = "cde", then we have 'a' == 'c', 'b' == 'd', 'c' == 'e'.
 * Equivalent characters follow the usual rules of any equivalence relation:
 *
 * Reflexivity: 'a' == 'a'
 * Symmetry: 'a' == 'b' implies 'b' == 'a'
 * Transitivity: 'a' == 'b' and 'b' == 'c' implies 'a' == 'c'
 *
 * For example, given the equivalency information from A and B above, S = "eed", "acd", and "aab" are equivalent strings, and "aab" is the lexicographically smallest equivalent string of S.
 * Return the lexicographically smallest equivalent string of S by using the equivalency information from A and B.
 *
 * Example1:
 * Input: A = "parker", B = "morris", S = "parser"
 * Output: "makkek"
 * Explanation: Based on the equivalency information in A and B, we can group their characters as [m,p], [a,o], [k,r,s], [e,i]. The characters in each group are equivalent and sorted in lexicographical order. So the answer is "makkek".
 * 根据 A 和 B 中的等价信息，我们可以将这些字符分为 [m,p], [a,o], [k,r,s], [e,i] 共 4 组。每组中的字符都是等价的，并按字典序排列。所以答案是 "makkek"
 *
 * Example2:
 * Input: A = "hello", B = "world", S = "hold"
 * Output: "hdld"
 * Explanation:  Based on the equivalency information in A and B, we can group their characters as [h,w], [d,e,o], [l,r]. So only the second letter 'o' in S is changed to 'd', the answer is "hdld".
 * 根据 A 和 B 中的等价信息，我们可以将这些字符分为 [h,w], [d,e,o], [l,r] 共 3 组。所以只有 S 中的第二个字符 'o' 变成 'd'，最后答案为 "hdld"
 *
 * Example3:
 * Input: A = "leetcode", B = "programs", S = "sourcecode"
 * Output: "aauaaaaada"
 * Explanation:  We group the equivalent characters in A and B as [a,o,e,r,s,c], [l,p], [g,t] and [d,m], thus all letters in S except 'u' and 'd' are transformed to 'a', the answer is "aauaaaaada".
 * 我们可以把 A 和 B 中的等价字符分为 [a,o,e,r,s,c], [l,p], [g,t] 和 [d,m] 共 4 组，因此 S 中除了 'u' 和 'd' 之外的所有字母都转化成了 'a'，最后答案为 "aauaaaaada"
 *
 * Note:
 * String A, B and S consist of only lowercase English letters from 'a' - 'z'.
 * The lengths of string A, B and S are between 1 and 1000.
 * String A and B are of the same length.
 *
 * 给出长度相同的两个字符串：A 和 B，其中 A[i] 和 B[i] 是一组等价字符。举个例子，如果 A = "abc" 且 B = "cde"，那么就有 'a' == 'c', 'b' == 'd', 'c' == 'e'。
 * 等价字符遵循任何等价关系的一般规则：
 * 自反性：'a' == 'a'
 * 对称性：'a' == 'b' 则必定有 'b' == 'a'
 * 传递性：'a' == 'b' 且 'b' == 'c' 就表明 'a' == 'c'
 *
 * 例如，A 和 B 的等价信息和之前的例子一样，那么 S = "eed", "acd" 或 "aab"，这三个字符串都是等价的，而 "aab" 是 S 的按字典序最小的等价字符串
 * 利用 A 和 B 的等价信息，找出并返回 S 的按字典序排列最小的等价字符串
 */

/**
 * @param {string} A
 * @param {string} B
 * @param {string} S
 * @return {string}
 */
var smallestEquivalentString = function(A, B, S) {
  const map = {}
  for (let i = 0; i < A.length; i += 1) {
    let a = A[i]
    let b = B[i]

    if (a === b) {
      if (!map[a]) map[a] = a
      continue
    }

    while (map[a] && map[a] !== a) a = map[a]
    while (map[b] && map[b] !== b) b = map[b]
    if (a < b) {
      map[b] = a
    } else {
      map[a] = b
    }
  }

  return S.split('').reduce((list, s) => {
      if (!map[s] || map[s] === s) {
        list.push(s)
      } else {
        while (map[s] && map[s] !== s) s = map[s]
        list.push(s)
      }
      return list
  }, []).join('')
}
