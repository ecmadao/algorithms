/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given two numbers, hour and minutes.
 * Return the smaller angle (in sexagesimal units) formed between the hour and the minute hand.
 *
 * Example 1:
 * Input: hour = 12, minutes = 30
 * Output: 165
 *
 * Example 2:
 * Input: hour = 3, minutes = 30
 * Output: 75
 *
 * Example 3:
 * Input: hour = 3, minutes = 15
 * Output: 7.5
 *
 * Example 4:
 * Input: hour = 4, minutes = 50
 * Output: 155
 *
 * Example 5:
 * Input: hour = 12, minutes = 0
 * Output: 0
 *
 * Constraints:
 * 1. 1 <= hour <= 12
 * 2. 0 <= minutes <= 59
 * 3. Answers within 10^-5 of the actual value will be accepted as correct.
 *
 * 给你两个数 hour 和 minutes 。请你返回在时钟上，由给定时间的时针和分针组成的较小角的角度（60 单位制）。
 */

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
  const h = (minutes / 60) + (hour === 12 ? 0 : hour)

  const hAngle = h / 12
  const mAngle = minutes / 60

  if (mAngle <= hAngle) {
    return Math.min(
      hAngle - mAngle,
      (1 - hAngle) + mAngle
    ) * 360
  }

  return Math.min(
    mAngle - hAngle,
    (1 - mAngle) + hAngle
  ) * 360
}
