{-
Difficulty:
Easy

Desc:
Implement int sqrt(int x).
Compute and return the square root of x.

求最接近 x 的开方的整数（返回的结果的平方要小于等于 x）
-}

-- 利用自带 API
mySqrt1 :: Integral a => a -> a
mySqrt1 = floor . sqrt . fromIntegral

-- 利用二分法
_mySqrt2 start end target
  | start >= end = start
  | center * center <= target = _mySqrt2 center end target
  | otherwise = _mySqrt2 start (center - 1) target
  where center = (start + end + 1) `div` 2
        square = center * center

mySqrt_2 x = _mySqrt2 0 x x

-- 利用牛顿法
newton c t = (c / t + t) / 2.0

_mySqrt3 c t
  | (floor $ abs $ newton c t - t) == 0 = t
  | otherwise = _mySqrt3 c (t + 1)

mySqrt3 x
  | y * y > x = y - 1
  | otherwise = y
  where
    y = _mySqrt3 x 1
