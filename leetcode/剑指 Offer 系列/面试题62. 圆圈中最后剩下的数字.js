/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 0,1,,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字。
 * 例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。
 *
 * 示例 1：
 * 输入: n = 5, m = 3
 * 输出: 3
 *
 * 示例 2：
 * 输入: n = 10, m = 17
 * 输出: 2
 *
 * 限制：
 * 1. 1 <= n <= 10^5
 * 2. 1 <= m <= 10^6
 */

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  const arr = Array.from({ length: n }, (_, i) => i)

  let i = 0
  while (arr.length !== 1) {
    i = (i + m - 1) % arr.length
    arr.splice(i, 1)
  }
  return arr[0]
}

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 *
 * 约瑟夫环
 * https://zh.wikipedia.org/wiki/%E7%BA%A6%E7%91%9F%E5%A4%AB%E6%96%AF%E9%97%AE%E9%A2%98
 * https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/gong-shi-tui-dao-by-keyianpai/
 *
 * 约瑟夫环——公式法（递推公式）: https://blog.csdn.net/u011500062/article/details/72855826
 * 解题笔记（10）——约瑟夫环问题: https://blog.csdn.net/wuzhekai1985/article/details/6628491
 * 程序员面试题精选100题(14)－圆圈中最后剩下的数字[算法]: http://zhedahht.blog.163.com/blog/static/2541117420072250322938/
 */
var lastRemaining = function(n, m) {
  let index = 0
  for (let i = 2; i <= n; i += 1) {
      index = (index + m) % i
  }
  return index
}