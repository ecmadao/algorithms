
const NUMS = '一二三四五六七八九'.split('')
NUMS.unshift('')

const UNITS = '千百十'.split('')
UNITS.push('')

const SECTION_UNITS = ['', '万', '亿', '万亿']
const ZERO = '零'

/**
 * @param {number} input
 * @return {string}
 */
const number2Chinese = (input) => {
  console.log(` ======================== input: ${input} ======================== `)

  if (input < 0) return ''
  if (input === 0) return ZERO

  let num = input
  let index = 0
  const results = []

  while (num) {
    // 获取小节，例如 20001010200 的尾部小节为 200
    let section = `${num % 10000}`
    // 补全为四位数字，例如 200 补位 0200
    section = section.length < 4
      ? `${Array.from({ length: 4 - section.length }, (v, i) => 0).join('')}${section}`
      : section

    const chinese = handleSection(section)
    // console.log(
    //   [
    //     `num: ${num}, section: ${section} ->`,
    //     `\tchinese: ${chinese}, unit: ${SECTION_UNITS[index]}`,
    //     `\tcurrent results: [${results}], next: ${Math.floor(num / 10000)}`
    //   ].join('\n')
    // )
    if (chinese) {
      results.unshift(chinese, SECTION_UNITS[index])
    }

    index += 1
    num = Math.floor(num / 10000)

    if (section[0] === '0' && chinese && num) {
      results.unshift(ZERO)
    }
  }

  return results.join('')
}

/**
 * @param {string} section
 * @return {string}
 */
const handleSection = (section) => {
  let i = 0

  const results = []
  while (i < section.length) {
    const str = section[i]
    if (str === '0') {
      i += 1
      continue
    }

    if (i > 1 && section[i - 1] === '0' && results.length) {
      results.push(ZERO)
    }
    results.push(NUMS[str], UNITS[i])
    i += 1
  }

  return results.join('')
}

console.log(
  // 一
  `number2Chinese: 1 (一) -> ${number2Chinese('1')}`
)
console.log(
  // 一十
  `number2Chinese: 10 (一十) -> ${number2Chinese('10')}`
)
console.log(
  // 一百
  `number2Chinese: 100 (一百) -> ${number2Chinese('100')}`
)
console.log(
  // 一千
  `number2Chinese: 1000 (一千) -> ${number2Chinese('1000')}`
)
console.log(
  // 一万零一百零一
  `number2Chinese: 10101 (一万零一百零一) -> ${number2Chinese('10101')}`
)
console.log(
  // 一万一千零一
  `number2Chinese: 11001 (一万一千零一) -> ${number2Chinese('11001')}`
)
console.log(
  // 一万
  `number2Chinese: 10000 (一万) -> ${number2Chinese('10000')}`
)
console.log(
  // 一千亿一千万
  `number2Chinese: 100010000000 (一千亿一千万) -> ${number2Chinese('100010000000')}`
)
console.log(
  // 一千亿
  `number2Chinese: 100000000000 (一千亿) -> ${number2Chinese('100000000000')}`
)
console.log(
  // 一万亿一千亿一千万
  `number2Chinese: 1100010000000 (一万亿一千亿一千万) -> ${number2Chinese('1100010000000')}`
)
console.log(
  // 一千二百三十九万六千四百八十七
  `number2Chinese: 12396487 (一千二百三十九万六千四百八十七) -> ${number2Chinese('12396487')}`
)
console.log(
  // 八亿一千二百三十九万六千四百八十七
  `number2Chinese: 812396487 (八亿一千二百三十九万六千四百八十七) -> ${number2Chinese('812396487')}`
)
console.log(
  // 九万六千四百八十七
  `number2Chinese: 96487 (九万六千四百八十七) -> ${number2Chinese('96487')}`
)
console.log(
  // 二千万一千二百三十四
  `number2Chinese: 20001234 (二千万一千二百三十四) -> ${number2Chinese('20001234')}`
)
console.log(
  // 二百亿零二百零二万零二百
  `number2Chinese: 20002020200 (二百亿零二百零二万零二百) -> ${number2Chinese('20002020200')}`
)
