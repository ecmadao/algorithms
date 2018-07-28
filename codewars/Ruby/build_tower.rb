=begin
6 kyu

Description:
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Example:

A tower of 3 floors looks like below
[
  '  *  ',
  ' *** ',
  '*****'
]

A tower of 6 floors looks like below
[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
=end

def towerBuilder(n_floors)
  tower = []
  n_floors.step(1, -1) { |num|
    empty = n_floors - num
    tower.unshift(" " * empty + "*" * (1 + (num - 1) * 2) + " " * empty)
  }
  return tower
end

towerBuilder(2)
towerBuilder(6)