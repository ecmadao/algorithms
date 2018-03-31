{-
-- 6 kyu

Desc:
Given two arrays of strings a1 and a2 return a sorted array r
in lexicographical order of the strings of a1 which are substrings of strings of a2.
r must be without duplicates.

Example:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []
-}

import qualified Data.List as List
import qualified Data.Set as Set

-- Solution 0
-- Sorry for the name of the function.
_inArray :: [String] -> [String] -> [String]
_inArray a1 a2 = List.sort [x | x <- Set.elems $ Set.fromList a1, any (\y -> x `List.isInfixOf` y) a2]


-- Solution 1
-- nub 数组去重
inArray :: [String] -> [String] -> [String]
inArray a1 a2 = List.sort $ filter (\x -> any (x `List.isInfixOf`) a2) $ List.nub a1
