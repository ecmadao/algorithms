/*
 * Difficulty:
 * Easy
 *
 * Desc:
 * Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.
 *
 * Example 1:
 * Input: arr = [1,2,2,1,1,3]
 * Output: true
 * Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
 *
 * Example 2:
 * Input: arr = [1,2]
 * Output: false
 *
 * Example 3:
 * Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
 * Output: true
 *
 * Constraints:
 * 1 <= arr.length <= 1000
 * -1000 <= arr[i] <= 1000
*/

public class Solution {
    public bool UniqueOccurrences(int[] arr) {
        Array.Sort(arr);
        HashSet<int> hash = new HashSet<int>();

        int i = 0;
        while (i < arr.Length) {
            int j = i;
            while (j + 1 < arr.Length && arr[j + 1] == arr[j]) j += 1;
            int count = j - i + 1;
            if (hash.Contains(count)) return false;
            hash.Add(count);
            i = j + 1;
        }
        return true;
    }
}