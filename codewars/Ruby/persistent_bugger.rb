=begin
6 kyu

Desc:
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
which is the number of times you must multiply the digits in num until you reach a single digit.

Example:
persistence(39) # returns 3, because 3*9=27, 2*7=14, 1*4=4
                 # and 4 has only one digit

 persistence(999) # returns 4, because 9*9*9=729, 7*2*9=126,
                  # 1*2*6=12, and finally 1*2=2

 persistence(4) # returns 0, because 4 is already a one-digit number
=end

def product(n)
  result = 1
  while n > 0
    result *= n % 10
    n = n.div(10)
  end
  return result
end

def persistence(n, step = 0)
  if n.div(10) == 0
    return step
  else
    return persistence(product(n), step + 1)
  end
end

# solution 2
def persistence(n)
  return n < 10 ? 0 : 1 + persistence(n.to_s.chars.inject(1) { |r, c| r * c.to_i })
end
