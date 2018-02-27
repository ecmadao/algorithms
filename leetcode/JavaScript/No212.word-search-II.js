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

var TrieNode = function(val, childs, stop, bottom) {
    this.childs = childs || [];
    this.val = val || null;
    this.stop = stop || false;
    this.bottom = bottom || true;
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
            if (!node.bottom) node.bottom = false;
            var root = null;
            var tmp = null;
            for (var j = word.length - 1; j >= i; j -= 1) {
                root = new TrieNode(
                    word[j],
                    tmp ? [tmp] : [],
                    j === word.length - 1,
                    j === i
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

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {object}
 */
Trie.prototype.search = function(word) {
    var node = this.treeNode;
    for (var i = 0; i < word.length; i += 1) {
        var find = node.childs.find(child => child.val === word[i]);
        if (!find) {
            return null;
        } else {
            node = find;
        }
    }
    // 此处和 No.208 Implement Trie (Prefix Tree) 实现的字典树略有不同
    // 在这里，如果搜索到存在，则还返回其详细信息
    // 因此如果被搜索的单词已经深入到了字典树的最底部，则矩阵没有必要继续遍历下去
    var result = node.childs.length === 0 || node.stop;
    if (!result) return null;
    return {
        result,
        word,
        isBottom: node.bottom,
    };
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {object}
 */
Trie.prototype.startsWith = function(prefix) {
    var node = this.treeNode;
    for (var i = 0; i < prefix.length; i += 1) {
        var find = node.childs.find(child => child.val === prefix[i]);
        if (!find) {
            return null;
        } else {
            node = find;
        }
    }
    var result = node.childs.length >= 0;
    if (!result) return null;
    return {
        result,
        prefix,
        isBottom: node.bottom,
    };
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, trie) {
    var maxRow = board.length - 1;
    var maxColumn = board[0].length - 1;
    var results = {};
    // 缓存每次 prefix 检查的结果
    var prefixExistTmp = {};

    var judge = function(str, used, x, y, banned) {
        var key = x + '&' + y;
        if (!used[key]) {
            var target = str + board[x][y];
            if (prefixExistTmp[target] === undefined) {
                prefixExistTmp[target] = trie.startsWith(target);
            }
            if (prefixExistTmp[target]) {
                used[key] = true;
                if (findWord(used, x, y, str + board[x][y], banned)) {
                    return true;
                }
                used[key] = false;
            }
        }
        return false;
    };
    var findWord = function(used, x, y, str, bannedPosition) {
        var positions = [];
        var key;
        var findResult = trie.search(str);
        if (findResult && findResult.result) {
            if (!results[str]) {
                results[str] = 1;
            }
            if (findResult.bottom) {
                return true;
            }
        }

        if (x > 0 && bannedPosition !== 'top') {
            if (judge(str, used, x - 1, y, 'bottom')) {
                return true;
            }
        }
        if (x < maxRow && bannedPosition !== 'bottom') {
            if (judge(str, used, x + 1, y, 'top')) {
                return true;
            }
        }
        if (y > 0 && bannedPosition !== 'left') {
            if (judge(str, used, x, y - 1, 'right')) {
                return true;
            }
        }
        if (y < maxColumn && bannedPosition !== 'right') {
            if (judge(str, used, x, y + 1, 'left')) {
                return true;
            }
        }
        return false;
    };

    var usedTemp = {};
    for (var i = 0; i <= maxRow; i += 1) {
        var row = board[i];
        for (var j = 0; j <= maxColumn; j += 1) {
        var str = row[j];
        if (prefixExistTmp[str] === undefined) {
            prefixExistTmp[str] = trie.startsWith(str);
        }
            if (prefixExistTmp[str]) {
                var key = i + '&' + j;
                usedTemp[key] = true;
                if (!findWord(usedTemp, i, j, row[j], '')) {
                    usedTemp[key] = false;
                }
            }
        }
    }
    return Object.keys(results);
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    if (!board.length) return false;

    var trie = new Trie();
    for (var i = 0; i < words.length; i += 1) {
        trie.insert(words[i]);
    }

    var results = exist(board, trie);
    return results;
};
