{-
-- 4 kyu

Desc:
Consider a sequence u where u is defined as follows:
1. The number u(0) = 1 is the first one in u.
2. For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
3. There are no other numbers in u.

Example:
u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:
Given parameter n the function dbl_linear (or dblLinear...)
returns the element u(n) of the ordered (with <) sequence u.

dbl_linear(10) should return 22

Note:
Focus attention on efficiency
-}


-- _generate n i j arr
--   | length arr == (n + 1) = arr !! n
--   | ni == nj = _generate n (i + 1) (j + 1) $! (arr ++ [ni])
--   | ni < nj = _generate n (i + 1) j $! (arr ++ [ni])
--   | otherwise = _generate n i (j + 1) $! (arr ++ [nj])
--   where
--     ni = (arr !! i) * 2 + 1
--     nj = (arr !! j) * 3 + 1

-- _generate n i j arr
--   | length arr == n = head arr
--   | ni == nj = _generate n i j (ni:arr)
--   | ni < nj = _generate n i (j + 1) (ni:arr)
--   | otherwise = _generate n (i + 1) j (nj:arr)
--   where
--     ni = (arr !! i) * 2 + 1
--     nj = (arr !! j) * 3 + 1

-- TODO:
-- Time out error when submit

dblLinear :: Int -> Integer
dblLinear n = _generate 0 0 [1]
    where
      _generate i j arr
        | length arr == (n + 1) = head arr
        | ni == nj = _generate i j (ni:arr)
        | ni < nj = _generate i (j + 1) (ni:arr)
        | otherwise = _generate (i + 1) j (nj:arr)
        where
          ni = (arr !! i) * 2 + 1
          nj = (arr !! j) * 3 + 1

{-
Test case
dblLinear 10 == 22
dblLinear 20 == 57
dblLinear 30 == 91
dblLinear 50 == 175
-}