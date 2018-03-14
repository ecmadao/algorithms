/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 *
 * Note:
 * You may not slant the container and n is at least 2.
 *
 * 题意描述：
 * 平面上有若干与 y 轴平行的线段，这些线段的一个端点一定在 x 轴上，另一个端点一定在第一象限。
 * 对于任意两条线段，其都与 x 轴一起形成一个容器，容器可以用来装水，水的高度等于较短侧边的高度。
 * 现在问所有容器中容量最大的是多少？
 * 即在第一象限有很多点 (i, a[i])，其在 x 轴上的投影是 (i, 0)，
 * 现在求最大的 Math.min(a[i], a[j]) * Math.abs(j - i)
 */

/*
 * 思路：
 * 两端索引，向内聚拢
 * 每次向内靠近，仅改变高度较小的那端（为了保留当前较高的高度，并试图寻找更高的高度）
 */
class Solution {
    func maxArea(_ height: [Int]) -> Int {
        var startIndex = 0
        var endIndex = height.count - 1
        var result = 0

        while startIndex < endIndex {
            let leftHeight = height[startIndex]
            let rightHeight = height[endIndex]
            result = max(
                result,
                min(leftHeight, rightHeight) * (endIndex - startIndex)
            )
            if leftHeight < rightHeight {
                startIndex += 1
            } else {
                endIndex -= 1
            }
        }

        return result
    }
}
