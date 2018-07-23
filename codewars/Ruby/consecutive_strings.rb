=begin
6 kyu

Description:
You are given an array strarr of strings and an integer k.
Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
=end

=begin
# unless 中当 condition 为假时执行
unless condition then
  # do something
else
  # do something
end

array.each_cons(num) 将数组分成长度为 num 的多个子数组
array.max_by { |item| .. }
=end
def longest_consec(strarr, k)
  return "" unless k.between?(1, strarr.size)
  return strarr.each_cons(k).map(&:join).max_by(&:size)
end
