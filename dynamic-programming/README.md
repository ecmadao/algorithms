
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

无后效性

### LeetCode

#### 基本的状态转移

- [509.斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/) - 可以 O(1) 空间、O(n) 时间
- [70.爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/submissions/)
