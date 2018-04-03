{-
-- 5 kyu

Desc:
My friend John and I are members of the "Fat to Fit Club (FFC)".
John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list".
It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

Example:
99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight",
let us class them as if they were strings and not numbers:
  100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since,
  having the same "weight" (9) it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes:
- it may happen that the input string have leading,
  trailing whitespaces and more than a unique whitespace between two consecutive numbers
- Don't modify the input
-}

import qualified Data.List as List
import Data.List.Split

sort s1 s2
  | n1 <= n2 = LT
  | otherwise = GT
  where strToWeight = foldl (\p s -> p + read [s] :: Integer) 0
        n1 = strToWeight s1
        n2 = strToWeight s2

orderWeight :: [Char] -> [Char]
orderWeight = unwords . List.sortBy (\s1 s2 -> sort s1 s2) . List.sort . filter (/= "") . splitOn " "

-- Test case
-- "103 123 4444 99 2000"
-- "9999 10003 2000 44444444 9999"
-- "71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 11 110"