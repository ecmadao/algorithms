/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two integers representing the numerator and denominator of a fraction,
 * return the fraction in string format.
 * If the fractional part is repeating, enclose the repeating part in parentheses.
 *
 * Example:
 * Given numerator = 1, denominator = 2, return "0.5".
 * Given numerator = 2, denominator = 1, return "2".
 * Given numerator = 2, denominator = 3, return "0.(6)".
 */

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  const positive = (numerator * denominator) >= 0;
  const n = Math.abs(numerator);
  const d = Math.abs(denominator);
  let result = (positive ? '' : '-') + Math.floor(n / d);
  let remainder = Math.abs(n % d);
  if (remainder) result += '.';
  const tmp = {};

  while (remainder) {
    remainder = remainder * 10;
    let num;
    let rawRemainder = remainder;

    if (tmp[remainder] !== undefined && Number(tmp[remainder].join(''))) {
      num = tmp[remainder].join('');
      result = result.replace(new RegExp(`${num}$`), `(${num})`);
      break;
    }

    if (remainder >= d) {
      num = Math.floor(remainder / d);
      remainder = remainder % d;
    } else {
      num = '0';
    }

    tmp[rawRemainder] = [num];
    const keys = Object.keys(tmp);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (key != rawRemainder) tmp[key].push(num);
    }

    result += num;
  }

  return result;
};


fractionToDecimal(1, 99) // 0.01010101 -> 0.(01)
fractionToDecimal(1, 90) // 0.011111111 -> 0.0(1)
fractionToDecimal(1, 17) // 0.058823529 -> 0.(058823529)
fractionToDecimal(-50, 8) // -6.25 -> -6.25
