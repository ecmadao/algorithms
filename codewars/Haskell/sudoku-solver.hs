{-
-- 3 kyu

Desc:
Write a function that will solve a 9x9 Sudoku puzzle.
The function will take one argument consisting of the 2D puzzle array,
with the value 0 representing an unknown square.

The Sudokus tested against your function will be "easy"
(i.e. determinable; there will be no need to assume and test possibilities on unknowns)
and can be solved with a brute-force approach.

Example:
puzzle = [[5,3,0,0,7,0,0,0,0],
          [6,0,0,1,9,5,0,0,0],
          [0,9,8,0,0,0,0,6,0],
          [8,0,0,0,6,0,0,0,3],
          [4,0,0,8,0,3,0,0,1],
          [7,0,0,0,2,0,0,0,6],
          [0,6,0,0,0,0,2,8,0],
          [0,0,0,4,1,9,0,0,5],
          [0,0,0,0,8,0,0,7,9]]

sudoku puzzle
{- Should return
  [[5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]]
-}
-}

import Data.Array
import qualified Data.Map as M
import qualified Data.List as L
import Data.Set (fromList, member)

-- Timeout solution: brute-force

_boardRow board r = board !! r

_boardColumn board c = map (\row -> row !! c) board

_boardSquare board r c = [board !! r !! c | c <- columnRange, r <- rowRange]
  where
    cStart = (c `div` 3) * 3
    rStart = (r `div` 3) * 3
    columnRange = [cStart..(cStart + 2)]
    rowRange = [rStart..(rStart + 2)]

_sIndex r c = ((r `div` 3) + 1) * 10 + (c `div` 3) + 1

_tmpBoard board r c
  | r >= length board = []
  | c >= (length $ head board) = _tmpBoard board (r + 1) 0
  | otherwise = (('r', r), fromList $ _boardRow board r):(('c', c), fromList $ _boardColumn board c):(('s', _sIndex r c), fromList $ _boardSquare board r c):(_tmpBoard board r (c + 1))

tmpBoard board = M.fromList $ _tmpBoard board 0 0

_squareOfRows rows squareRowRange squareColumnRange columnIndex = [rows !! r !! c | c <- squareColumnRange, r <- squareRowRange, c /= columnIndex]

_squareRowRange len
  | len <= 2 = [0..(len - 1)]
  | len <= 5 = [0..(len - 4)]
  | otherwise = [0..(len - 7)]

_wholeColumn rows columnIndex = map (\row -> row !! columnIndex) rows

isValidateRow x xs = not $ member x $ fromList xs

isValidateColumn rows columnIndex x = not $ member x $ fromList $ _wholeColumn rows columnIndex

isValidateSquare rows columnIndex x = not $ member x $ fromList squareNumbers
  where
    start = (columnIndex `div` 3) * 3
    columnRange = [start..(2 + start)]
    rowRange = _squareRowRange $ length rows
    squareNumbers = _squareOfRows rows rowRange columnRange columnIndex

permutationRow row rows tmp rowIndex = _permutationRow row [1..(length row)] 0
  where
    rKey = ('r', rowIndex)
    _permutationRow [] _ _ = [[]]
    _permutationRow (n:ns) availables columnIndex
      | n /= 0 = [n:xs | xs <- _permutationRow ns (L.delete n availables) (columnIndex + 1)]
      | otherwise = [x:xs | x <- availables, xs <- _permutationRow ns (L.delete x availables) (columnIndex + 1), not $ member x $ (M.!) tmp rKey, not $ member x $ (M.!) tmp cKey, not $ member x $ (M.!) tmp sKey, isValidateRow x xs, isValidateColumn rows columnIndex x, isValidateSquare rows columnIndex x]
      where
        cKey = ('c', columnIndex)
        sKey = ('s', _sIndex rowIndex columnIndex)

sudoku_bruteForce :: [[Int]] -> [[Int]]
sudoku_bruteForce board = head $ permutationRows board 0
  where
    tmp = tmpBoard board
    permutationRows [] _ = [[]]
    permutationRows (row:rows) rowIndex = [r:rs | rs <- permutationRows rows (rowIndex + 1), r <- permutationRow row rs tmp rowIndex]


-- ============================================================================================================================================================
-- ============================================================================================================================================================
-- ============================================================================================================================================================
-- ============================================================================================================================================================
-- ============================================================================================================================================================

{-
use
import Data.Array
import qualified Data.List as L

将递归转为扁平化的遍历，加快了运行速度

APIS:

- listArray: http://zvon.org/other/haskell/Outputarray/listArray_f.html
- array: http://zvon.org/other/haskell/Outputarray/array_f.html
- assocs: http://zvon.org/other/haskell/Outputarray/assocs_f.html
- elems: http://zvon.org/other/haskell/Outputarray/elems_f.html
- until: http://zvon.org/other/haskell/Outputprelude/until_f.html
-}

sudokuSolution arr = array ((0,0),(8,8)) $ map solution $ assocs arr
  where
    solution ((r, c), 0)
      | length nums == 1 = ((r, c), head nums)
      | otherwise = ((r, c), 0)
      where
        nums = (L.\\) [1..9] $ row ++ col ++ square
        row = [arr ! (r', c) | r' <- [0..8]]
        col = [arr ! (r, c') | c' <- [0..8]]
        square = [arr ! (r', c') | r' <- [rStart..(rStart + 2)], c' <- [cStart..(cStart + 2)]]
          where
            rStart = (r `div` 3) * 3
            cStart = (c `div` 3) * 3
    solution ((r, c), n) = ((r, c), n)

done = all (/=0) . elems

sudoku :: [[Int]] -> [[Int]]
sudoku board = extract $ until done sudokuSolution arr
  where
    arr = listArray ((0, 0),(8, 8)) $ concat board
    extract arr = [[arr ! (r, c) | c <- [0..8]] | r <- [0..8]]

-- Test case
puzzle = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]]

r' = sudoku_bruteForce puzzle
r = sudoku puzzle
