/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two sentences words1, words2 (each represented as an array of strings), and a list of similar word pairs pairs, determine if two sentences are similar.
 * For example,
 * words1 = ["great", "acting", "skills"] and words2 = ["fine", "drama", "talent"] are similar,
 * if the similar word pairs are pairs = [["great", "good"], ["fine", "good"], ["acting","drama"], ["skills","talent"]].
 * 
 * Note that the similarity relation is transitive.
 * For example, if "great" and "good" are similar, and "fine" and "good" are similar, then "great" and "fine" are similar.
 * Similarity is also symmetric. For example, "great" and "fine" being similar is the same as "fine" and "great" being similar.
 * 
 * Also, a word is always similar with itself.
 * For example, the sentences words1 = ["great"], words2 = ["great"], pairs = [] are similar, even though there are no specified similar word pairs.
 * 
 * Finally, sentences can only be similar if they have the same number of words.
 * So a sentence like words1 = ["great"] can never be similar to words2 = ["doubleplus","good"].
 * 
 * Note:
 * 1. The length of words1 and words2 will not exceed 1000.
 * 2. The length of pairs will not exceed 2000.
 * 3. The length of each pairs[i] will be 2.
 * 4. The length of each words[i] and pairs[i][j] will be in the range [1, 20].
 *
 * 给定两个句子 words1, words2 （每个用字符串数组表示），和一个相似单词对的列表 pairs ，判断是否两个句子是相似的。
 * 例如，当相似单词对是 pairs = [["great", "fine"], ["acting","drama"], ["skills","talent"]]的时候，
 * words1 = ["great", "acting", "skills"] 和 words2 = ["fine", "drama", "talent"] 是相似的。
 *
 * 注意相似关系是 具有 传递性的。例如，如果 "great" 和 "fine" 是相似的，"fine" 和 "good" 是相似的，则 "great" 和 "good" 是相似的。
 * 而且，相似关系是具有对称性的。例如，"great" 和 "fine" 是相似的相当于 "fine" 和 "great" 是相似的。
 * 并且，一个单词总是与其自身相似。例如，句子 words1 = ["great"], words2 = ["great"], pairs = [] 是相似的，尽管没有输入特定的相似单词对。
 * 最后，句子只会在具有相同单词个数的前提下才会相似。所以一个句子 words1 = ["great"] 永远不可能和句子 words2 = ["doubleplus","good"] 相似。
 */

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 *
 * union find 并查集
 */
var areSentencesSimilarTwo = function(words1, words2, pairs) {
  if (words1.length !== words2.length) return false

  const map = {}
  for (const pair of pairs) {
    if (!pair.length) continue

    const hasLinked = pair.find(p => map[p])
    let father = hasLinked || pair[0]
    while (father && map[father] && map[father] !== father) father = map[father]

    for (const p of pair) {
      if (p === hasLinked) continue
      if (!map[p]) {
        map[p] = father
      } else {
        let next = p
        while (map[next] !== next) {
          const tmp = map[next]
          map[next] = father
          next = tmp
        }
        map[next] = father
      }
    }
  }

  let i = 0
  while (i < words1.length) {
    if (words1[i] !== words2[i]) {
      let f1 = words1[i]
      let f2 = words2[i]
      while (map[f1] !== f1) f1 = map[f1]
      while (map[f2] !== f2) f2 = map[f2]
      if (f1 !== f2) return false
    }
    i += 1
  }
  return true
}

// Test case
console.log(
  areSentencesSimilarTwo(
    ["great","acting","skills"],
    ["fine","drama","talent"],
    [["great","good"],["fine","good"],["drama","acting"],["skills","talent"]]
  )
)

console.log(
  areSentencesSimilarTwo(
    ["a","very","delicious","meal"],
    ["one","really","delicious","dinner"],
    [["great","good"],["extraordinary","good"],["well","good"],["wonderful","good"],["excellent","good"],["fine","good"],["nice","good"],["any","one"],["some","one"],["unique","one"],["the","one"],["an","one"],["single","one"],["a","one"],["truck","car"],["wagon","car"],["automobile","car"],["auto","car"],["vehicle","car"],["entertain","have"],["drink","have"],["eat","have"],["take","have"],["fruits","meal"],["brunch","meal"],["breakfast","meal"],["food","meal"],["dinner","meal"],["super","meal"],["lunch","meal"],["possess","own"],["keep","own"],["have","own"],["extremely","very"],["actually","very"],["really","very"],["super","very"]]
  )
)