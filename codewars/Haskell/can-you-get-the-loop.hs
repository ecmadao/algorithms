{-
-- 5 kyu

Desc:
You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.
Your objective is to determine the length of the loop.
For example in the following picture the tail's size is 3 and the loop size is 11.

-- use the `next :: Node a -> Node a` function to get the following node
-}

import qualified Data.List as List

{-
data Node a
instance Eq a => Eq (Node a)

next :: Node a -> Node a
-}


_extract (Just a) = a

_loopSize ns n
  | index /= Nothing = 1 + _extract index
  | otherwise = _loopSize (n:ns) (next n)
  where index = List.elemIndex n ns

loopSize :: Eq a => Node a -> Int
loopSize n = _loopSize [] n
