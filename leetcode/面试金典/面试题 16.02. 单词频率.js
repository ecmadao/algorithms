/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 设计一个方法，找出任意指定单词在一本书中的出现频率。
 * 你的实现应该支持如下操作：
 * 1. WordsFrequency(book)构造函数，参数为字符串数组构成的一本书
 * 2. get(word)查询指定单词在数中出现的频率
 *
 * 示例：
 * WordsFrequency wordsFrequency = new WordsFrequency({"i", "have", "an", "apple", "he", "have", "a", "pen"});
 * wordsFrequency.get("you"); //返回0，"you"没有出现过
 * wordsFrequency.get("have"); //返回2，"have"出现2次
 * wordsFrequency.get("an"); //返回1
 * wordsFrequency.get("apple"); //返回1
 * wordsFrequency.get("pen"); //返回1
 *
 * 提示：
 * 1. book[i]中只包含小写字母
 * 2. 1 <= book.length <= 100000
 * 3. 1 <= book[i].length <= 10
 * 4. get 函数的调用次数不会超过 100000
 */

/**
 * @param {string[]} book
 */
var WordsFrequency = function(book) {
  this.map = book.reduce((d, b) => {
    d[b] = (d[b] || 0) + 1
    return d
  }, {})
};

/**
* @param {string} word
* @return {number}
*/
WordsFrequency.prototype.get = function(word) {
  return this.map[word] || 0
}

/**
* Your WordsFrequency object will be instantiated and called as such:
* var obj = new WordsFrequency(book)
* var param_1 = obj.get(word)
*/