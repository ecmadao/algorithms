{-
-- 4 kyu

A format for expressing an ordered list of integers is to use a comma separated list of either
1. individual integers
2. or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
The range includes all integers in the interval including both endpoints.
It is not considered a range unless it spans at least 3 numbers.
For example ("12, 13, 15-17")

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:
solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
-}

import Data.List (intercalate)

_arrToStr [] = ""
_arrToStr [a] = show a
_arrToStr [a,b] = show a ++ "," ++ show b
_arrToStr (a:as) = show a ++ "-" ++ show (last as)

_solution ([], []) n = ([], [n])
_solution (tmp, arr) n
  | head arr - n == 1 = (tmp, n:arr)
  | otherwise = ((_arrToStr arr):tmp, [n])

solution :: [Int] -> String
solution arr = intercalate "," $ fst $ foldr (\n t -> _solution t n) ([], []) $ (last arr:arr)

{-
more functional solution from codewars

import Data.Function ( on )
import Data.List     ( groupBy, intercalate )

solution :: [Int] -> String
solution = intercalate "," . map toRange . groupBy ((==) `on` uncurry (-)) . zip [1..]
  where
    toRange [(_,x)]       = show x
    toRange [(_,x),(_,y)] = show x ++ ',':show y
    toRange ((_,x):xs)    = show x ++ '-':show (snd $ last xs)
-}
