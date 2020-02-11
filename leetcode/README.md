
## 总结 & 反思

> [北美算法面试的题目分类，按类型和规律刷题，事半功倍](https://zhuanlan.zhihu.com/p/89392459)
>
> [Leetcode 分类顺序表](https://cspiration.com/leetcodeClassification)

### Two pointers

> 双指针技巧汇总: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484505&amp;idx=1&amp;sn=0e9517f7c4021df0e6146c6b2b0c4aba&source=41#wechat_redirect

- [**Find the Duplicate Number**](./leetcode/JavaScript/No287.find-the-duplicate-number.js)

### Dynamic programming

> https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns

#### 股票系列问题

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

### 排列组合问题

#### 全排列问题

> [字典序解法](../permutation-and-combination/README.md)

- [**No31.Next permutation**](../leetcode/JavaScript/No31.next-permutation.js)
- [**No46.Permutations**](../leetcode/JavaScript/No46.permutations.js)
- [No47.Permutations II](../leetcode/JavaScript/No47.permutations-II.js)
- [No60.Permutation sequence](../leetcode/JavaScript/No60.permutation-sequence.js)

#### 组合问题

- [No78.Subsets](../leetcode/JavaScript/No78.subsets.js)
- [No90.Subsets II](../leetcode/JavaScript/No90.subsets-II.js)

### Subarray 问题

> [各种关于 subarray sum 小于/等于 K 的问题](https://www.acwing.com/blog/content/49/)
>
> [有关 contiguous subarray 的三种方法](https://zhuanlan.zhihu.com/p/37570405)
>
> [子数组和的一系列问题](https://cttrevor.github.io/2018/01/20/subarray-sum/)
>
> [Leetcode 复习小结: Sliding Window](https://segmentfault.com/a/1190000019615321)


- [No53.Maximum Subarray](../leetcode/JavaScript/No53.maximum-subarray.js)
- [**No152.Maximum Product Subarray**](../leetcode/JavaScript/No152.maximum-product-subarray.js)
- [No560.Subarray Sum Equals K](../leetcode/JavaScript/No560.subarray-sum-equals-k.js)
- [No209.Minimum Size Subarray Sum](../leetcode/JavaScript/No209.minimum-size-subarray-sum.js)

### 状态机/回溯

- [**No10.Regular Expression Matching**](../leetcode/JavaScript/No10.regular-expression-matching.js)
- [**No722.Remove Comments**](../leetcode/JavaScript/No722.remove-comments.js)

### 滑动窗口问题

> 字符串匹配：[KMP 算法详细解析](https://blog.sengxian.com/algorithms/kmp)
>
> [滑动窗口算法解决子串问题](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484504&amp;idx=1&amp;sn=5ecbab87e42033cc0a62b635cc436977&source=41#wechat_redirect)

- [**No03.Longest Substring Without Repeating Characters**](../leetcode/JavaScript/No03.longest-substring-without-repeating-characters.js)
- [No76.Minimum Window Substring](../leetcode/JavaScript/No76.minimum-window-substring.js)

### 单调栈和双端队列

> [单调栈 Monotonic Stack 的使用](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484525&amp;idx=1&amp;sn=3d2e63694607fec72455a52d9b15d4e5&source=41&ascene=0&devicetype=iOS13.3.1&version=17000a2c&nettype=WIFI&abtest_cookie=AAACAA%3D%3D&lang=zh_CN&fontScale=100)
>
> [单调队列解决滑动窗口问题](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484506&amp;idx=1&amp;sn=fcaae7325b10905c808e085f8802b4eb&source=41#wechat_redirect)

- [No496.Next Greater Element I](../leetcode/JavaScript/No496.next-greater-element-I.js)
- [No503.Next Greater Element II](../leetcode/JavaScript/No503.next-greater-element-II.js)
- [No239.Sliding Window Maximum](../leetcode/JavaScript/No239.sliding-window-maximum.js)
