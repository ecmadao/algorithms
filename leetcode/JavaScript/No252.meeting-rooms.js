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
 *
 * 给定一个会议时间安排的数组，每个会议时间都会包括开始和结束的时间 [[s1,e1],[s2,e2],...] (si < ei)，请你判断一个人是否能够参加这里面的全部会议
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
