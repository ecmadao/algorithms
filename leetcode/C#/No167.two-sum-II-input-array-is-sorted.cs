/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
 * The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
 *
 * Note:
 * Your returned answers (both index1 and index2) are not zero-based.
 * You may assume that each input would have exactly one solution and you may not use the same element twice.
 *
 * Example:
 * Input: numbers = [2,7,11,15], target = 9
 * Output: [1,2]
 * Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/

public class Solution {
    public int[] TwoSum(int[] numbers, int target) {
        int i = 0;
        int j = numbers.Length - 1;

        while (i < j) {
            int sum = numbers[i] + numbers[j];
            if (sum == target) return new int[]{ i + 1, j + 1 };
            if (sum > target) {
                j -= 1;
            } else {
                i += 1;
            }
        }
        return new int[0];
    }
}