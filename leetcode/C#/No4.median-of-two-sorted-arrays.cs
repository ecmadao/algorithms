/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * You may assume nums1 and nums2 cannot be both empty.
 *
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 *
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
*/

public class Solution {
    public double FindMedianSortedArrays(int[] nums1, int[] nums2) {
        int total = nums1.Length + nums2.Length;
        int i = 0;
        int j = 0;
        int pre = 0;

        while (i + j < total / 2) {
            if (i < nums1.Length && j < nums2.Length) {
                if (nums1[i] <= nums2[j]) {
                    pre = nums1[i++];
                } else {
                    pre = nums2[j++];
                }
            } else if (i < nums1.Length) {
                pre = nums1[i++];
            } else {
                pre = nums2[j++];
            }
        }

        int next = 0;
    
        if (i < nums1.Length && j < nums2.Length) {
            next = nums1[i] <= nums2[j] ? nums1[i] : nums2[j];
        } else if (i < nums1.Length) {
            next = nums1[i];
        } else {
            next = nums2[j];
        }
        
        if (total % 2 == 1) return (double)next;
        return (pre + next) / 2f;
    }
}