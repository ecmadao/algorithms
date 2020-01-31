/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Implement a magic directory with buildDict, and search methods.
 * For the method buildDict, you'll be given a list of non-repetitive words to build a dictionary.
 * For the method search, you'll be given a word, and judge whether if you modify exactly one character into another character in this word, the modified word is in the dictionary you just built.
 *
 * Example:
 * Input: buildDict(["hello", "leetcode"]), Output: Null
 * Input: search("hello"), Output: False
 * Input: search("hhllo"), Output: True
 * Input: search("hell"), Output: False
 * Input: search("leetcoded"), Output: False
 *
 * Note:
 * - You may assume that all the inputs are consist of lowercase letters a-z.
 * - For contest purpose, the test data is rather small by now. You could think about highly efficient algorithm after the contest.
 * - Please remember to RESET your class variables declared in class MagicDictionary, as static/class variables are persisted across multiple test cases. Please see here for more details.
 */

function Node(val = '') {
  this.val = val;
  this.child = {};
};

/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
  this.root = new Node();
};

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
  for (const word of dict) {
    let node = this.root;
    for (const letter of word) {
      if (!node.child[letter]) node.child[letter] = new Node();
      node = node.child[letter];
    }
    node.val = word;
  }
};

MagicDictionary.prototype._search = function(node, word, index, modityCount) {
  if (modityCount > 1) return false;
  const letter = word[index];

  if (index === word.length) {
    if (!node.val) return false;
    return modityCount === 1;
  }

  let result = false;
  for (const child of Object.keys(node.child)) {
    result = this._search(node.child[child], word, index + 1, modityCount + (letter === child ? 0 : 1));
    if (result) return result;
  }
  return result;
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
  return this._search(this.root, word, 0, 0);
};

// Test case
const dict = new MagicDictionary();
dict.buildDict(["a","b","ab","abc","abcabacbababdbadbfaejfoiawfjaojfaojefaowjfoawjfoawj","abcdefghijawefe","aefawoifjowajfowafjeoawjfaow","cba","cas","aaewfawi","babcda","bcd","awefj"]);

console.log(dict.search('a'));
console.log(dict.search('b'));
console.log(dict.search('c'));
console.log(dict.search('d'));
console.log(dict.search('e'));
console.log(dict.search('f'));
console.log(dict.search('ab'));
console.log(dict.search('ba'));
console.log(dict.search('abc'));
console.log(dict.search('cba'));
console.log(dict.search('abb'));
console.log(dict.search('bb'));
console.log(dict.search('aa'));
console.log(dict.search('bbc'));
console.log(dict.search('abcd'));


["MagicDictionary", "buildDict", "search", "search", "search", "search"]
[[], [["hello","leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
// [null,null,false,true,false,false]

["MagicDictionary", "buildDict", "search", "search", "search", "search"]
[[], [["hello","hallo","leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
// [null,null,true,true,false,false]