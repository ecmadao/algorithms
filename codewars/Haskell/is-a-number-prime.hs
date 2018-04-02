{-
-- 6 kyu

Define a function isPrime/is_prime() that takes one integer argument
and returns true/True or false/False depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime)
is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Example:
isPrime(5)
=> true

Assumptions:
You can assume you will be given an integer input.
You can not assume that the integer will be only positive.
You may be given negative numbers as well (or 0).
-}

isPrime :: Integer -> Bool
isPrime x
  | x <= 0 = False
  | x == 1 = False
  | x == 2 = True
  | otherwise = all (==True) $ [x `mod` a /= 0 | a <- [2..(floor $ sqrt (fromIntegral x))]]


{-
-- 关于素数获取
-- 更高效的方法：埃拉托斯特尼筛法
给定从 2 开始的连续一些列的数，2 为素数，而 2 之后的所有以 2 为因数的数均不是素数，可以被筛选掉
同理，2 之后的 3 是素数，3 后面所有以 3 为因数的数不是素数，应该被筛选掉
-}

sieve :: (Integral a) => [a] -> [a]
sieve (p:xs) = p : sieve [x | x <- xs, x `mod` p /= 0]

-- 获取前 N 个素数
getPrimes n = take n $ sieve [2..]

-- getPrimes 10
-- [2,3,5,7,11,13,17,19,23,29]
