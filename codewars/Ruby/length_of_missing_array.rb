=begin
6 kyu

Description:
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.
=end

def getLengthOfMissingArray(array_of_arrays)
  unless array_of_arrays && array_of_arrays.size > 0 then
    return 0
  else
    lens = []
    array_of_arrays.each do |arr|
      return 0 unless arr && arr.size > 0
      lens.push(arr.size)
    end
    (lens.min + 1...lens.max).each do |len|
      return len unless lens.include?(len)
    end
  end
end

print getLengthOfMissingArray([[], [1], [1,1]]) # 0
