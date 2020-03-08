/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
 * You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
 * Extra spaces between words should be distributed as evenly as possible.
 * If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
 * For the last line of text, it should be left justified and no extra space is inserted between words.
 *
 * Note:
 * 1. A word is defined as a character sequence consisting of non-space characters only.
 * 2. Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
 * 3. The input array words contains at least one word.
 *
 * Example 1:
 * Input:
 * words = ["This", "is", "an", "example", "of", "text", "justification."]
 * maxWidth = 16
 * Output:
 * [
 *    "This    is    an",
 *    "example  of text",
 *    "justification.  "
 * ]
 *
 * Example 2:
 * Input:
 * words = ["What","must","be","acknowledgment","shall","be"]
 * maxWidth = 16
 * Output:
 * [
 *   "What   must   be",
 *   "acknowledgment  ",
 *   "shall be        "
 * ]
 * Explanation: Note that the last line is "shall be    " instead of "shall     be",
 *              because the last line must be left-justified instead of fully-justified.
 *              Note that the second line is also left-justified becase it contains only one word.
 *
 * Example 3:
 * Input:
 * words = ["Science","is","what","we","understand","well","enough","to","explain",
 *          "to","a","computer.","Art","is","everything","else","we","do"]
 * maxWidth = 20
 * Output:
 * [
 *   "Science  is  what we",
 *   "understand      well",
 *   "enough to explain to",
 *   "a  computer.  Art is",
 *   "everything  else  we",
 *   "do                  "
 * ]
 *
 * 给定一个单词数组和一个长度 maxWidth，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。
 * 你应该使用“贪心算法”来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。
 * 要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。
 * 文本的最后一行应为左对齐，且单词之间不插入额外的空格。
 *
 * 说明:
 * 1. 单词是指由非空格字符组成的字符序列。
 * 2. 每个单词的长度大于 0，小于等于 maxWidth。
 * 3. 输入单词数组 words 至少包含一个单词。
 */


const getBlanks = (total, count) => {
  const avg = Math.floor(total / count)
  const result = Array.from({ length: count }, (_, i) => avg)
  if (total % count === 0) return result

  result[result.length - 1] += (total - avg * count)

  let i = result.length - 2
  while (i >= 0 && result[result.length - 1] > avg + 1) {
    result[i] += 1
    result[result.length - 1] -= 1
    i -= 1
  }
  return result
}

/**
* @param {string[]} words
* @param {number} maxWidth
* @return {string[]}
*/
var fullJustify = function(words, maxWidth) {
  const result = []
  while (words.length) {
    let width = maxWidth
    const queue = []
    while (width && words.length) {
      width -= ((queue.length ? 1 : 0) + words[0].length)
      if (width < 0) break
      queue.push(words.shift())
    }

    if (!words.length || queue.length === 1) {
      const str = queue.join(' ')
      result.push(
        str + Array.from({ length: maxWidth - str.length }, (_, i) => ' ').join('')
      )
    } else {
      const blanks = getBlanks(maxWidth - queue.join('').length, queue.length - 1)
      result.push(
        queue.reduce((list, word, index) => {
          if (index !== 0) {
            list.push(...Array.from({ length: blanks.pop() }, (_, i) => ' '))
          }
          list.push(word)
          return list
        }, []).join('')
      )
    }
  }
  return result
}

