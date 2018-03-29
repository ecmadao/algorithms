{-
-- 6 kyu

Desc:
Write a method that takes an array of consecutive (increasing) letters as input and
that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing.
The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
-}

-- Solution 0, Using Data.List.\\
import qualified Data.List as List

_findMissingLetter :: [Char] -> Char
_findMissingLetter cs = head $ [(head cs)..(last cs)] List.\\ cs


-- Solution 1
findMissingLetter :: [Char] -> Char
findMissingLetter cs = head [x | x <- [(head cs)..(last cs)], (x `elem` cs) /= True]
