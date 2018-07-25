=begin
6kyu

Description:
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
# returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
# returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
# returns 'Bart'

list([])
# returns ''

Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
=end

def list names
  names.size > 2 ? names[0...-1].map { |item| item[:name] }.join(', ') + ' & ' + names[-1][:name] : names.map { |item| item[:name] }.join(' & ')
end
