{-
-- 4 kyu

Desc:
Write a function that takes a string of braces,
and determines if the order of the braces is valid.
It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata,
but introduces new characters: brackets [], and curly braces {}.

All input strings will be nonempty, and will only consist of parentheses,
brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples:
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
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
_validParentheses (x:_) [] = False
_validParentheses [] (c:cs) = if isLeftParentheses c then _validParentheses [c] cs else False
_validParentheses (t:ts) (c:cs) = if isLeftParentheses c then _validParentheses (c:t:ts) cs else
  if (oppositeParentheses c) == t then _validParentheses ts cs else False

validBraces :: String -> Bool
validBraces = _validParentheses []
