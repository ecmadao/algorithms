## 数字格式转换问题

### 罗马数字 - 阿拉伯数字相互转换

#### 罗马数字的特点

1. 罗马数字共有7个，即I（1）、V（5）、X（10）、L（50）、C（100）、D（500）和M（1000）
2. 重复数次：一个罗马数字重复几次，就表示这个数的几倍
3. 同一数码最多只能连续出现三次，如`40`不可表示为`XXXX`，而要表示为`XL`
4. 右加左减：
  - 在较大的罗马数字的右边记上较小的罗马数字，表示大数字加小数字
  - 在较大的罗马数字的左边记上较小的罗马数字，表示大数字减小数字
  - 左减的数字有限制，仅限于`I`、`X`、`C`。比如`45`不可以写成`VL`，只能是`XLV`
  - 但是，左减时不可跨越一个位值。比如，`99`不可以用`IC`表示，而是用`XCIX`表示
  - **左减数字最多为一位**，比如`8`写成`VIII`，而非`IIX`
  - **右加数字不可连续超过三位**，比如`14`写成`XIV`，而非`XIIII`

#### 阿拉伯数字 -> 罗马数字

#### 罗马数字 -> 阿拉伯数字

从右到左依次遍历罗马字符。根据规则 4，如果当前字符代表的数字，小于右侧字符代表的数字，则应做减法；否则做加法

```javascript
const ROMAN = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
}

const roman2Number = (roma) => {
  let result = 0

  let i = roma.length - 1
  while (i >= 0) {
    const str = roma[i]
    if (ROMAN[str] < ROMAN[roma[i + 1]]) {
      // 小的数位于大的数左边，则减
      // 另外根据规则 4，连续的左侧小数不会超过一个，因此只需要和右侧第一个数字比较即可
      result -= ROMAN[str]
    } else {
      // 否则加
      result += ROMAN[str]
    }
    i -= 1
  }
  return result
}
```

### 中文数字 - 阿拉伯数字相互转换

#### 中文数字的特点

1. 中文数字的权位和小节
  - 以一万，即 10000 为小节，每小节拥有一个权位，权位最低为`万`，依次是`万`，`亿`，`万亿`。`万`以下的小节没有权位。例如，
    - 数字`20002020200`每四个为一个小节，分为`200 0202 0200`，中文为`二百亿零二百零二万零二百`
    - 数字`20001234`分为`2000 1234`，中文为`二千万一千二百三十四`
  - 小节内部，拥有`十`、`百`、`千`的权位。例如，数字`1111`本身是一个小节，中文为`一千一百一十一`
  - 小节内部的`十`、`百`、`千`不能连续出现，但内部权位可以和外部的`万`等权位连续出现。例如，`二十万`

2. 中文数字内的零
  - 10000 为小节，小节结尾即便是`0`，也不使用`零`。例如：`1000`是`一千`
  - **小节内部**，两个非零数字之间如果有 0，合并时要使用`零`。例如，`1070`是`一千零七十`
  - 当小节的`千`位是 0 时，若本小节的左侧一小节无其他数字，则不用`零`，否则就要用`零`。例如，`10700`是`一万零七百`，而`0100`则是`一百`

#### 阿拉伯数字 -> 中文数字

遍历，分割成各个小节进行处理：

```javascript
const NUMS = '一二三四五六七八九'.split('')
NUMS.unshift('')

// 小节的权位
const SECTION_UNITS = ['', '万', '亿', '万亿']

// const input = 20002020200
const convert2Chinese = (input) => {
  let num = input
  let index = 0
  const results = []

  // 按照上述规则，一个小节一个小节处理
  while (num) {
    // 获取小节，例如 20001010200 的尾部小节为 200
    let section = `${num % 10000}`
    // 补全为四位数字，例如 200 补位 0200
    section = section.length < 4
      ? `${Array.from({ length: 4 - section.length }, (v, i) => 0).join('')}${section}`
      : section

    // 处理小节内部
    const chinese = handleSection(section)
    if (chinese) {
      // 如果小节不是 0000，则该小节需要加入小节权位
      results.unshift(chinese, SECTION_UNITS[index])
    }

    index += 1
    num = Math.floor(num / 10000)

    // 根据零的规则 3，当小节的`千`位是 0 时，若本小节的左侧一小节无其他数字，则不用`零`，否则就要用`零`
    if (section[0] === '0' && chinese && num) {
      results.unshift('零')
    }
  }

  return results.join('')
}
```

处理小节内部转换：

```javascript
// 小节内部的权位
const UNITS = '千百十'.split('')
UNITS.push('')

const handleSection = (section) => {
  let i = 0

  const results = []
  while (i < section.length) {
    const str = section[i]
    // 0 都跳过，同时保证了如果小节结尾即便是`0`，也不使用`零`
    if (str === '0') {
      i += 1
      continue
    }

    // 根据零的规则 2，小节内部，两个非零数字之间如果有 0，合并时要使用`零`
    if (i > 1 && section[i - 1] === '0' && results.length) {
      results.push('零')
    }
    results.push(NUMS[str], UNITS[i])
    i += 1
  }

  return results.join('')
}
```

#### 中文数字 -> 阿拉伯数字

中文数字转阿拉伯数字比较简单。遍历到权位之后进位即可

基本数据准备

```javascript
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
```

遍历输入。保留一个小节缓存字段，每遍历到权位时，累加权位值并清空小节的缓存

```javascript
const convert2Number = (chinese) => {
  let result = 0
  if (!chinese.length) return result
  if (chinese === ZERO) return result

  let tmp = [
    NUMS[chinese[0]]
  ]
  let i = 1
  while (i < chinese.length) {
    let str = chinese[i]

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
```
