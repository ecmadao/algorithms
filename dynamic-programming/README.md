
## 动态规划

### 基本思路

#### References

- [如何理解动态规划？ - 九章算法的回答 - 知乎](https://www.zhihu.com/question/39948290/answer/155958549)
- [如何理解动态规划？ - zhen tan的回答 - 知乎](https://www.zhihu.com/question/39948290/answer/883302989)
- [什么是动态规划（Dynamic Programming）？动态规划的意义是什么？ - 阮行止的回答 - 知乎](https://www.zhihu.com/question/23995189/answer/613096905)

基本思路：

1. 判断是否是动态规划问题：

- 使用动态规划的问题一般都有一些特点可以遵循。例如，求最大/最小值；求可不可行；求方案总数。
- 大规模问题的答案可以由小规模问题的答案递推得到。例如`f[i] = max{f[j] if j < i and …} + 1`, `f[i][j] = f[i - 1][j] + f[i][j - 1]`
- 子问题的求解思路除了规模之外，没有任何区别
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

### 概念

1. 无后效性

### LeetCode

#### 基本的状态转移

> [动态规划详解（修订版）](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484731&idx=1&sn=f1db6dee2c8e70c42240aead9fd224e6&chksm=9bd7fb33aca07225bee0b23a911c30295e0b90f393af75eca377caa4598ffb203549e1768336&scene=21#wechat_redirect)

- [509.斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/) - 可以 O(1) 空间、O(n) 时间
- [70.爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/submissions/)

#### 子序列问题

> [动态规划设计之最长递增子序列](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484498&idx=1&sn=df58ef249c457dd50ea632f7c2e6e761&chksm=9bd7fa5aaca0734c29bcf7979146359f63f521e3060c2acbf57a4992c887aeebe2a9e4bd8a89&scene=21#wechat_redirect)
> [经典面试题：最长公共子序列](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484486&idx=1&sn=0bdcb94c6390307ea32427757ec0072c&chksm=9bd7fa4eaca073583623cdb93b05dc9e1d0757b25697bb40b29b3e450124e929ff1a8eaac50f&scene=21#wechat_redirect)
> [子序列解题模板：最长回文子序列](https://mp.weixin.qq.com/s/zNai1pzXHeB2tQE6AdOXTA)

#### 状态机问题

> [动态规划之正则表达式](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484513&amp;idx=1&amp;sn=e5fc3cce76c1b916195e1793122c28b8&source=41#wechat_redirect)

- [No10.Regular Expression Matching](../leetcode/JavaScript/No10.regular-expression-matching.js)
- [No722.Remove Comments](../leetcode/JavaScript/No722.remove-comments.js)