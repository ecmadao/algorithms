/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.
 *
 * Example1:
 * Input: [[0,30],[5,10],[15,20]]
 * Output: false
 *
 * Example2:
 * Input: [[7,10],[2,4]]
 * Output: true
 */

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  intervals.sort((i1, i2) => i1[0] - i2[0])

  for (let i = 1; i < intervals.length; i += 1) {
    const interval = intervals[i]
    if (interval[0] < intervals[i - 1][1]) return false
  }
  return true
}
