<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [散列表](#%E6%95%A3%E5%88%97%E8%A1%A8)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 散列表

在储存键值对的时候，如果空间上没有限制，则我们可以直接将各个键作为数组的索引，那么在查找的时候只有 O(1) 的复杂度；而如果时间上没有限制，则可以使用无序数组进行排序查找，那样只会占用比较小的空间。散列表的作用，就是在这两个极端情况下做出权衡。

散列表的查找算法：

1. 用散列函数将被查找的键转化为数组的一个索引
2. 处理碰撞冲突的情况

- [浅谈算法和数据结构: 十一 哈希表](http://www.cnblogs.com/yangecnu/p/Introduce-Hashtable.html)