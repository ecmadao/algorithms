
const ROMAN = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
}

/**
 * @param {string} s
 * @return {number}
 */
const roman2Number = (roma) => {
  let result = 0

  let i = roma.length - 1
  while (i >= 0) {
    const str = roma[i]
    // 小的数位于大的数左边，则减
    // 另外根据规则 4，连续的左侧小数不会超过一个，因此只需要和右侧第一个数字比较即可
    if (ROMAN[str] < ROMAN[roma[i + 1]]) {
      result -= ROMAN[str]
    } else {
      // 否则加
      result += ROMAN[str]
    }
    i -= 1
  }
  return result
}
