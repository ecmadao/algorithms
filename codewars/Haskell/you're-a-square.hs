{-
-- 7 kyu

Desc:
A square of squares
You like building blocks. You especially like building blocks that are squares.
And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square.
Instead, you end up with an ordinary rectangle! Those blasted things!
If you just had a way to know, whether you're currently working in vain…
Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task:
Given an integral number, determine if it's a square number

Examples
isSquare (-1) `shouldBe` False
isSquare   3 `shouldBe` False
isSquare   4 `shouldBe` True
isSquare  25 `shouldBe` True
isSquare  26 `shouldBe` False
-}

-- Solution 0
_isSquare :: Integral n => n -> Bool
_isSquare n
  | n < 0 = False
  | n == 0 = True
  | n == 1 = True
  | otherwise = n `elem` [x * x | x <- [1..(n `div` 2)]]

-- Solution 1
isSquare :: Integral n => n -> Bool
isSquare n = let x = round $ sqrt $ fromIntegral n in x * x == n
{-
or
isInt x = x == fromInteger (round x)

isSquare n
  | n < 0 = False
  | otherwise = isInt $ sqrt $ fromIntegral n
-}

{-
注：
:t fromIntegral
(Num b, Integral a) => a -> b
即将 Integral（仅包含整数的类型类）转换为 Num（表示数值的类型类）
-}
