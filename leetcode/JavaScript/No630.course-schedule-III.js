/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * There are n different online courses numbered from 1 to n.
 * Each course has some duration(course length) t and closed on dth day. A course should be taken continuously for t days and must be finished before or on the dth day. You will start at the 1st day.
 * Given n online courses represented by pairs (t,d), your task is to find the maximal number of courses that can be taken.
 *
 * Example:
 * Input: [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]
 * Output: 3
 * Explanation:
 * There're totally 4 courses, but you can take 3 courses at most:
 * First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
 * Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day.
 * Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day.
 * The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date.
 *
 * Note:
 * The integer 1 <= d, t, n <= 10,000.
 * You can't take two courses simultaneously.
 *
 * 这里有 n 门不同的在线课程，他们按从 1 到 n 编号。每一门课程有一定的持续上课时间（课程时间）t 以及关闭时间第 d 天。一门课要持续学习 t 天直到第 d 天时要完成，你将会从第 1 天开始。
 * 给出 n 个在线课程用 (t, d) 对表示。你的任务是找出最多可以修几门课
 */

/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function(courses) {
  courses.sort((c1, c2) => c1[1] - c2[1])

  let count = 0
  let time = 0

  const queue = []
  const inQueue = (val) => {
    let i = 0
    while (i < queue.length && queue[i] > val) i += 1
    queue.splice(i, 0, val)
  }

  for (let i = 0; i < courses.length; i += 1) {
    const [dur, end] = courses[i]
    if (time <= (end - dur)) {
      count += 1
      time += dur
      inQueue(dur)
    } else if (queue.length && queue[0] > dur) {
      time = time - queue.shift() + dur
      inQueue(dur)
    }
  }

  return count
}


// [200,300], [50,200]

// [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]
// [[100, 200], [1000, 1250], [200, 1300], [2000, 3200]]

// [[100, 200], [200, 400], [1000, 1250], [200, 1300], [2000, 3200]]