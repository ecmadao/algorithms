{-
-- 6 kyu

Desc:
Your goal in this kata is to implement a difference function,
which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.
If a value is present in b, all of its occurrences must be removed from the other:

Example:
difference [1,2] [1] == [2]
difference [1,2,2,2,3] [2] == [1,3]
-}

-- import qualified Data.Set as Set
import qualified Data.List as List

-- 如果 a 是 Ord 类型类的实例，则可以直接使用 Set.difference 和 Set.fromList

-- 但按照题目限制，a 仅仅只是 Eq 类型类的实例，无法使用 Set，但可以使用 List.\\
-- :t (List.\\)
-- (List.\\) :: Eq a => [a] -> [a] -> [a]
difference :: Eq a => [a] -> [a] -> [a]
difference a b = foldl (\x y -> x ++ (List.\\) [y] b) [] a


_difference :: Eq a => [a] -> [a] -> [a]
_difference xs ys = filter (`notElem` ys) xs
