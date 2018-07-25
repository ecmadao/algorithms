=begin
5 kyu

Description:
This time we want to write calculations using functions and get the results. Let's have a look at some examples:
seven(times(five)) # must return 35
four(plus(nine)) # must return 13
eight(minus(three)) # must return 5
six(divided_by(two)) # must return 3

Requirements:
- There must be a function for each number from 0 ("zero") to 9 ("nine")
- There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
- Each calculation consist of exactly one operation and two numbers
- The most outer function represents the left operand, the most inner function represents the right operand
- Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...
=end
nums = %w(zero one two three four five six seven eight nine)

nums.each_with_index do |key, index|
  define_method key.to_sym do |op = nil|
    op ? op.call(index) : index
  end
end

def plus(x)
  lambda do |y|
    return x + y
  end
end
def minus(x)
  lambda do |y|
    return y - x
  end
end
def times(x)
  lambda do |y|
    return x * y
  end
end
def divided_by(x)
  lambda do |y|
    return y / x
  end
end

# example
print two(times(three()))
print eight(divided_by(three))
