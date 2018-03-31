
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

intToRoman num = _intToRoman num 1

-- Test case
intToRoman 3333 -- "MMMCCCXXXIII"
intToRoman 14 -- "XIV"
intToRoman 8 -- "VIII"
intToRoman 99 -- "XCIX"
