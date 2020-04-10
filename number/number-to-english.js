/**
 * Desc:
 * 给定一个整数，打印该整数的英文描述。
 * 
 * 示例 1:
 * 输入: 123
 * 输出: "One Hundred Twenty Three"
 * 
 * 示例 2:
 * 输入: 12345
 * 输出: "Twelve Thousand Three Hundred Forty Five"
 * 
 * 示例 3:
 * 输入: 1234567
 * 输出: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 * 
 * 示例 4:
 * 输入: 1234567891
 * 输出: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
 */

/**
 * @param {number} num
 * @return {string}
 */
var numberToEnglish = function(num) {
  if (!num) return 'Zero'
  const sections = ['Billiard', 'Billion', 'Million', 'Thousand', '']
  const numbers = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
  'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
  const map = {
    2: 'Twenty',
    3: 'Thirty',
    4: 'Forty',
    5: 'Fifty',
    6: 'Sixty',
    7: 'Seventy',
    8: 'Eighty',
    9: 'Ninety'
  }

  const handleSection = (n) => {
    if (n <= 19) return numbers[n]
    if (n < 100) return [map[Math.floor(n / 10)], numbers[n % 10]].filter(i => i).join(' ')
    return [numbers[Math.floor(n / 100)], 'Hundred', handleSection(n % 100)].filter(i => i).join(' ')
  }

  const res = []
  while (num) {
    const section = num % 1000

    let formatted = handleSection(section)
    const unit = sections.pop()
    if (formatted && unit) formatted += ` ${unit}`
    if (formatted) res.unshift(formatted)

    num = Math.floor(num / 1000)
  }

  return res.join(' ')
}

