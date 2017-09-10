/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Divide two integers without using multiplication, division and mod operator.
 * If it is overflow, return MAX_INT.
 *
 * Example:
 * dividend -> 13, divisor -> 3
 * return -> 4
 *
 * 求两数相除得到到整数，不能直接使用 '/', '*', '%'
 */

/*
 * 思路：
 * 既然不让用乘除或者求余，那只能使用减法了
 * 每次让被除数减去除数，直到结果小于等于零为止，操作的次数即要求的结果
 * 但是如果被除数很大而除数很小的话，这样操作效率会很低，因此我们需要对除数进行放大，然后依次降低其方法的倍数
 */

var subtract = function(main, num, multiple) {
  if (num === 1) {
    return {
      count: main,
      remainder: 0,
    };
  }
  multiple = multiple || 1;
  var result = main;
  var count = 0;
  var remainder = main;
  var minuend = num * multiple;
  while(result >= 0) {
    result = result - minuend;
    if (result >= 0) {
      remainder = result;
      count += 1;
    }
  }
  return {
    count: count * multiple,
    remainder: remainder
  };
};

var getSymbol = function(num) {
  return num >= 0 ? 1 : -1;
};

/**
* @param {number} dividend
* @param {number} divisor
* @return {number}
*/
var divide = function(dividend, divisor) {
  var symbol = getSymbol(dividend) * getSymbol(divisor);
  var main = Math.abs(dividend);
  var reduction = Math.abs(divisor);
  var count = 0;
  // i 代表放大倍数，它决定了算法效率
  // 如果 i 较小，而被除数很大除数很小，则效率低；
  // 如果 i 较大，而被除数和除数之间没有差距那么大，则效率也不高
  for (var i = 800; i > 0; i -= 1) {
    var result = subtract(main, reduction, i);
    count += result.count;
    main = result.remainder;
    if (main <= 0) break;
  }

  count = count * symbol;
  // 很操蛋的事情又来了
  // 需要特殊处理 int 32 位最大/最小值的问题
  // 然而在 JS 中只有 64 位 float
  count = count > 2147483647 ? 2147483647 : count;
  count = count < -2147483648 ? -2147483648 : count;
  return count;
};