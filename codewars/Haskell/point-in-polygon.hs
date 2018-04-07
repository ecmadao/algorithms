{-
-- 3 kyu

Desc:
In this kata, you're going write a function called pointInPoly to test if a point is inside a polygon.
Points will be represented as [x,y] arrays.
The polygon will be an array of points which are the polygon's vertices.
The last point in the array connects back to the first point.

You can assume:
1. The polygon will be a valid simple polygon.
   That is, it will have at least three points, none of its edges will cross each other,
   and exactly two edges will meet at each vertex.
2. In the tests, the point will never fall exactly on an edge of the polygon.

判断一个点是否在多边形内
Point in polygon 测试：https://en.wikipedia.org/wiki/Point_in_polygon
如何判定一点是否在给定顶点的不规则封闭区域内：https://www.zhihu.com/question/26551754/answer/33185339
-}

type Point = (Double, Double)

isCross [p1,p2] p
  | y1 == y2 = False
  | min y1 y2 > y = False
  | max y1 y2 <= y = False
  | otherwise = if (y - y1) * (x2 - x1) / (y2 - y1) + x1 < x then True else False
  where
    x1 = fst p1
    y1 = snd p1
    x2 = fst p2
    y2 = snd p2
    x = fst p
    y = snd p

crossCheck ([p1], n) p2 point = ([p2], count)
  where
    crossed = isCross [p1,p2] point
    count = if crossed then n + 1 else n

pointInPoly :: [Point] -> Point -> Bool
pointInPoly (p1:ps) point = odd $ snd $ foldl (\t p -> crossCheck t p point) ([p1], 0) (ps ++ [p1])
