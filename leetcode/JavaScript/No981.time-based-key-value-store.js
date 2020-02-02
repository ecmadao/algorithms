/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Create a timebased key-value store class TimeMap, that supports two operations.
 * 1. set(string key, string value, int timestamp)
 *    Stores the key and value, along with the given timestamp.
 * 2. get(string key, int timestamp)
 *    Returns a value such that set(key, value, timestamp_prev) was called previously, with timestamp_prev <= timestamp.
 *    If there are multiple such values, it returns the one with the largest timestamp_prev.
 *    If there are no values, it returns the empty string ("").
 *
 * Example1:
 * Input: inputs = ["TimeMap","set","get","get","set","get","get"], inputs = [[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]
 * Output: [null,null,"bar","bar",null,"bar2","bar2"]
 * Explanation:
 * TimeMap kv;
 * kv.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1
 * kv.get("foo", 1);  // output "bar"
 * kv.get("foo", 3); // output "bar" since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 ie "bar"
 * kv.set("foo", "bar2", 4);
 * kv.get("foo", 4); // output "bar2"
 * kv.get("foo", 5); //output "bar2"
 *
 * Example2:
 * Input: inputs = ["TimeMap","set","set","get","get","get","get","get"], inputs = [[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]
 * Output: [null,null,null,"","high","high","low","low"]
 *
 * Note:
 * 1. All key/value strings are lowercase.
 * 2. All key/value strings have length in the range [1, 100]
 * 3. The timestamps for all TimeMap.set operations are strictly increasing.
 * 4. 1 <= timestamp <= 10^7
 * 5. TimeMap.set and TimeMap.get functions will be called a total of 120000 times (combined) per test case.
 *
 * 创建一个基于时间的键值存储类 TimeMap，它支持下面两个操作：
 * 1. set(string key, string value, int timestamp)
 *    存储键 key、值 value，以及给定的时间戳 timestamp。
 * 2. get(string key, int timestamp)
 *    返回先前调用 set(key, value, timestamp_prev) 所存储的值，其中 timestamp_prev <= timestamp。
 *    如果有多个这样的值，则返回对应最大的  timestamp_prev 的那个值。
 *    如果没有值，则返回空字符串（""）
 */

/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
  this.map = {}
}

/**
* @param {string} key
* @param {string} value
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.map[key]) this.map[key] = []
  this.map[key].push({ value, timestamp })
}

/**
* @param {string} key
* @param {number} timestamp
* @return {string}
* 二分法
*/
TimeMap.prototype.get = function(key, timestamp) {
  const list = this.map[key]
  if (!list || !list.length) return ''

  let i = 0
  let j = list.length - 1
  while (i <= j) {
    const mid = Math.floor((i + j) / 2)
    if (list[mid].timestamp === timestamp) return list[mid].value
    if (list[mid].timestamp < timestamp) i = mid + 1
    if (list[mid].timestamp > timestamp) j = mid - 1
  }

  return j >= 0 ? list[j].value : ''
}

/**
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/
