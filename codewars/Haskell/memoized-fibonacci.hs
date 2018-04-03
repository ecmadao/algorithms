{-
-- 5 kyu

重构 斐波那契数列 函数，让它更高效
fibonacci 0 = 0
fibonacci 1 = 1
fibonacci n = fibonacci (n-1) + fibonacci (n-2)
-}


fibStep (p, n) = (n, p + n)

fibPair 0 = (0, 1)
fibPair n = fibStep (fibPair (n - 1))

fastFib = fst . fibPair

fibonacci :: Int -> Integer
fibonacci 0 = 0
fibonacci n = last $ map fastFib [1..n]
