{-
-- 5 kyu

Desc:
Write a function called that takes a string of parentheses,
and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid.

Example:
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints:
0 <= input.length <= 100
Along with opening (() and closing ()) parenthesis,
input may contain any valid ASCII characters.
Furthermore, the input string may be empty and/or not contain any parentheses at all.
Do not treat other forms of brackets as parentheses (e.g. [], {}, <>).
-}


import qualified Data.Map as Map

parenthesesMap = Map.fromList [('}', '{'), (']', '['), (')', '(')]

isLeftParentheses s = Map.lookup s parenthesesMap == Nothing

getMaybeValue (Just a) = a

oppositeParentheses s
  | t == Nothing = error "can not get roman from Nothing"
  | otherwise = getMaybeValue t
  where t = Map.lookup s parenthesesMap

_validParentheses [] [] = True
_validParentheses [] (x:_) = False
_validParentheses (c:cs) [] = if isLeftParentheses c then _validParentheses cs [c] else False
_validParentheses (c:cs) (t:ts) = if isLeftParentheses c then _validParentheses cs (c:t:ts) else
  if (oppositeParentheses c) == t then _validParentheses cs ts else False

validParentheses :: String -> Bool
validParentheses string = _validParentheses string []
