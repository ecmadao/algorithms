{-
-- 6 kyu

In this kata you have to write a simple Morse code decoder.
While the Morse code is now mostly superceded by voice and digital data communication channels,
it still has its use in some applications around the world.

The Morse code encodes every character as a sequence of "dots" and "dashes".
For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−.
The Morse code is case-insensitive, traditionally capital letters are used.
When the message is written in Morse code,
a single space is used to separate the character codes and 3 spaces are used to separate words.
For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·

NOTE: Extra spaces before or after the code have no meaning and should be ignored

decodeMorse ".... . -.--   .--- ..- -.. ."
-- should return "HEY JUDE"
-}

module Codewars.Kata.DecodeMorse (decodeMorse) where

import Codewars.Kata.DecodeMorse.Preload (morseCodes)

import Data.Map.Strict ((!))
import Data.List
import Data.List.Split

decodeMorse :: String -> String
decodeMorse = unwords . filter (/= "") . map (\str -> foldr (\x y -> morseCodes ! x ++ y) "" $ words str) . splitOn "   "
