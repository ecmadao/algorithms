
const ROMAS = 'IVXLCDM'.split('')
/**
 * 阿拉伯数字到罗马数字的映射
 * 1 -> I
 * 5 -> Ⅴ
 * 10 -> X
 * 50 -> L
 * 100 -> C
 * 500 -> D
 * 1000 -> M
 */
const NUMS = ROMAS.reduce((dict, str, i) => {
  // power for 2 -> Math.floor(i / 2)
  // power for 5 -> Math.ceil(i / 2)
  dict[
    Math.pow(2, Math.floor(i / 2)) * Math.pow(5, Math.ceil(i / 2))
  ] = str
  return dict
}, {})

// 辅助函数
const duplicate = (str, count) =>
  Array.from({ length: count }, (v, i) => str).join('')

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(input) {
  const result = []

  let base = 10
  // 用于获取权位内的罗马字符
  let romaIndex = 0
  let num = input
  while (num) {
    // 依次从数字右端开始处理每个权位
    const remainder = num % base

    let section = NUMS[remainder]
    if (!section) {
      section = handleSection(
        // 把权位扁平为个位数，可以统一处理
        remainder / (base / 10),
        // 权位内的罗马字符，例如，10 以下是 [I, V, X]，100 以下是 [X, L, C]
        ROMAS.slice(romaIndex, romaIndex + 3)
      )
    }

    result.unshift(section)
    num = num - remainder
    base *= 10
    romaIndex += 2
  }

  return result.join('')
}

/**
 * @param {number} num, num = 2, 3, 4, 6, 7, 8, 9
 * @param {string[]} units, for example, [I, V, X]
 * @return {string}
 *
 * 原本权位的数字可能位于 [1, 10], [10, 100], [100, 1000]，但是我们现在把它扁平成了个位数。
 * 仅可能位于 [1, 10]
 * 又因为上一步对特殊值 1，5，10 进行了处理，所以 num 只可能在 2, 3, 4, 6, 7, 8, 9 之间
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
