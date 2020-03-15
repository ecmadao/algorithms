/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Implement a SnapshotArray that supports the following interface:
 * 1. SnapshotArray(int length) initializes an array-like data structure with the given length.  Initially, each element equals 0.
 * 2. void set(index, val) sets the element at the given index to be equal to val.
 * 3. int snap() takes a snapshot of the array and returns the snap_id: the total number of times we called snap() minus 1.
 * 4. int get(index, snap_id) returns the value at the given index, at the time we took the snapshot with the given snap_id
 *
 * Example 1:
 * Input: ["SnapshotArray","set","snap","set","get"]
 * [[3],[0,5],[],[0,6],[0,0]]
 * Output: [null,null,0,null,5]
 * Explanation:
 * SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3
 * snapshotArr.set(0,5);  // Set array[0] = 5
 * snapshotArr.snap();  // Take a snapshot, return snap_id = 0
 * snapshotArr.set(0,6);
 * snapshotArr.get(0,0);  // Get the value of array[0] with snap_id = 0, return 5
 *
 * Constraints:
 * 1. 1 <= length <= 50000
 * 2. At most 50000 calls will be made to set, snap, and get.
 * 3. 0 <= index < length
 * 4. 0 <= snap_id < (the total number of times we call snap())
 * 5. 0 <= val <= 10^9
 *
 * 实现支持下列接口的「快照数组」- SnapshotArray：
 * 1. SnapshotArray(int length) - 初始化一个与指定长度相等的 类数组 的数据结构。初始时，每个元素都等于 0。
 * 2. void set(index, val) - 会将指定索引 index 处的元素设置为 val。
 * 3. int snap() - 获取该数组的快照，并返回快照的编号 snap_id（快照号是调用 snap() 的总次数减去 1）。
 * 4. int get(index, snap_id) - 根据指定的 snap_id 选择快照，并返回该快照指定索引 index 的值。
 */

/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
  this.values = {}
  this.snaps = []
}

/**
* @param {number} index
* @param {number} val
* @return {void}
*/
SnapshotArray.prototype.set = function(index, val) {
  this.values[index] = val
}

/**
* @return {number}
*/
SnapshotArray.prototype.snap = function() {
  this.snaps.push(
    Object.assign({}, this.values)
  )
  this.values = {}
  return this.snaps.length - 1
}

/**
* @param {number} index
* @param {number} snap_id
* @return {number}
*/
SnapshotArray.prototype.get = function(index, snap_id) {
  for (let i = snap_id; i >= 0; i -= 1) {
    if (this.snaps[i][index] !== undefined) return this.snaps[i][index]
  }
  return 0
}

/**
* Your SnapshotArray object will be instantiated and called as such:
* var obj = new SnapshotArray(length)
* obj.set(index,val)
* var param_2 = obj.snap()
* var param_3 = obj.get(index,snap_id)
*/