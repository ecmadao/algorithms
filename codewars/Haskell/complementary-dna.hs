{-
-- 7 kyu

Desc:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells
and carries the "instructions" for the development and functioning of living organisms.

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
You have function with one side of the DNA (string, except for Haskell);
you need to get the other complementary side.
DNA strand is never empty or there is no DNA at all (again, except for Haskell).

Example:
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]
-}

import qualified Data.Map as Map

data Base = A | T | G | C deriving (Show, Eq, Ord)
type DNA = [Base]

dnaMap = Map.fromList $ zip [G,A,T,C] $ reverse [G,A,T,C]

dnaStrand = map (\x -> (Map.!) dnaMap x)
