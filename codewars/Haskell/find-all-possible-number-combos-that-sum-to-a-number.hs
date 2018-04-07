{-
-- 4 kyu

Desc:
Create a function combos, that accepts a single positive integer num (30 > num > 0)
and returns an array of arrays of positive integers that sum to num.

Notes:
1. Sub-arrays may or may not have their elements sorted.
2. The order of sub-arrays inside the main array does not matter.
3. For an optimal solution, the following operation should complete within 6000ms.

给定一个数字，返回所有元素之和等于该数字的列表，无视数字排列顺序（不同顺序的列表被视为一样）

Example:
combos(0) => [
  []
]
combos(1) => [
  [1]
]
combos(2) => [
  [2],
  [1,1]
]
combos(3) => [
  [3],
  [1,1,1], [1,2]
]
combos(4) => [
  [4],
  [1,1,1,1], [1,1,2], [1,3],
  [2, 2],
]
combos(5) => [
  [5],
  [1,1,1,1,1], [1,1,1,2], [1,1,3], [1,2,2], [1,4], -- 4 1
  [2,3] -- 3 2
]
combos(6) => [
  [6], -- 6
  [1,1,1,1,1,1], [1,1,1,1,2], [1,1,1,3], [1,1,2,2], [1,1,4], [1,2,3], [1,5], --  5, 1
  [2,4], [2,2,2], -- 4, 2
  [3,3] -- 3, 3
]
combos(7) => [
  [7], -- 7
  [1,1,1,1,1,1,1], [1,1,1,1,1,2], [1,1,1,1,3], [1,1,1,2,2], [1,1,1,4], [1,1,2,3], [1,1,5], --  6, 1
  [2,5], [2,2,2], [2,1,2,2], [2,1,4] -- 5, 2
  [4,3] -- 4, 3
]
combos(8) => [
  [8], -- 8
  [1,1,1,1,1,1,1,1], [1,1,1,1,1,1,2], [1,1,1,1,1,3], [1,1,1,1,2,2], [1,1,1,1,4], [1,1,1,2,3], [1,1,1,5], --  7, 1
  [2,6] [2,3,3], [2,1,5], [2,1,2,3], [2,1,1,4], [2,1,1,2,2], [2,4,2], [2,2,2,2] -- 6, 2
  [3,5], [3,1,1,3], [3,1,4] -- 5, 3
  [4,4], [2,2,2,2] -- 4, 4
]
-}

sumsOfNum n b
  | n == b = [[n]]
  | otherwise = foldl (\arr next -> (mergeNumToArrs b $ sumsOfNum (n - b) next) ++ arr) [] [b..(n - b)]
  where mergeNumToArrs x xs = map (\array -> x:array) xs

combos :: Int -> [[Int]]
combos n = foldl (\arrs i -> (sumsOfNum n i) ++ arrs) [] [n,(n-1)..1]

{-
-- timeout solution

import Data.List (nub, insert)

_combos :: Int -> [[Int]]
_combos n = foldl (\arr x -> [insert x c | c <- _combos(n - x)] ++ arr) [[n]] [(n-1),(n-2)..1]

combos :: Int -> [[Int]]
combos = nub . _combos
-}