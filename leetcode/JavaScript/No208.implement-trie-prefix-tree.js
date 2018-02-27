/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Implement a trie with insert, search, and startsWith methods.
 *
 * Note:
 * You may assume that all inputs are consist of lowercase letters a-z.
 *
 * 实现一个字典树
 * 关于字典树的介绍可以看这里：
 * http://dongxicheng.org/structure/trietree
 * http://blog.csdn.net/lisonglisonglisong/article/details/45584721
 */

var TrieNode = function(val, childs, stop) {
  this.childs = childs || [];
  this.val = val || null;
  this.stop = stop || false;
};

/**
* Initialize your data structure here.
*/
var Trie = function() {
  this.treeNode = new TrieNode();
};

/**
* Inserts a word into the trie.
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  var node = this.treeNode;
  for (var i = 0; i < word.length; i += 1) {
    var find = node.childs.find(child => child.val === word[i]);
    if (!find) {
      var root = null;
      var tmp = null;
      for (var j = word.length - 1; j >= i; j -= 1) {
        root = new TrieNode(word[j], tmp ? [tmp] : [], j === word.length - 1);
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

/**
* Returns if the word is in the trie.
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  var node = this.treeNode;
  for (var i = 0; i < word.length; i += 1) {
    var find = node.childs.find(child => child.val === word[i]);
    if (!find) {
      return false;
    } else {
      node = find;
    }
  }
  return node.childs.length === 0 || node.stop;
};

/**
* Returns if there is any word in the trie that starts with the given prefix.
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  var node = this.treeNode;
  for (var i = 0; i < prefix.length; i += 1) {
    var find = node.childs.find(child => child.val === prefix[i]);
    if (!find) {
      return false;
    } else {
      node = find;
    }
  }
  return node.childs.length >= 0;
};

/**
* Your Trie object will be instantiated and called as such:
* var obj = Object.create(Trie).createNew()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/

// Test case
var trie = new Trie();
trie.insert('ab');
console.log(trie.search('a'));
console.log(trie.search('ab'));
trie.insert('a');
console.log(trie.search('a'));