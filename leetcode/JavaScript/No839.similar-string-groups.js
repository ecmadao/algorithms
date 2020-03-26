/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Two strings X and Y are similar if we can swap two letters (in different positions) of X, so that it equals Y.
 * Also two strings X and Y are similar if they are equal.
 *
 * For example, "tars" and "rats" are similar (swapping at positions 0 and 2), and "rats" and "arts" are similar,
 * but "star" is not similar to "tars", "rats", or "arts".
 *
 * Together, these form two connected groups by similarity: {"tars", "rats", "arts"} and {"star"}.
 * Notice that "tars" and "arts" are in the same group even though they are not similar.
 * Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.
 *
 * We are given a list A of strings. Every string in A is an anagram of every other string in A.
 * How many groups are there?
 *
 * Example 1:
 * Input: A = ["tars","rats","arts","star"]
 * Output: 2
 *
 * Constraints:
 * 1. 1 <= A.length <= 2000
 * 2. 1 <= A[i].length <= 1000
 * 3. A.length * A[i].length <= 20000
 * 4. All words in A consist of lowercase letters only.
 * 5. All words in A have the same length and are anagrams of each other.
 * 6. The judging time limit has been increased for this question.
 */

/**
 * @param {string[]} A
 * @return {number}
 */
var numSimilarGroups = function(A) {
  if (A.length <= 1) return A.length

  const cache = []
  const search = (word, index) => {
    for (const str of cache[index]) {
      if (str === word) return true
      let i = 0
      let c = 0
      while (i < word.length) {
        if (word[i] !== str[i]) c += 1
        if (c > 2) break
        i += 1
      }
      if (c === 2 && i === word.length) return true
    }
    return false
  }
  for (const word of A) {
    const indexes = []
    for (let i = 0; i < cache.length; i += 1) {
      const check = search(word, i)
      if (check) indexes.push(i)
    }

    if (!indexes.length) {
      cache.push([word])
    } else {
      cache[indexes[0]].push(word)
      for (let i = 1; i < indexes.length; i += 1) {
        const index = indexes[i] - (i - 1)
        cache[indexes[0]].push(...cache[index])
        cache.splice(index, 1)
      }
    }
  }
  return cache.length
}
