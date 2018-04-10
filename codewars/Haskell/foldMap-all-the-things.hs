{-
-- 4 kyu

Desc:
The foldMap function can be used to implement all kind of folds. Here is its signature :
foldMap :: (Monoid m, Foldable t) => (a -> m) -> t a -> m

In this exercise, you will have to implement the following functions, by increasing difficulty, in terms of foldMap :
1. myToList : turn any Foldable into a list
2. myMinimum : get the minimum value from any Foldable (hint : you will have to write a custom type, with a custom Monoid instance)
3. myFoldr : implement foldr in terms of foldMap (hint : there is a suitable Monoid in Data.Monoid)
There should be a single use of foldMap in each of the requested functions !

-}

import Data.Foldable (foldMap, Foldable)
import Data.Monoid
import Control.Applicative

myToList :: Foldable t => t a -> [a]
myToList = foldMap (\x -> [x])


myMinimum :: (Ord a, Foldable t) => t a -> Maybe a
myMinimum xs = if length xs == 0 then Nothing else Just $ minimum $ foldMap (\x -> [x]) xs

myFoldr :: Foldable t => (a -> b -> b) -> b -> t a -> b
myFoldr f z t = appEndo (foldMap (Endo . f) t) z

-- ============== others better solution

newtype Minimum a = Minimum { getMinimum :: Maybe a }
                  deriving (Show, Eq)

instance Ord a => Monoid (Minimum a) where
    mempty = Minimum Nothing
    Minimum a `mappend` Minimum b = Minimum ( (min <$> a <*> b) <|> a <|> b )

myToList :: Foldable t => t a -> [a]
myToList = foldMap return

myMinimum :: (Ord a, Foldable t) => t a -> Maybe a
myMinimum = getMinimum . foldMap (Minimum . Just)

myFoldr :: Foldable t => (a -> b -> b) -> b -> t a -> b
myFoldr f z t = appEndo (foldMap (Endo . f) t) z

