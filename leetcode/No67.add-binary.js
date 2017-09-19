/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given two binary strings, return their sum (also a binary string).
 *
 * Example:
 * a = "11"
 * b = "1"
 * Return "100".
 *
 * 二进制求和
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var result = '';
  var i = 0;
  var lengthA = a.length - 1;
  var lengthB = b.length - 1;
  var upper = 0;

  while(i <= lengthA || i <= lengthB) {
    var indexA = lengthA - i;
    var indexB = lengthB - i;

    var valA = indexA >= 0 ? a[indexA] : 0;
    var valB = indexB >= 0 ? b[indexB] : 0;
    var val = Number(valA) + Number(valB) + upper;
    result = `${val % 2}${result}`;
    upper = val < 2 ? 0 : 1;
    i += 1;
  }

  if (upper) {
    result = `${upper}${result}`;
  }
  return result;
};