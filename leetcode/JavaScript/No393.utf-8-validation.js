/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * A character in UTF8 can be from 1 to 4 bytes long, subjected to the following rules:
 * 1. For 1-byte character, the first bit is a 0, followed by its unicode code.
 * 2. For n-bytes character, the first n-bits are all one's, the n+1 bit is 0, followed by n-1 bytes with most significant 2 bits being 10.
 *
 * This is how the UTF-8 encoding would work:
 *    Char. number range  |        UTF-8 octet sequence
 *       (hexadecimal)    |              (binary)
 *    --------------------+---------------------------------------------
 *    0000 0000-0000 007F | 0xxxxxxx
 *    0000 0080-0000 07FF | 110xxxxx 10xxxxxx
 *    0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
 *    0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
 * Given an array of integers representing the data, return whether it is a valid utf-8 encoding.
 *
 * Note:
 * The input is an array of integers. Only the least significant 8 bits of each integer is used to store the data.
 * This means each integer represents only 1 byte of data.
 *
 * Example 1:
 * data = [197, 130, 1], which represents the octet sequence: 11000101 10000010 00000001.
 * Return true.
 * It is a valid utf-8 encoding for a 2-bytes character followed by a 1-byte character.
 *
 * Example 2:
 * data = [235, 140, 4], which represented the octet sequence: 11101011 10001100 00000100.
 * Return false.
 * The first 3 bits are all one's and the 4th bit is 0 means it is a 3-bytes character.
 * The next byte is a continuation byte which starts with 10 and that's correct.
 * But the second continuation byte does not start with 10, so it is invalid.
 *
 * UTF-8 中的一个字符可能的长度为 1 到 4 字节，遵循以下的规则：
 * 1. 对于 1 字节的字符，字节的第一位设为0，后面7位为这个符号的 unicode 码。
 * 2. 对于 n 字节的字符 (n > 1)，第一个字节的前 n 位都设为1，第 n+1 位设为0，后面字节的前两位一律设为10。剩下的没有提及的二进制位，全部为这个符号的 unicode 码。
 */

/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  const arr = data.map((num) => {
    const str = num.toString(2)
    const char = str.slice(-8, str.length)
    if (char.length === 8) return char
    return Array.from({ length: 8 - char.length }, (_, i) => 0).join('') + char
  })

  let i = 0
  while (i < arr.length) {
    const str = arr[i]

    let j = 0
    while (j < str.length && str[j] === '1') {
      j += 1
      if (j >= 5) return false
    }

    if (j === 0) {
      i += 1
      continue
    }
    if (j < 2) return false
    if (str[j] !== '0') return false

    if (arr.length - i < j) return false
    for (let k = i + 1; k < i + j; k += 1) {
      const char = arr[k]
      if (char[0] !== '1' || char[1] !== '0') return false
    }
    i += j
  }
  return true
}

/**
*
* Char. number range  |        UTF-8 octet sequence
    (hexadecimal)    |              (binary)
 --------------------+---------------------------------------------
 0000 0000-0000 007F | 0xxxxxxx
 0000 0080-0000 07FF | 110xxxxx 10xxxxxx
 0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
 0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
*/