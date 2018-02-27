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

var TrieNode = function(val, childs, stop) {
  this.childs = childs || [];
  this.val = val || null;
  this.stop = stop || false;
};

/**
* Initialize your data structure here.
*/
var WordDictionary = function() {
  this.treeNode = new TrieNode();
};

/**
* Adds a word into the data structure.
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  var node = this.treeNode;
  for (var i = 0; i < word.length; i += 1) {
    var find = node.childs.find(child => child.val === word[i]);
    if (!find) {
      var root = null;
      var tmp = null;
      for (var j = word.length - 1; j >= i; j -= 1) {
        root = new TrieNode(
          word[j],
          tmp ? [tmp] : [],
          j === word.length - 1
        );
        tmp = root;
      }
      node.childs.push(root);
      return;
    } else {
      node = find;
    }
  }
  node.stop = true;
};

var search = function(node, word, index) {
  if (index > word.length - 1) {
    if (node.stop || !node.childs.length) return true;
    return false;
  }

  if (word[index] === '.') {
    for (var i = 0; i < node.childs.length; i += 1) {
      var childnode = node.childs[i];
      var result = search(childnode, word, index + 1);
      if (result) return true;
    }
    return false;
  } else {
    var find = node.childs.find(child => child.val === word[index]);
    if (!find) return false;
    return search(find, word, index + 1);
  }
};

/**
* Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  var node = this.treeNode;
  return search(node, word, 0);
};

/**
* Your WordDictionary object will be instantiated and called as such:
* var obj = Object.create(WordDictionary).createNew()
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