{-
Difficulty:
Easy

Desc:
Implement int sqrt(int x).
Compute and return the square root of x.

求最接近 x 的开方的整数（返回的结果的平方要小于等于 x）
考核二分法
-}

mySqrt :: Integral a => a -> a
mySqrt = floor . sqrt . fromIntegral
