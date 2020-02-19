/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * string convert(string text, int nRows);
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 *
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 * 请你实现这个将字符串进行指定行数变换的函数
 */

var getNumberIndex = function(i, numRows) {
  var base = numRows - 1 - i;
  return function(j) {
    return i + Math.ceil(j / 2) * 2 * base + Math.floor(j / 2) * 2 * i;
  };
};

/**
* @param {string} s
* @param {number} numRows
* @return {string}
*/
var convert_1 = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  var length = s.length;
  if (length <= numRows) {
    return s;
  }
  var result = '';
  for (var i = 0; i < numRows; i += 1) {
    var getIndex = getNumberIndex(i, numRows);
    var j = 0;
    var step = i === 0 || i === numRows - 1 ? 2 : 1;
    var index = getIndex(j);
    while (index < length) {
      result += s[index];
      j += step;
      index = getIndex(j);
    }
  }
  return result;
};

const convert_2 = (s, numRows) => {
  if (numRows === 1) return s;
  if (s.length <= numRows) return s;

  const lists = [];
  let index = 0;
  while (index < s.length) {
    const tmpIndex = index % (numRows - 1);
    const listIndex = tmpIndex === 0
      ? (index / (numRows - 1) % 2 === 0 ? 0 : (numRows - 1))
      : (Math.floor(index / (numRows - 1)) % 2 === 0 ? tmpIndex : (numRows - 1) - tmpIndex);

    if (!lists[listIndex]) lists[listIndex] = [];
    lists[listIndex].push(s[index]);
    index += 1;
  }

  return lists.reduce((r, list) => {
    r.push(...list);
    return r;
  }, []).join('');
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert_3 = function(s, numRows) {
  if (numRows === s.length || numRows === 1) return s

  const getNext = [
    r => r + 1,
    r => r - 1
  ]

  let r = 0
  let dir = 'down'
  const result = []

  for (let i = 0; i < s.length; i += 1) {
    const str = s[i]
    if (!result[r]) result[r] = []
    result[r].push(str)

    const next = Math.floor(i / (numRows - 1)) % 2
    r = getNext[next](r)

    // 或者利用 dir 寻找下一次移动方向
    // if (r === numRows - 1) {
    //     dir = 'up'
    // } else if (r === 0) {
    //     dir = 'down'
    // }

    // switch (dir) {
    //     case 'up':
    //         r -= 1
    //         break
    //     case 'down':
    //         r += 1
    //         break
    // }
  }

  return result.reduce((str, arr) => {
    return str + arr.join('')
  }, '')
}
