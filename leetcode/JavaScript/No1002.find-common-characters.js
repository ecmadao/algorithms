/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).
 * For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: ["bella","label","roller"]
 * Output: ["e","l","l"]
 *
 * Example 2:
 * Input: ["cool","lock","cook"]
 * Output: ["c","o"]
 *
 * Note:
 * 1. 1 <= A.length <= 100
 * 2. 1 <= A[i].length <= 100
 * 3. A[i][j] is a lowercase letter
 *
 * 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。
 * 例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
 * 你可以按任意顺序返回答案。
 */

/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = (A) => {
  const dict = A[0].split('').reduce((m, char) => {
    m[char] = (m[char] || 0) + 1
    return m
  }, {})

  for (let i = 1; i < A.length; i += 1) {
    const map = A[i].split('').reduce((m, char) => {
      if (!dict[char]) return m
      m[char] = (m[char] || 0) + 1
      return m
    }, {})

    for (const key of Object.keys(dict)) {
      if (!map[key]) delete dict[key]
      dict[key] = Math.min(map[key], dict[key])
    }
    if (!Object.keys(dict).length) return []
  }

  return Object.keys(dict).reduce((list, key) => {
    list.push(
      ...Array.from({ length: dict[key] }, (_, i) => key)
    )
    return list
  }, [])
}
