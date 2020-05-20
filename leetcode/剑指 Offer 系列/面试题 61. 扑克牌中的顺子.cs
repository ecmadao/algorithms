/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
 *
 * 示例 1:
 * 输入: [1,2,3,4,5]
 * 输出: True
 *
 * 示例 2:
 * 输入: [0,0,1,2,5]
 * 输出: True
 *
 * 限制：
 * 数组长度为 5 
 * 数组的数取值为 [0, 13] .
 */

public class Solution {
    public bool IsStraight(int[] nums) {
        Array.Sort(nums);

        int i = 0;
        int c = 0;
        while (i < nums.Length) {
            if (nums[i] == 0) {
                c += 1;
            } else {
                if (i + 1 < nums.Length && nums[i] == nums[i + 1]) return false;
                if (i + 1 < nums.Length && nums[i] + 1 != nums[i + 1]) {
                    if (nums[i] + 1 + c < nums[i + 1]) return false;
                    c -= (nums[i + 1] - nums[i] - 1);
                }
            }
            i += 1;
        }
        return true;
    }
}
