/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Implement the class TweetCounts that supports two methods:
 * 1. recordTweet(string tweetName, int time)
 *  - Stores the tweetName at the recorded time (in seconds).
 * 2. getTweetCountsPerFrequency(string freq, string tweetName, int startTime, int endTime)
 *  - Returns the total number of occurrences for the given tweetName per minute, hour, or day (depending on freq) starting from the startTime (in seconds) and ending at the endTime (in seconds).
 *  - freq is always minute, hour or day, representing the time interval to get the total number of occurrences for the given tweetName.
 *  - The first time interval always starts from the startTime, so the time intervals are [startTime, startTime + delta*1>,  [startTime + delta*1, startTime + delta*2>, [startTime + delta*2, startTime + delta*3>, ... , [startTime + delta*i, min(startTime + delta*(i+1), endTime + 1)> for some non-negative number i and delta (which depends on freq).  
 *
 * Example:
 * Input
 * ["TweetCounts","recordTweet","recordTweet","recordTweet","getTweetCountsPerFrequency","getTweetCountsPerFrequency","recordTweet","getTweetCountsPerFrequency"]
 * [[],["tweet3",0],["tweet3",60],["tweet3",10],["minute","tweet3",0,59],["minute","tweet3",0,60],["tweet3",120],["hour","tweet3",0,210]]
 *
 * Output
 * [null,null,null,null,[2],[2,1],null,[4]]
 *
 * Explanation
 * TweetCounts tweetCounts = new TweetCounts();
 * tweetCounts.recordTweet("tweet3", 0);
 * tweetCounts.recordTweet("tweet3", 60);
 * tweetCounts.recordTweet("tweet3", 10);                             // All tweets correspond to "tweet3" with recorded times at 0, 10 and 60.
 * tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 59); // return [2]. The frequency is per minute (60 seconds), so there is one interval of time: 1) [0, 60> - > 2 tweets.
 * tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 60); // return [2, 1]. The frequency is per minute (60 seconds), so there are two intervals of time: 1) [0, 60> - > 2 tweets, and 2) [60,61> - > 1 tweet.
 * tweetCounts.recordTweet("tweet3", 120);                            // All tweets correspond to "tweet3" with recorded times at 0, 10, 60 and 120.
 * tweetCounts.getTweetCountsPerFrequency("hour", "tweet3", 0, 210);  // return [4]. The frequency is per hour (3600 seconds), so there is one interval of time: 1) [0, 211> - > 4 tweets.
 *
 * Constraints:
 * 1. There will be at most 10000 operations considering both recordTweet and getTweetCountsPerFrequency.
 * 2. 0 <= time, startTime, endTime <= 10^9
 * 3. 0 <= endTime - startTime <= 10^4
 *
 * 请你实现一个能够支持以下两种方法的推文计数类 TweetCounts：
 * 1. recordTweet(string tweetName, int time)
 *  - 记录推文发布情况：用户 tweetName 在 time（以 秒 为单位）时刻发布了一条推文。
 * 2. getTweetCountsPerFrequency(string freq, string tweetName, int startTime, int endTime)
 *  - 返回从开始时间 startTime（以 秒 为单位）到结束时间 endTime（以 秒 为单位）内，每 分 minute，时 hour 或者 日 day （取决于 freq）内指定用户 tweetName 发布的推文总数。
 *  - freq 的值始终为 分 minute，时 hour 或者 日 day 之一，表示获取指定用户 tweetName 发布推文次数的时间间隔。
 *  - 第一个时间间隔始终从 startTime 开始，因此时间间隔为 [startTime, startTime + delta*1>,  [startTime + delta*1, startTime + delta*2>, [startTime + delta*2, startTime + delta*3>, ... , [startTime + delta*i, min(startTime + delta*(i+1), endTime + 1)>，其中 i 和 delta（取决于 freq）都是非负整数。
 */

var TweetCounts = function() {
  this.map = new Map()
};

/**
* @param {number[]} times
* @param {number} time
* @return {number}
*/
TweetCounts.prototype.search = function(times, time) {
  if (!times.length) return 0

  let i = 0
  let j = times.length - 1
  if (times[i] > time) return i
  if (times[j] < time) return j + 1

  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    if (times[mid] === time) return mid
    if (times[mid] < time) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }
  return i
}

/**
* @param {string} tweetName
* @param {number} time
* @return {void}
*/
TweetCounts.prototype.recordTweet = function(tweetName, time) {
  const list = this.map.get(tweetName) || []
  const index = this.search(list, time)
  list.splice(index, 0, time)

  this.map.set(tweetName, list)
};

/**
* @param {string} freq
* @param {string} tweetName
* @param {number} startTime
* @param {number} endTime
* @return {number[]}
*/
TweetCounts.prototype.getTweetCountsPerFrequency = function(freq, tweetName, startTime, endTime) {
  const times = this.map.get(tweetName) || []

  let delta
  switch (freq) {
    case 'minute':
      delta = 60
      break
    case 'hour':
      delta = 60 * 60
      break
    case 'day':
      delta = 24 * 60 * 60
      break
  }

  const result = []
  let index = this.search(times, startTime)
  let start = startTime

  while (index < times.length && start <= endTime && times[index] <= endTime) {
    let i = index
    while (i < times.length && start <= times[i] && times[i] < Math.min(start + delta, endTime + 1)) i += 1
    result.push(i - index)
    index = i
    start += delta
  }

  for (let i = start; i <= endTime; i += delta) result.push(0)
  return result
};

/**
* Your TweetCounts object will be instantiated and called as such:
* var obj = new TweetCounts()
* obj.recordTweet(tweetName,time)
* var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
*/