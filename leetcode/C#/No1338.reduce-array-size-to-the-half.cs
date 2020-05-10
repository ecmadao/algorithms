/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.
 * Return the minimum size of the set so that at least half of the integers of the array are removed.
 *
 * Example 1:
 * Input: arr = [3,3,3,3,5,5,5,2,2,7]
 * Output: 2
 * Explanation:
 * Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
 * Possible sets of size 2 are {3,5},{3,2},{5,2}.
 * Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has size greater than half of the size of the old array.
 *
 * Example 2:
 * Input: arr = [7,7,7,7,7,7]
 * Output: 1
 * Explanation: The only possible set you can choose is {7}. This will make the new array empty.
 *
 * Example 3:
 * Input: arr = [1,9]
 * Output: 1
 *
 * Example 4:
 * Input: arr = [1000,1000,3,7]
 * Output: 1
 *
 * Example 5:
 * Input: arr = [1,2,3,4,5,6,7,8,9,10]
 * Output: 5
 *
 * Constraints:
 * 1 <= arr.length <= 10^5
 * arr.length is even.
 * 1 <= arr[i] <= 10^5
*/

public class Solution {
    private int Search(List<int> list, int target) {
        int i = 0;
        int j = list.Count - 1;

        while (i <= j) {
            int mid = (i + j) / 2;
            if (list[mid] == target) return mid;
            if (list[mid] > target) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
        return i;
    }

    public int MinSetSize(int[] arr) {
        Array.Sort(arr);

        int i = 0;
        List<int> counts = new List<int>();

        while (i < arr.Length) {
            int j = i;
            while (i + 1 < arr.Length && arr[i] == arr[i + 1]) i += 1;

            int count = i - j + 1;
            int index = Search(counts, count);
            counts.Insert(index, count);
            i += 1;
        }

        int total = 0;
        for (int j = 0; j < counts.Count; j += 1) {
            total += counts[j];
            if (total >= arr.Length / 2) return j + 1;
        }
        return counts.Count;
    }
}