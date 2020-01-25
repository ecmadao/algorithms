/**
 * Difficulty:
 * Medium
 *
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
 *
 * Example2:
 * Input: A = "hello", B = "world", S = "hold"
 * Output: "hdld"
 * Explanation:  Based on the equivalency information in A and B, we can group their characters as [h,w], [d,e,o], [l,r]. So only the second letter 'o' in S is changed to 'd', the answer is "hdld".
 *
 * Example3:
 * Input: A = "leetcode", B = "programs", S = "sourcecode"
 * Output: "aauaaaaada"
 * Explanation:  We group the equivalent characters in A and B as [a,o,e,r,s,c], [l,p], [g,t] and [d,m], thus all letters in S except 'u' and 'd' are transformed to 'a', the answer is "aauaaaaada".
 *
 * Note:
 * String A, B and S consist of only lowercase English letters from 'a' - 'z'.
 * The lengths of string A, B and S are between 1 and 1000.
 * String A and B are of the same length.
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
