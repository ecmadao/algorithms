
import qualified Data.List as L
-- import Data.List (delete, subsequences, tails, permutations)

-- =============== 全排列 ===============

{-
Solution 1
将给定列表中的每一个元素，插入到剩下元素组成的各全排列列表的头部
-}

permutation' [a] = [[a]]
permutation' [] = [[]]
permutation' xs = [x:xs' | x <- xs, xs' <- permutation' $ L.delete x xs]

{-
Solution 2
把列表中的第一个元素，插入到由剩下的列表组成的全排列的各个位置上
-}

{-
将一个元素插入到给定数组的各个位置上
-}
insert n [] = [[n]]
insert n xs@(n':ns) = (n:xs):[n':ns' | ns' <- insert n ns]

permutation [] = [[]]
permutation (x:xs) = concat [insert x xs' | xs' <- permutation xs]

{-
Solution 3
直接使用 Data.List 中的 permutations 方法
-}
ps = L.permutations [1,2,3]
-- [[1,2,3],[2,1,3],[3,2,1],[2,3,1],[3,1,2],[1,3,2]]



-- =============== 组合 ===============

combination [] = [[]]
combination (n:ns) = [n:ns' | ns' <- combination ns] ++ combination ns

{-
可以直接使用 Data.List 中的 subsequences 获取到给定列表的所有组合（包含一个空列表）
Data.List 中的 tails 返回一个列表的所有尾部子列表（包含一个空列表）
-}
ss = L.subsequences [1,2,3]
-- [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

ts = L.tails [1,2,3]
-- [[1,2,3],[2,3],[3],[]]