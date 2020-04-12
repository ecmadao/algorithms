/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * You are given an array A of strings.
 * A move onto S consists of swapping any two even indexed characters of S, or any two odd indexed characters of S.
 * Two strings S and T are special-equivalent if after any number of moves onto S, S == T.
 * For example, S = "zzxy" and T = "xyzz" are special-equivalent because we may make the moves "zzxy" -> "xzzy" -> "xyzz" that swap S[0] and S[2], then S[1] and S[3].
 * Now, a group of special-equivalent strings from A is a non-empty subset of A such that:
 * 
 * Every pair of strings in the group are special equivalent, and;
 * The group is the largest size possible (ie., there isn't a string S not in the group such that S is special equivalent to every string in the group)
 * Return the number of groups of special-equivalent strings from A.
 * 
 * Example 1:
 * Input: ["abcd","cdab","cbad","xyzz","zzxy","zzyx"]
 * Output: 3
 * Explanation: 
 * One group is ["abcd", "cdab", "cbad"], since they are all pairwise special equivalent, and none of the other strings are all pairwise special equivalent to these.
 * The other two groups are ["xyzz", "zzxy"] and ["zzyx"].  Note that in particular, "zzxy" is not special equivalent to "zzyx".
 * 
 * Example 2:
 * Input: ["abc","acb","bac","bca","cab","cba"]
 * Output: 3
 * 
 * Note:
 * 1 <= A.length <= 1000
 * 1 <= A[i].length <= 20
 * All A[i] have the same length.
 * All A[i] consist of only lowercase letters.
 */

/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
  const isSpecialEqual = (s1, s2) => {
    if (s1.length !== s2.length) return false
    if (s1 === s2) return true

    let i = 0
    const list = s2.split('')

    while (i < s1.length) {
      if (s1[i] === list[i]) {
        i += 1
        continue
      }
      let j = i + 2
      while (j < list.length && list[j] !== s1[i]) j += 2
      if (j >= list.length) return false

      const tmp = list[i]
      list[i] = list[j]
      list[j] = tmp
      i += 1
    }
    return list.join('') === s1
  }

  let res = 0
  while (A.length) {
    const str = A.pop()
    res += 1

    let i = A.length - 1
    while (i >= 0) {
      const isEqual = isSpecialEqual(str, A[i])
      if (isEqual) A.splice(i, 1)
      i -= 1
    }
  }

  return res
};
