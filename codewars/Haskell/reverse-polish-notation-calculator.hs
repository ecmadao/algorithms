{-
-- 4 kyu

Desc:
Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

Example:
expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation)
should evaluate to 14.

Note:
for simplicity you may assume that there are always spaces between numbers and operations,
e.g. 1 3 + expression is valid, but 1 3+ isn't.
Empty expression should evaluate to 0.
Valid operations are +, -, *, /.

逆波兰表示法的求值。
1. 假设字符串都是合法的逆波兰表示法
2. 仅需要特殊处理空字符串的情况
-}

import qualified Data.Set as Set

operation n1 n2 operator
  | operator == "+" = n1 + n2
  | operator == "-" = n1 - n2
  | operator == "*" = n1 * n2
  | otherwise = n1 / n2

set = Set.fromList ["+", "-", "*", "/"]
isOperator o = Set.member o set

_calc o (n1:n2:ns) = (operation n2 n1 o):ns

cal = foldl (\arr c -> if (isOperator c) then (_calc c arr) else ((read c :: Double):arr)) [] . words

calc :: String -> Double
calc s
  | s == "" = 0
  | otherwise = head $ cal s
