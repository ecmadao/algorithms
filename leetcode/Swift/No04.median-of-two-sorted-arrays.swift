/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 *
 * Example1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 *
 * Example2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
 *
 * 已知两个排好序的数组，求两数组顺序合并之后的中位数。要求时间复杂度为 O(log (m+n))
 */

class Solution {
    func findMedianSortedArrays(_ nums1: [Int], _ nums2: [Int]) -> Double {
        // 并归排序
        var i1 = nums1.startIndex
        var i2 = nums2.startIndex
        var resultArr = Array<Int>()
        while i1 < nums1.endIndex && i2 < nums2.endIndex {
            let num1 = nums1[i1]
            let num2 = nums2[i2]
            if num1 < num2 {
                resultArr.append(num1)
                i1 = nums1.index(i1, offsetBy: 1)
            } else {
                resultArr.append(num2)
                i2 = nums2.index(i2, offsetBy: 1)
            }
        }
        if i1 < nums1.endIndex {
            resultArr += nums1[i1..<nums1.endIndex]
        }
        if i2 < nums2.endIndex {
            resultArr += nums2[i2..<nums2.endIndex]
        }
        let midIndex = resultArr.index(resultArr.startIndex, offsetBy: (resultArr.count - 1) / 2)
        return resultArr.count % 2 == 0
            ? Double(resultArr[midIndex] + resultArr[resultArr.index(midIndex, offsetBy: 1)]) / 2
            : Double(resultArr[midIndex])
    }
}