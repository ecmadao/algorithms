/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * In an election, the i-th vote was cast for persons[i] at time times[i].
 * Now, we would like to implement the following query function:
 * TopVotedCandidate.q(int t) will return the number of the person that was leading the election at time t.
 * Votes cast at time t will count towards our query.  In the case of a tie, the most recent vote (among tied candidates) wins.
 *
 * Example:
 * Input: ["TopVotedCandidate","q","q","q","q","q","q"], [[[0,1,1,0,0,1,0],[0,5,10,15,20,25,30]],[3],[12],[25],[15],[24],[8]]
 * Output: [null,0,1,1,0,0,1]
 * Explanation:
 * At time 3, the votes are [0], and 0 is leading.
 * At time 12, the votes are [0,1,1], and 1 is leading.
 * At time 25, the votes are [0,1,1,0,0,1], and 1 is leading (as ties go to the most recent vote.)
 * This continues for 3 more queries at time 15, 24, and 8.
 *
 * Note:
 * 1. 1 <= persons.length = times.length <= 5000
 * 2. 0 <= persons[i] <= persons.length
 * 3. times is a strictly increasing array with all elements in [0, 10^9].
 * 4. TopVotedCandidate.q is called at most 10000 times per test case.
 * 5. TopVotedCandidate.q(int t) is always called with t >= times[0].
 *
 * 在选举中，第 i 张票是在时间为 times[i] 时投给 persons[i] 的。
 * 现在，我们想要实现下面的查询函数： TopVotedCandidate.q(int t) 将返回在 t 时刻主导选举的候选人的编号。
 * 在 t 时刻投出的选票也将被计入我们的查询之中。在平局的情况下，最近获得投票的候选人将会获胜。
 */

/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
  this.times = times
  this.cache = {}

  times.reduce((cache, time, i) => {
    const person = persons[i]
    cache.votes[person] = (cache.votes[person] || 0) + 1

    if (
      cache.top === null || cache.votes[person] >= cache.votes[cache.top]) {
      cache.top = person
    }
    this.cache[time] = cache.top
    return cache
  }, {
    votes: {},
    top: null
  })
}

/**
* @param {number} t
* @return {number}
*
* 二分法
*/
TopVotedCandidate.prototype.q = function(t) {
  let i = 0
  let j = this.times.length - 1

  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    if (this.times[mid] === t) {
      j = mid
      break
    } else if (this.times[mid] < t) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }

  return this.cache[this.times[j]]
}

/**
* Your TopVotedCandidate object will be instantiated and called as such:
* var obj = new TopVotedCandidate(persons, times)
* var param_1 = obj.q(t)
*/