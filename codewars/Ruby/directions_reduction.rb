=begin
5 kyu

Description:
The directions given to the man are, for example, the following:
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable,
better stay to the same place! So the task is to give to the man a simplified version of the plan.
A better plan in this case is simply:
["WEST"]

Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
What a waste of time! Better to do nothing.
=end

def dirReduc(arr)
  results = []
  h = { "NORTH" => "SOUTH", "SOUTH" => "NORTH", "EAST" => "WEST", "WEST" => "EAST" }
  arr.each do |dis|
    if h[dis] == results.last then
      results.pop
    else
      results.push(dis)
    end
  end
  return results
end


a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
print dirReduc(a) # ["WEST"]

a = ["NORTH", "WEST", "SOUTH", "EAST"]
print dirReduc(a) # ["NORTH", "WEST", "SOUTH", "EAST"]

a = ["NORTH", "SOUTH", "EAST", "WEST"]
print dirReduc(a) # []

a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
print dirReduc(a) # ["WEST"]
