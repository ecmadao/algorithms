
// 基本数据准备
// 注意，对于例如 `一万亿` 这样的输入，当遍历到 `万` 时，需要寻找其下一位
const SECTIONS = {
  万: 10000,
  亿: 100000000,
  万亿: 1000000000000
}

const MAP = {
  十: 10,
  百: 100,
  千: 1000
}

const NUMS = '一二三四五六七八九'.split('').reduce((dict, val, index) => {
  dict[val] = index + 1
  return dict
}, {})

const ZERO = '零'

/**
 * @param {string} chinese
 * @return {number}
 */
const convert2Number = (chinese) => {
  console.log(` ======================== input: ${chinese} ======================== `)

  let result = 0
  if (!chinese.length) return result
  if (chinese === ZERO) return result

  // 遍历输入。保留一个小节缓存字段，每遍历到权位时，累加权位值并清空小节的缓存
  let tmp = [
    NUMS[chinese[0]]
  ]
  let i = 1
  while (i < chinese.length) {
    let str = chinese[i]
    // console.log(`result: ${result}, tmp: ${tmp}, str: ${str}`)
    // 零可以直接跳过
    if (str === ZERO) {
      i += 1
      continue
    }

    if (SECTIONS[str]) {
      // 处理小节权位。之前缓存的值 tmp，需要累加后和权位相乘
      if (SECTIONS[chinese[i + 1]]) {
        str = chinese.slice(i, i + 2)
        i += 1
      }
      result += tmp.reduce((n1, n2) => n1 + n2, 0) * SECTIONS[str]
      tmp = []
    } else if (MAP[str]) {
      // 处理小节内部权位，该内部权位仅对前一个数字有效，即 tmp 最后一位
      tmp.push(
        tmp.pop() * MAP[str]
      )
    } else {
      // 普通数字，缓存
      tmp.push(NUMS[str])
    }

    i += 1
  }

  return result + tmp.reduce((n1, n2) => n1 + n2, 0)
}

console.log(
  `convert2Number: 一 (1) -> ${convert2Number('一')}`
)
console.log(
  `convert2Number: 一十 (10) -> ${convert2Number('一十')}`
)
console.log(
  `convert2Number: 一百 (100) -> ${convert2Number('一百')}`
)
console.log(
  `convert2Number: 一千 (1000) -> ${convert2Number('一千')}`
)
console.log(
  `convert2Number: 一万零一百零一 (10101) -> ${convert2Number('一万零一百零一')}`
)
console.log(
  `convert2Number: 一万一千零一 (11001) -> ${convert2Number('一万一千零一')}`
)
console.log(
  `convert2Number: 一万 (10000) -> ${convert2Number('一万')}`
)
console.log(
  `convert2Number: 一千亿一千万 (100010000000) -> ${convert2Number('一千亿一千万')}`
)
console.log(
  `convert2Number: 一千亿 (100000000000) -> ${convert2Number('一千亿')}`
)
console.log(
  `convert2Number: 一万亿一千亿一千万 (1100010000000) -> ${convert2Number('一万亿一千亿一千万')}`
)
console.log(
  `convert2Number: 一千二百三十九万六千四百八十七 (12396487) -> ${convert2Number('一千二百三十九万六千四百八十七')}`
)
console.log(
  `convert2Number: 八亿一千二百三十九万六千四百八十七 (812396487) -> ${convert2Number('八亿一千二百三十九万六千四百八十七')}`
)
console.log(
  `convert2Number: 九万六千四百八十七 (96487) -> ${convert2Number('九万六千四百八十七')}`
)
console.log(
  `convert2Number: 二千万一千二百三十四 (20001234) -> ${convert2Number('二千万一千二百三十四')}`
)
console.log(
  `convert2Number: 二百亿零二百零二万零二百 (20002020200) -> ${convert2Number('二百亿零二百零二万零二百')}`
)