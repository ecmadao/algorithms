{-
-- 4 kyu

Desc:
Create a function taking a positive integer as its parameter
and returning a string containing the Roman Numeral representation of that integer.
Modern Roman numerals are written by expressing each digit separately starting with the left most digit'
and skipping any digit with a value of zero.
In Roman numerals
1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:
solution 1000 -- should return "M"

Help:
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals
-}

import qualified Data.Map as Map

integers :: [Int]
integers = [1, 5, 10, 50, 100, 500, 1000]

romans :: [Char]
romans = ['I', 'V', 'X', 'L', 'C', 'D', 'M']

romanMap = Map.fromList $ zip integers romans

getMaybeValue :: Maybe p -> p
getMaybeValue Nothing = error "can not get roman from Nothing"
getMaybeValue (Just a) = a

getRomanValue :: Int -> Char
getRomanValue int = let result = Map.lookup int romanMap in getMaybeValue result

numToRoman int ratio
  | int < 0 = error "invalidate number"
  | int < 4 = replicate int $ getRomanValue ratio
  | int == 4 = [getRomanValue ratio, getRomanValue $ 5 * ratio]
  | int < 9 = getRomanValue (5 * ratio) : replicate (int - 5) (getRomanValue ratio)
  | int == 9 = [getRomanValue ratio, getRomanValue $ 10 * ratio]
  | otherwise = error "invalidate number"

_intToRoman num ratio
  | num <= 0 = ""
  | otherwise = _intToRoman (num `div` 10) (ratio * 10) ++ numToRoman (num `mod` 10) ratio

solution :: Integer -> String
solution num = _intToRoman (fromIntegral num) 1