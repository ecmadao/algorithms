/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a 2D board and a list of words from the dictionary, find all words in the board.
 * Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
 *
 * Example:
 * Given words = ["oath","pea","eat","rain"] and board =
 * [
 * ['o','a','a','n'],
 * ['e','t','a','e'],
 * ['i','h','k','r'],
 * ['i','f','l','v']
 * ]
 * Return ["eat","oath"].
 *
 * Note:
 * You may assume that all inputs are consist of lowercase letters a-z.
 *
 * Hint:
 * You would need to optimize your backtracking to pass the larger test. Could you stop backtracking earlier?
 * If the current candidate does not exist in all words' prefix, you could stop backtracking immediately. What kind of data structure could answer such query efficiently? Does a hash table work? Why or why not? How about a Trie? If you would like to learn how to implement a basic trie, please work on this problem: Implement Trie (Prefix Tree) first.
 *
 * 类似于 No.79 Word search，也是在字母矩阵中寻找是否有匹配的单词，但这次是给出一个单词组成的数组，要返回所有匹配的单词（不能重复）
 */

/*
 * 思路：
 * 如果还是一个一个的搜索则时间复杂度太多，一定会超时。因此我们可以反过来，遍历矩阵，针对每个遍历到的字母去检查是否存在以它开头的单词，如果存在，则进一步去搜索
 * 此处需要使用到 ”字典树“ 的数据结构。预先把数组中的所有单词组成一个字典树，之后可以快速的判断出该单词是否存在于数组中
 * 字典树的实现可以参考 No.208 Implement Trie (Prefix Tree)
 */


function TreeNode (val) {
  this.val = val
  this.next = {}
  this.stop = false
  this.word = null
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const tree = new TreeNode()
    for (const word of words) {
      let node = tree
      for (const str of word) {
        if (!node.next[str]) node.next[str] = new TreeNode(str)
        node = node.next[str]
      }
      node.stop = true
      node.word = word
    }

    const result = new Set()
    const dfs = (i, j, cache, node) => {
      if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return

      const str = board[i][j]
      if (!node.next[str]) return

      node = node.next[str]
      if (node.stop) result.add(node.word)

      cache[`${i}-${j}`] = true

      for (const [row, col] of [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]) {
        if (cache[`${row}-${col}`]) continue
        dfs(row, col, cache, node)
      }

      cache[`${i}-${j}`] = false
    }

    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].length; j += 1) {
        dfs(i, j, {}, tree)
      }
    }

    return [...result]
}

// Test case
console.log(
  // ["aabbbbabbaababaaaabababbaaba","abaabbbaaaaababbbaaaaabbbaab","ababaababaaabbabbaabbaabbaba"]
  findWords(
    [["b","a","a","b","a","b"],["a","b","a","a","a","a"],["a","b","a","a","a","b"],["a","b","a","b","b","a"],["a","a","b","b","a","b"],["a","a","b","b","b","a"],["a","a","b","a","a","b"]],
    ["bbaabaabaaaaabaababaaaaababb","aabbaaabaaabaabaaaaaabbaaaba","babaababbbbbbbaabaababaabaaa","bbbaaabaabbaaababababbbbbaaa","babbabbbbaabbabaaaaaabbbaaab","bbbababbbbbbbababbabbbbbabaa","babababbababaabbbbabbbbabbba","abbbbbbaabaaabaaababaabbabba","aabaabababbbbbbababbbababbaa","aabbbbabbaababaaaabababbaaba","ababaababaaabbabbaabbaabbaba","abaabbbaaaaababbbaaaaabbbaab","aabbabaabaabbabababaaabbbaab","baaabaaaabbabaaabaabababaaaa","aaabbabaaaababbabbaabbaabbaa","aaabaaaaabaabbabaabbbbaabaaa","abbaabbaaaabbaababababbaabbb","baabaababbbbaaaabaaabbababbb","aabaababbaababbaaabaabababab","abbaaabbaabaabaabbbbaabbbbbb","aaababaabbaaabbbaaabbabbabab","bbababbbabbbbabbbbabbbbbabaa","abbbaabbbaaababbbababbababba","bbbbbbbabbbababbabaabababaab","aaaababaabbbbabaaaaabaaaaabb","bbaaabbbbabbaaabbaabbabbaaba","aabaabbbbaabaabbabaabababaaa","abbababbbaababaabbababababbb","aabbbabbaaaababbbbabbababbbb","babbbaabababbbbbbbbbaabbabaa"]
  )
)
