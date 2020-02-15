/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of non-negative integers,
 * you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 *
 * Example:
 * A = [2,3,1,1,4], return true.
 * A = [3,2,1,0,4], return false.
 *
 * 给出一个数组，数组内的数字 >= 0，每个数字代表当处于当前位置时，最远可以向后跳跃的距离
 * 求判断你是否可以跳跃到数组尾部
 */

/**
 * 思路：
 * 明显当数组内不包含 0，或者数组长度仅为 1，或者 0 只位于数组最后一位时，可以跳跃到数组尾部
 * 而数组内有 0 时，则需要专门进行判断：
 * 0 所在的位置之前的元素，如果存在某个元素，从它开心向后跳跃，其最远的跳跃距离可以超过 0 所在的位置，
 * 则当前数组段是可以跳跃到尾部的
 * 针对数组内全部的 0 都进行这样的处理，则可以判断出是否能够跳跃到尾部（如果已经判读出可以/不能跳跃，则要及时截断循环）
 */

var getZeroIndexs = function(nums) {
  var results = [];
  var zeroIndex = nums.indexOf(0);
  while(zeroIndex !== -1) {
    results.push(zeroIndex);
    var tempIndex = nums.slice(zeroIndex + 1).indexOf(0);
    zeroIndex = tempIndex === -1 ? -1 : zeroIndex + tempIndex + 1;
  }
  return results;
};

/**
* @param {number[]} nums
* @return {boolean}
*/
var canJump_1 = function(nums) {
  if (nums.length === 1) return true;
  var zeroIndexs = getZeroIndexs(nums);
  if (!zeroIndexs.length) return true;

  var result = true;
  var finishJump = false;
  for (var z = 0; z < zeroIndexs.length; z += 1) {
    var zeroIndex = zeroIndexs[z];

    var canJumpSuccess = false;
    for (var i = 0; i < zeroIndex; i += 1) {
      if (nums[i] > zeroIndex - i || nums[i] + i >= nums.length - 1) {
        if (nums[i] + i >= nums.length - 1) {
          finishJump = true;
        }
        canJumpSuccess = true;
        break;
      }
    }

    if (canJumpSuccess) {
      if (finishJump) {
        result = true;
        break;
      }
      continue;
    } else {
      result = false;
      break;
    }
  }
  return result;
};

/* ============================= ADVANCE ================================= */
/**
 * 但很显然，上面的方法麻烦了，因为针对每一个 0，都从头进行了判断
 * 但我们可以借助上述的思路，然后逆向进行推导：
 * 如果能够到达尾部，则其尾部之前元素的值和它所在索引之和一定大于等于尾部所在的索引
 * 从尾部开始向前遍历，如果满足跳跃条件，则将尾部进行更新，最后检查尾部是否到达了头部
 */

/**
* @param {number[]} nums
* @return {boolean}
*/
var canJump_2 = function(nums) {
  var last = nums.length - 1;
  for (var i = last; i >= 0; i -= 1) {
    if (nums[i] + i >= last) {
      last = i;
    }
  }
  return last === 0;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * 动态规划
 */
var canJump_3 = function(nums) {
  const dp = [true]
  for (let i = 1; i < nums.length; i += 1) {
    dp[i] = false
    for (let j = i - 1; j >= 0; j -= 1) {
      if (dp[j] && nums[j] >= i - j) {
        dp[i] = true
        break
      }
    }
  }
  return dp[nums.length - 1]
}

// Test case
// [3,0,0,0]
// [2,3,1,1,4]
// [3,2,1,0,4]
// [3,2,2,0,4]
// [3,2,2,0,4,3,2,1,0]
// [0]
// [3,0,0,0]
// [3,0,0,0,0]
// [1,0]
// [2,0]
// [0,0]