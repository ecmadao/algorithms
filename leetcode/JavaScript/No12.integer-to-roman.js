/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an integer, convert it to a roman numeral.
 * Input is guaranteed to be within the range from 1 to 3999.
 *
 * Example:
 * num -> 3333
 * roman -> MMMCCCXXXIII
 *
 * 把数字转换为罗马数字
 * 罗马数字 Wiki: https://zh.wikipedia.org/wiki/%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97
 * 1 -> I
 * 2 -> II
 * 3 -> III
 * 4 -> IV
 * 5 -> Ⅴ
 * 6 -> VI
 * 7 -> VII
 * 8 -> VIII
 * 9 -> IX
 * 10 -> X
 * 50 -> L
 * 100 -> C
 * 500 -> D
 * 1000 -> M
 *
 * 基本思路：
 * 把数字每一位分别转换为罗马数字，但要注意：
 * 1. 左减数字必须为一位，比如 8 写成 VIII，而非 IIX
 * 2. 右加数字不可连续超过三位，比如 14 写成 XIV，而非 XIIII
 * 3. 左减时不可跨越一个位值。比如，99不可以用 IC（100-1）表示，而是用 XCIX（[100-10]+[10-1]）表示（等同于阿拉伯数字每位数字分别表示）
 */

const ROMAS = 'IVXLCDM'.split('')
const NUMS = ROMAS.reduce((dict, str, i) => {
  // count for * 2 -> Math.floor(i / 2)
  // count for * 5 -> Math.ceil(i / 2)
  dict[
    Math.pow(2, Math.floor(i / 2)) * Math.pow(5, Math.ceil(i / 2))
  ] = str
  return dict
}, {})

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(input) {
  const result = []

  let base = 10
  let romaIndex = 0
  let num = input
  while (num) {
    const remainder = num % base
    // console.log(`num: ${num}, base: ${base}, remainder: ${remainder}`)
    let section = NUMS[remainder]
    if (!section) {
      section = handleSection(
        remainder / (base / 10),
        ROMAS.slice(romaIndex, romaIndex + 3)
      )
    }

    result.unshift(section)
    num = num - remainder
    base *= 10
    romaIndex += 2
  }

  return result.join('')
};

const duplicate = (str, count) =>
  Array.from({ length: count }, (v, i) => str).join('')

/**
 * @param {number} num, num = 2, 3, 4, 6, 7, 8, 9
 * @param {string[]} units, for example, [I, V, X]
 * @return {string}
 */
const handleSection = (num, units) => {
  if (num <= 0) return ''
  if (!units.length) return ''
  if (units.length === 1) {
    return duplicate(units[0], num)
  }
  if (num <= 3) {
    return duplicate(units[0], num)
  }
  if (num === 4) {
    return units[0] + units[1]
  }
  if (num <= 8) {
    return units[1] + duplicate(units[0], num - 5)
  }
  return units[0] + units[2]
}

intToRoman(1800);
intToRoman(1437);
intToRoman(1400);
intToRoman(3999);
intToRoman(3333);
intToRoman(1000);
intToRoman(2000);
intToRoman(19);
intToRoman(1);