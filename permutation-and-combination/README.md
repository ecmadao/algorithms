<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [排列组合](#%E6%8E%92%E5%88%97%E7%BB%84%E5%90%88)
  - [全排列](#%E5%85%A8%E6%8E%92%E5%88%97)
    - [Solution 1](#solution-1)
  - [组合](#%E7%BB%84%E5%90%88)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 排列组合

排列组合问题属于概率论，其本身并算不上是一个经典的数据结构和算法问题，但它在很多其他算法问题中都得到了应用，比如 24 点问题和八皇后问题。

- 一组数的全排列，即包含了列表内各元素的顺序，含有相同元素但顺序不同的两个数组，被认为是两种不同的排列
- 组合问题则即无视其顺序，相当于要获取一个列表的所有子列表

### 全排列

可以**将全排列看着是把给定列表中的每一个元素，插入到由剩下的元素组成的全排列列表的头部**。以`[1,2,3]`全排列为例，可以看做将`1`插入到`[2,3]`组成的各个全排列的各头部，把`2`插入到`[1,3]`组成的全排列的头部，把`3`插入到`[1,2]`组成的全排列的头部，则得到`[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]`

除此以外，也可以**把全排列看做是将给定列表的第一个元素，插入到由剩下元素组成的各全排列的各个位置上**。

### 组合

将给定列表中的每一个元素，都放入到由剩下元素组成的各个组合的列表的头部