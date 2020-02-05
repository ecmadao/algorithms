/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Design a data structure that supports the following two operations:
 * void addWord(word)
 * bool search(word)
 * search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.
 *
 * Example:
 * addWord("bad")
 * addWord("dad")
 * addWord("mad")
 * search("pad") -> false
 * search("bad") -> true
 * search(".ad") -> true
 * search("b..") -> true
 *
 * Note:
 * You may assume that all words are consist of lowercase letters a-z.
 *
 * Hint:
 * You should be familiar with how a Trie works. If not, please work on this problem: Implement Trie (Prefix Tree) first.
 *
 * 构建一个单词搜索树，类似于 No.208 Implement Trie (Prefix Tree)，但不同的是支持通配符 .
 */


const TreeNode = function(val) {
  this.val = val
  this.children = {}
  this.stop = false
}

/**
* Initialize your data structure here.
*/
var WordDictionary = function() {
  this.tree = new TreeNode()
};

/**
* Adds a word into the data structure.
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let node = this.tree
  for (let i = 0; i < word.length; i += 1) {
    const str = word[i]
    if (!node.children[str]) node.children[str] = new TreeNode(str)
    node = node.children[str]
  }
  node.stop = true
};

WordDictionary.prototype._search = function (word, index, tree) {
  let node = tree
  for (let i = index; i < word.length; i += 1) {
    const str = word[i]
    if (str === '.') {
      for (const child of Object.values(node.children)) {
        const searched = this._search(word, i + 1, child)
        if (searched) return true
      }
      return false
    } else {
      if (!node.children[str]) return false
      node = node.children[str]
    }
  }
  return node.stop
}

/**
* Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  return this._search(word, 0, this.tree)
};

/**
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/

// Test case
var dic = new WordDictionary();
dic.addWord('at');
dic.addWord('and');
dic.addWord('an');
dic.addWord('add');
console.log(dic.search('a'));
console.log(dic.search('.at'));
dic.addWord('bat');
console.log(dic.search('.at'));
console.log(dic.search('an.'));
console.log(dic.search('a.d.'));
console.log(dic.search('b.'));
console.log(dic.search('a.d'));
console.log(dic.search('.'));