{-
-- 5 kyu

Desc:
An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers.
You are provided with consecutive elements of an Arithmetic Progression.
There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you.
The rest of the given series is the same as the original AP. Find the missing term.

You have to write the function findMissing(list),
1. list will always be at least 3 numbers.
2. The missing term will never be the first or last one.

Example:
findMissing([1,3,5,9,11]) == 7
-}

import Data.List

{-
comment
:t length
length :: Foldable t => t a -> Int

:t div
div :: Integral a => a -> a -> a

:t toInteger
toInteger :: Integral a => a -> Integer

:t fromInteger
fromInteger :: Num a => Integer -> a

:t fromIntegral
fromIntegral :: (Num b, Integral a) => a -> b

Int -> Integral
fromInteger . toInteger
-}

-- Can only pass the test for limited length of list
findMissing_onlyLimitedLength :: Integral n => [n] -> n
findMissing_onlyLimitedLength xs = head $ [start, start + interval..end] \\ xs
  where
    start = head xs
    end = last xs
    interval = (end - start) `div` (fromInteger $ toInteger $ length xs)

{-
注意：
1. 列表可能无限长
2. 按照递增或者递减的顺序排列
-}

findMissing :: Integral n => [n] -> n
findMissing (n1:n2:n3:ns)
  | diff1 == diff2 = findMissing (n2:n3:ns)
  | diff1 > diff2 = n1 + n3 - n2
  | otherwise = n2 + n2 - n1
  where
    diff1 = abs $ n2 - n1
    diff2 = abs $ n3 - n2
