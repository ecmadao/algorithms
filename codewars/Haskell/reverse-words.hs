{-
-- 6 kyu

Desc:
Write a reverseWords function that accepts a string a parameter,
and reverses each word in the string. Any spaces in the string should be retained.

Example:
reverseWords "An example!"    -- "nA !elpmaxe"
reverseWords "double  spaces" -- "elbuod  secaps"
-}

import Data.List.Split

reverseWords :: String -> String
reverseWords = unwords . map (\x -> reverse x) . splitOn " "