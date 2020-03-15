/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given a date, return the corresponding day of the week for that date.
 * The input is given as three integers representing the day, month and year respectively.
 * Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.
 *
 * Example 1:
 * Input: day = 31, month = 8, year = 2019
 * Output: "Saturday"
 *
 * Example 2:
 * Input: day = 18, month = 7, year = 1999
 * Output: "Sunday"
 *
 * Example 3:
 * Input: day = 15, month = 8, year = 1993
 * Output: "Sunday"
 *
 * Constraints:
 * The given dates are valid dates between the years 1971 and 2100.
 *
 * 给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。
 * 输入为三个整数：day、month 和 year，分别表示日、月、年。
 * 您返回的结果必须是这几个值中的一个 {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}。
 */


/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
  const MONTH = [31,28,31,30,31,30,31,31,30,31,30,31]
  const WEEK = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]

  let days = day
  const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)

  for (let i = 1971; i < year; i += 1) days += (isLeapYear(i) ? 366 : 365)

  if (isLeapYear(year)) MONTH[1] = 29
  for (let i = 1; i < month; i += 1) days += MONTH[i - 1]

  if (days % 7 === 0) return WEEK.pop()
  return WEEK[days % 7 - 1]
}
