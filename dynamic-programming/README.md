<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [动态规划](#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92)
  - [基本思路](#%E5%9F%BA%E6%9C%AC%E6%80%9D%E8%B7%AF)
    - [References](#references)
  - [概念](#%E6%A6%82%E5%BF%B5)
  - [LeetCode](#leetcode)
    - [基本的状态转移](#%E5%9F%BA%E6%9C%AC%E7%9A%84%E7%8A%B6%E6%80%81%E8%BD%AC%E7%A7%BB)
    - [子序列问题](#%E5%AD%90%E5%BA%8F%E5%88%97%E9%97%AE%E9%A2%98)
    - [状态机问题](#%E7%8A%B6%E6%80%81%E6%9C%BA%E9%97%AE%E9%A2%98)
    - [博弈问题](#%E5%8D%9A%E5%BC%88%E9%97%AE%E9%A2%98)
    - [背包问题](#%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98)
    - [区间 DP](#%E5%8C%BA%E9%97%B4-dp)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## 动态规划

### 基本思路

#### References

- [如何理解动态规划？ - 九章算法的回答 - 知乎](https://www.zhihu.com/question/39948290/answer/155958549)
- [如何理解动态规划？ - zhen tan的回答 - 知乎](https://www.zhihu.com/question/39948290/answer/883302989)
- [什么是动态规划（Dynamic Programming）？动态规划的意义是什么？ - 阮行止的回答 - 知乎](https://www.zhihu.com/question/23995189/answer/613096905)

基本思路：

1. 判断是否是动态规划问题：

- 使用动态规划的问题一般都有一些特点可以遵循。例如，求最大/最小值；求可不可行；求方案总数。
- 大规模问题的答案可以由小规模问题的答案递推得到。即，**状态可以转移**，例如`f[i] = max{f[j] if j < i and …} + 1`, `f[i][j] = f[i - 1][j] + f[i][j - 1]`
- 子问题的求解思路除了规模之外，没有任何区别。子问题相互独立，即**最优子结构**。可以从子问题的最优结果推断出更大规模问题的最优结果
- 如果一个问题是要求出“所有的”方案和结果，则肯定不是使用动态规划
- 有递归终止条件

2. 逐步剖析问题：

- 状态是什么
- 状态转移方程是什么：当已经知道`f(1)`~​`f(n - 1)`的值，然后想办法利用它们求得`f(n)`
- 状态的初始值是什么
- 问题要求的最后答案是什么

问题拆分成子目标：

1. 建立状态转移方程
2. 缓存并复用以往结果
3. 按顺序从小往大算

确认遍历方式：

1. 遍历的过程中，所需的状态必须是已经计算出来的
2. 遍历的终点必须是存储结果的那个位置

明确问题（求什么） -> 明确状态（达成解时的状态时什么） -> 明确子问题（状态转移） -> 确认遍历方式（自底向上解决问题，遍历方式依赖于状态转移方向） -> 明确 base case（边界条件）

### 概念

0. 求最值
1. 无后效性
2. 重叠子问题
3. 最优子结构
4. 自底向上

### LeetCode

#### 基本的状态转移

> [动态规划详解（修订版）](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484731&idx=1&sn=f1db6dee2c8e70c42240aead9fd224e6&chksm=9bd7fb33aca07225bee0b23a911c30295e0b90f393af75eca377caa4598ffb203549e1768336&scene=21#wechat_redirect)
>
> [动态规划答疑篇](https://mp.weixin.qq.com/s/qvlfyKBiXVX7CCwWFR-XKg)
>
> [动态规划：不同的定义产生不同的解法](https://mp.weixin.qq.com/s/DeanOw0acBNU1ZoI4cE8nw)

- [No70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/submissions/)
- [No509. 斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/)
- [No983. 最低票价](https://leetcode-cn.com/problems/minimum-cost-for-tickets/)
- [No1230. 抛掷硬币](https://leetcode-cn.com/problems/toss-strange-coins/)

股票系列问题

> [LeetCode 股票问题的一种通用解法](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484509&amp;idx=1&amp;sn=21ace57f19d996d46e82bd7d806a2e3c&source=41#wechat_redirect)
>
> [团灭 LeetCode 股票买卖问题](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484508&idx=1&sn=42cae6e7c5ccab1f156a83ea65b00b78&chksm=9bd7fa54aca07342d12ae149dac3dfa76dc42bcdd55df2c71e78f92dedbbcbdb36dec56ac13b&scene=21#wechat_redirect)

最基本思路：前一天的决策影响当天决策，经典的 DP 状态转移问题

- [No121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/submissions/)
- [No122. 买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)
- [No123. 买卖股票的最佳时机 III](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/)
- [No188. 买卖股票的最佳时机 IV](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/)
- [No309. 最佳买卖股票时机含冷冻期](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
- [No714. 买卖股票的最佳时机含手续费](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

#### 子序列问题

> [动态规划设计之最长递增子序列](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484498&idx=1&sn=df58ef249c457dd50ea632f7c2e6e761&chksm=9bd7fa5aaca0734c29bcf7979146359f63f521e3060c2acbf57a4992c887aeebe2a9e4bd8a89&scene=21#wechat_redirect)
>
> [经典面试题：最长公共子序列](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484486&idx=1&sn=0bdcb94c6390307ea32427757ec0072c&chksm=9bd7fa4eaca073583623cdb93b05dc9e1d0757b25697bb40b29b3e450124e929ff1a8eaac50f&scene=21#wechat_redirect)
>
> [子序列解题模板：最长回文子序列](https://mp.weixin.qq.com/s/zNai1pzXHeB2tQE6AdOXTA)

- [No53. 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)
- [No115. 不同的子序列](https://leetcode-cn.com/problems/distinct-subsequences/)
- [No300. Longest Increasing Subsequence](https://leetcode-cn.com/problems/longest-increasing-subsequence/)
- [No354. Russian Doll Envelopes](https://leetcode-cn.com/problems/russian-doll-envelopes/)
- [No368. 最大整除子集](https://leetcode-cn.com/problems/largest-divisible-subset/)
- [No646. Maximum Length of Pair Chain](https://leetcode-cn.com/problems/maximum-length-of-pair-chain/)
- [No673. 最长递增子序列的个数](https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/)
- [No718. 最长重复子数组](https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/)
- [No1027. 最长等差数列](https://leetcode-cn.com/problems/longest-arithmetic-sequence/)
- [No1143. 最长公共子序列](https://leetcode-cn.com/problems/longest-common-subsequence/)

#### 状态机问题

> [动态规划之正则表达式](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484513&amp;idx=1&amp;sn=e5fc3cce76c1b916195e1793122c28b8&source=41#wechat_redirect)
>
> [详解一道腾讯面试题：编辑距离](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484484&amp;idx=1&amp;sn=74594297022c84952162a68b7f739133&source=41#wechat_redirect)

- [No10.Regular Expression Matching](../leetcode/JavaScript/No10.regular-expression-matching.js)
- [No722.Remove Comments](../leetcode/JavaScript/No722.remove-comments.js)
- [No72.Edit Distance](https://leetcode-cn.com/problems/edit-distance/submissions/)

#### 博弈问题

> [动态规划之博弈问题](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484496&amp;idx=1&amp;sn=d04bb89cb1df241993c6b46ffcabae7e&source=41#wechat_redirect)

- [No877. 石子游戏](https://leetcode-cn.com/problems/stone-game/)
- [No1025. 除数博弈](https://leetcode-cn.com/problems/divisor-game/)

#### 背包问题

> [LeetCode 动态规划专题 5：0-1 背包问题](https://www.liwei.party/2018/09/19/leetcode-solution/dynamic-programming-5/)
>
> [LeetCode 动态规划专题 6：0-1 背包问题在空间复杂度上的两个优化](https://www.liwei.party/2018/09/20/leetcode-solution/dynamic-programming-6/)
>
> [LeetCode 动态规划专题 7：面试中的 0-1 背包问题](https://www.liwei.party/2018/09/21/leetcode-solution/dynamic-programming-7)
>
> [用背包问题思想来理解硬币找零系列问题](https://leetcode-cn.com/problems/coin-change/solution/yong-bei-bao-wen-ti-si-xiang-lai-li-jie-ying-bi-zh/)
>
> [动态规划之背包问题系列](https://zhuanlan.zhihu.com/p/93857890)

- [No139. 单词拆分](https://leetcode-cn.com/problems/word-break/)
- [No322. 零钱兑换](https://leetcode-cn.com/problems/coin-change/) - 完全背包问题
- [No377. 组合总和 Ⅳ](https://leetcode-cn.com/problems/combination-sum-iv/)
- [No416. 分割等和子集](https://leetcode-cn.com/problems/partition-equal-subset-sum/)
- [No474. 一和零](https://leetcode-cn.com/problems/ones-and-zeroes/)
- [No494. 目标和](https://leetcode-cn.com/problems/target-sum/)
- [No518. 零钱兑换 II](https://leetcode-cn.com/problems/coin-change-2/) - 完全背包问题
- [No651. 4 键键盘](https://leetcode-cn.com/problems/4-keys-keyboard/)
- [No1049. 最后一块石头的重量 II](https://leetcode-cn.com/problems/last-stone-weight-ii/) - 01 背包问题

#### 区间 DP

区间类动态规划是线性动态规划的扩展，它在分阶段地划分问题时，与阶段中元素出现的顺序和由前一阶段的哪些元素合并而来由很大的关系。令状态`f(i, j)`表示将下标位置`i`到`j`的所有元素合并能获得的价值的最大值，那么`f(i, j) = max(f(i, k) + f(k + 1, j) + cost)`，`cost`为将这两组元素合并起来的代价。

对整个问题设最优值，枚举合并点，将问题分解为左右两个部分，最后合并两个部分的最优值得到原问题的最优值。

由于计算`f(i, j)`的值时需要知道所有`f(i, k)`和`f(k + 1, j)`的值，而这两个中包含的元素的数量都小于`f(i, j)`，所以我们以`len = j - i + 1`作为 DP 的阶段。首先从小到大枚举`len`，然后枚举`i`的值，根据`len`和`i`用公式计算出`j`的值，然后枚举在区间`[i, j]`中枚举`k`，时间复杂度为`O(n^3)`

通用公式：

```javascript
// n 是区间总长度
for (let i = 1; i <= n; i += 1) {
  dp[i][i] = 初始值
}

for (let len = 2; len <= n; len += 1) { // 从小到大枚举区间长度
  for (let i = 1; i <= n - len + 1; i += 1) { // 枚举区间左端点
    let j = i + len - 1 // 根据左端点和区间长度求区间右端点
    if (j > n) break

    dp[i][j] = 极限值

    for(k = i; k < j; k += 1) { // 从区间 [i, j] 中任意位置截断
      // w[i][j] 代表把两堆区间合并所需代价
      // 求最大值则是 Math.max
      dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + w[i][j])
    }
  }
}

return dp[1][n]
```

References:

- [动态规划学习系列——区间DP（一）](https://blog.csdn.net/fuyukai/article/details/43793863)
- [动态规划学习系列——区间DP（二）](https://blog.csdn.net/fuyukai/article/details/43839145)
- [**动态规划之矩阵链乘法理解**](https://blog.csdn.net/qq_16234613/article/details/52223410)
- [Wiki - 矩阵链乘积](https://zh.wikipedia.org/zh-sg/%E7%9F%A9%E9%99%A3%E9%8F%88%E4%B9%98%E7%A9%8D)
- [利用动态规划解决矩阵链乘法问题](https://chengfeng96.com/blog/2017/07/27/%E5%88%A9%E7%94%A8%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E8%A7%A3%E5%86%B3%E7%9F%A9%E9%98%B5%E9%93%BE%E4%B9%98%E6%B3%95%E9%97%AE%E9%A2%98/)
- [《算法导论》读书笔记之第15章 动态规划—矩阵链乘法](https://www.cnblogs.com/Anker/archive/2013/03/10/2952475.html)

- [No312. 戳气球](https://leetcode-cn.com/problems/burst-balloons/)
- [No664. 奇怪的打印机](https://leetcode-cn.com/problems/strange-printer/)
- [No813. 最大平均值和的分组](https://leetcode-cn.com/problems/largest-sum-of-averages/)
- [No1000. 合并石头的最低成本](https://leetcode-cn.com/problems/minimum-cost-to-merge-stones/)
- [No1167. 连接棒材的最低费用](https://leetcode-cn.com/problems/minimum-cost-to-connect-sticks/) - 此题不要求拼接顺序，因此其实是贪心算法问题。如果要求仅相邻才可拼接，则是经典的矩阵链乘法衍生问题
