{-
-- 5 kyu

Desc:
The marketing team are spending way too much time typing in hashtags.
Let's help them with out own Hashtag Generator!

Here's the deal:
1. If the final result is longer than 140 chars it must return false.
2. If the input is a empty string it must return false.
3. It must start with a hashtag (#).
4. All words must have their first letter capitalized.

Example:
" Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"
" Hello World " => "#HelloWorld"
-}

import Data.List
import Data.Char

generateHashtag :: String -> Maybe String
generateHashtag str
  | length ws == 0 = Nothing
  | otherwise = let r = '#' : (foldr (\(x:xs) y -> (toUpper x):xs ++ y) "" ws) in if length r > 140 then Nothing else Just r
  where
    ws = words str