{-
-- 6kyu

Desc:
Write simple .camelCase method (camel_case function in PHP or CamelCase in C#) for strings.
All words must have their first letter capitalized without spaces.

Example:
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

Note:
May has leading or tailing whilespace in string
-}

import qualified Data.Char as Char

camelCase :: String -> String
camelCase = foldr (\(a:as) y -> (Char.toUpper a):as++y) "" . words
