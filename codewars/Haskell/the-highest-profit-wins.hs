{-
-- 7 kyu

Story
Ben has a very simple idea to make some profit: he buys something and sells it again.
Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price.
Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples
minMax [1,2,3,4,5] `shouldBe` (1, 5)
minMax [2334454,5] `shouldBe` (5, 2334454)
minMax [1]         `shouldBe` (1, 1)
-}

-- | Takes a non-empty list and returns
--   both maximum and minimum value
minMax :: (Ord a) => [a] -> (a, a)
minMax xs = (minimum xs, maximum xs)
