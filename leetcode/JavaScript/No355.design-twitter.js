/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Design a simplified version of Twitter where users can post tweets, follow/unfollow another user and is able to see the 10 most recent tweets in the user's news feed.
 * Your design should support the following methods:
 * 1. postTweet(userId, tweetId): Compose a new tweet.
 * 2. getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * 3. follow(followerId, followeeId): Follower follows a followee.
 * 4. unfollow(followerId, followeeId): Follower unfollows a followee.
 *
 * Example:
 * Twitter twitter = new Twitter();
 * // User 1 posts a new tweet (id = 5).
 * twitter.postTweet(1, 5);
 * // User 1's news feed should return a list with 1 tweet id -> [5].
 * twitter.getNewsFeed(1);
 * // User 1 follows user 2.
 * twitter.follow(1, 2);
 * // User 2 posts a new tweet (id = 6).
 * twitter.postTweet(2, 6);
 * // User 1's news feed should return a list with 2 tweet ids -> [6, 5].
 * // Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
 * twitter.getNewsFeed(1);
 * // User 1 unfollows user 2.
 * twitter.unfollow(1, 2);
 * // User 1's news feed should return a list with 1 tweet id -> [5],
 * // since user 1 is no longer following user 2.
 * twitter.getNewsFeed(1);
 *
 * 设计一个简化版的推特(Twitter)，可以让用户实现发送推文，关注/取消关注其他用户，能够看见关注人（包括自己）的最近十条推文。你的设计需要支持以下的几个功能：
 * 1. postTweet(userId, tweetId): 创建一条新的推文
 * 2. getNewsFeed(userId): 检索最近的十条推文。每个推文都必须是由此用户关注的人或者是用户自己发出的。推文必须按照时间顺序由最近的开始排序。
 * 3. follow(followerId, followeeId): 关注一个用户
 * 4. unfollow(followerId, followeeId): 取消关注一个用户
 */

/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.user = new Map()
  this.post = []
};

/**
* Compose a new tweet.
* @param {number} userId
* @param {number} tweetId
* @return {void}
*/
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.follow(userId, userId)
  this.post.push({
      uid: userId,
      tid: tweetId
  })
};

/**
* Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
* @param {number} userId
* @return {number[]}
*/
Twitter.prototype.getNewsFeed = function(userId) {
  const result = []
  const set = this.user.get(userId) || new Set()

  let i = this.post.length - 1
  while (i >= 0 && result.length < 10) {
    const post = this.post[i]
    if (set.has(post.uid)) {
      result.push(post.tid)
    }
    i -= 1
  }
  return result
};

/**
* Follower follows a followee. If the operation is invalid, it should be a no-op.
* @param {number} followerId
* @param {number} followeeId
* @return {void}
*/
Twitter.prototype.follow = function(followerId, followeeId) {
  const set = this.user.get(followerId) || new Set()
  set.add(followeeId)
  this.user.set(followerId, set)
};

/**
* Follower unfollows a followee. If the operation is invalid, it should be a no-op.
* @param {number} followerId
* @param {number} followeeId
* @return {void}
*/
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (followerId === followeeId) return
  const set = this.user.get(followerId) || new Set()
  set.delete(followeeId)
  this.user.set(followerId, set)
};

/**
* Your Twitter object will be instantiated and called as such:
* var obj = new Twitter()
* obj.postTweet(userId,tweetId)
* var param_2 = obj.getNewsFeed(userId)
* obj.follow(followerId,followeeId)
* obj.unfollow(followerId,followeeId)
*/
