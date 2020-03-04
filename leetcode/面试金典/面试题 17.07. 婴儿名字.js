/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 每年，政府都会公布一万个最常见的婴儿名字和它们出现的频率，也就是同名婴儿的数量。
 * 有些名字有多种拼法，例如，John 和 Jon 本质上是相同的名字，但被当成了两个名字公布出来。
 * 给定两个列表，一个是名字及对应的频率，另一个是本质相同的名字对。设计一个算法打印出每个真实名字的实际频率。
 * 注意，如果 John 和 Jon 是相同的，并且 Jon 和 Johnny 相同，则 John 与 Johnny 也相同，即它们有传递和对称性。
 * 在结果列表中，选择字典序最小的名字作为真实名字。
 *
 * 示例：
 * 输入：names = ["John(15)","Jon(12)","Chris(13)","Kris(4)","Christopher(19)"], synonyms = ["(Jon,John)","(John,Johnny)","(Chris,Kris)","(Chris,Christopher)"]
 * 输出：["John(27)","Chris(36)"]
 *
 * 提示：
 * names.length <= 100000
 */


const union = (map, w1, w2) => {
  if (w1 === w2) return
  while (map[w1] !== w1) w1 = map[w1]
  while (map[w2] !== w2) w2 = map[w2]

  if (w1 < w2) {
    map[w2] = w1
  } else {
    map[w1] = w2
  }
}

/**
* @param {string[]} names
* @param {string[]} synonyms
* @return {string[]}
*/
var trulyMostPopular = function(names, synonyms) {
  const map = {}

  for (const pair of synonyms) {
    const [n1, n2] = pair.split(',')
    const w1 = n1.slice(1)
    const w2 = n2.slice(0, -1)
    if (!map[w1]) map[w1] = w1
    if (!map[w2]) map[w2] = w2

    union(map, w1, w2)
  }

  const cache = new Map()

  for (const name of names) {
    const [w, n] = name.split('(')
    const count = Number(n.slice(0, -1))

    let word = w
    while (map[word] && map[word] !== word) word = map[word]

    cache.set(word, (cache.get(word) || 0) + count)
  }

  const result = []
  for (const [name, count] of cache.entries()) {
    result.push(`${name}(${count})`)
  }
  return result
}
