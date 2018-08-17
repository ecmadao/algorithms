def match(s, p, i, j)
  if i >= s.size && j >= p.size then
    return true
  end
  if i < s.size && j >= p.size then
    return false
  end
  if i >= s.size then
    return is_empty(p, j)
  end

  s1 = s[i]
  s2 = p[j]
  if s1 == s2 || s2 == '.' then
    if j < p.size - 1 && p[j + 1] == '*' then
      result = match(s, p, i, j + 2)
      return result unless result == false
      i += 1
      while i < s.size && (s2 == '.' || (s2 != '.' && s[i] == s2)) do
        result = match(s, p, i, j + 2)
        return result unless result == false
        i += 1
      end
      return match(s, p, i, j + 2)
    else
      return match(s, p, i + 1, j + 1)
    end
  else
    return false unless j < p.size - 1 && p[j + 1] == '*'
    return match(s, p, i, j + 2)
  end
end

def is_empty(p, j)
  count = p.size - j
  return false unless count % 2 == 0
  while j < p.size do
    return false unless p[j + 1] == '*'
    j += 2
  end
  return true
end

# @param {String} s
# @param {String} p
# @return {Boolean}
def is_match(s, p)
  return match(s, p, 0, 0)
end
