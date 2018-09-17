=begin
Difficulty:
Medium

Desc:
Evaluate the value of an arithmetic expression in Reverse Polish Notation.
Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Note:
Division between two integers should truncate toward zero.
The given RPN expression is always valid.
That means the expression would always evaluate to a result and there won't be any divide by zero operation.

Example:
Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Example:
Input: ["4", "13", "5", "/", "+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

Example:
Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
Output: 22
Explanation:
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
=end

# @param {String[]} tokens
# @return {Integer}
def eval_rpn(tokens)
  queue = []

  while tokens.size > 0 do
    item = tokens.shift

    n1 = queue.pop()
    n2 = queue.pop()

    case item
    when "*" then queue.push(n2 * n1)
    when "/" then
      (n2 / n1) > 0 ? queue.push((n2 / n1).floor) : queue.push((n2 / n1).ceil)
    when "+" then queue.push(n2 + n1)
    when "-" then queue.push(n2 - n1)
    else
      if n2 != nil then
        queue.push(n2)
      end
      if n1 != nil then
        queue.push(n1)
      end
      queue.push(item.to_f)
    end
  end

  queue.shift.to_i
end

# Test case
puts eval_rpn(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
puts eval_rpn(["4", "13", "5", "/", "+"])
puts eval_rpn(["2", "1", "+", "3", "*"])
