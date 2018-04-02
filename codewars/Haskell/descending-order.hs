{-
-- 7 kyu

Desc:
Your task is to make a function that can take any non-negative integer as a argument
and return it with its digits in descending order.
Essentially, rearrange the digits to create the highest possible number.

Example:
Input: 21445 Output: 54421
Input: 145263 Output: 654321
Input: 1254859723 Output: 9875543221

传入一个非负整数，返回由该整数各个位上的数字所能组成的最大数字
-}

import qualified Data.List as List

numToArray xs x
  | x == 0 = xs
  | otherwise = numToArray (x `mod` 10 : xs) n
  where n = x `div` 10

descendingOrder :: Integer -> Integer
descendingOrder = fst . List.foldl' (\m n -> (snd m * n + fst m, snd m * 10)) (0, 1) . List.sort . numToArray []
