{-
-- 3 kyu

Desc:
Create a simple calculator that given a string of operators (+ - * and /) and numbers
separated by spaces returns the value of that expression

Example:
Calculator.evaluate "2 / 2 + 3 * 4 - 6" // => 7.0

Note:
Remember about the order of operations!
Multiplications and divisions have a higher priority and should be performed left-to-right.
Additions and subtractions have a lower priority and should also be performed left-to-right.
-}

newtype Operator = Operator { getOperator :: String } deriving (Show)

instance Eq Operator where
  Operator "+"  == Operator "-" = True
  Operator "-"  == Operator "+" = True
  Operator "*"  == Operator "/" = True
  Operator "/"  == Operator "*" = True
  Operator a == Operator b = a == b
  Operator a /= Operator b = a /= b

instance Ord Operator where
  compare (Operator a) (Operator b)
    | (Operator a) == (Operator b) = GT
    | a == "*" = GT
    | a == "/" = GT
    | b == "+" = GT
    | b == "-" = GT
    | otherwise = LT

fire op n1 n2
  | op == "+" = show (n + n')
  | op == "-" = show (n - n')
  | op == "*" = show (n * n')
  | otherwise = show (n / n')
  where
    n = read n1 :: Double
    n' = read n2 :: Double

cal [n] = n
cal (n1:op:n2:[]) = fire op n1 n2
cal (n1:op1:n2:op2:n3:ns)
  | Operator op1 < Operator op2 = cal (n1:op1:(fire op2 n2 n3):ns)
  | otherwise = cal ((fire op1 n1 n2):op2:n3:ns)

evaluate :: String -> Double
evaluate str = read (cal $ words str) :: Double

-- Test case
-- evaluate "2 / 2 + 3 * 4 - 13" == 0
-- evaluate "4 + 3 * 4 / 3 - 6 / 3 * 3 + 8" == 10

-- other solution
-- import Data.List.Split
-- evaluate :: String -> Double
-- evaluate s =
--   rAdd $ rMult $ splitOn " " s
--   where
--     rMult (a:[]) = [a]
--     rMult (a:"*":b:xs) = rMult $ show ( read a * read b :: Double ) : xs
--     rMult (a:"/":b:xs) = rMult $ show ( read a / read b ) : xs
--     rMult (a:op:b:xs) = a : op : rMult ( b : xs )
--     rAdd (a:xs) = r (read a) xs
--       where r acc ("+":b:xs) = r ( acc + read b ) xs
--             r acc ("-":b:xs) = r ( acc - read b ) xs
--             r acc [] = acc