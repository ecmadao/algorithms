/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T,
 * for example: "ACGAATTCCG". When studying DNA,
 * it is sometimes useful to identify repeated sequences within the DNA.
 * Write a function to find all the 10-letter-long sequences (substrings)
 * that occur more than once in a DNA molecule.
 *
 * Example:
 * Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",
 * Return:
 * ["AAAAACCCCC", "CCCCCAAAAA"].
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const set = new Set();
  const results = new Set();
  for (let i = 0; i <= s.length - 10; i += 1) {
    const str = s.slice(i, i + 10);
    if (set.has(str)) {
      results.add(str);
    }
    set.add(str);
  }
  return [...results];
};

console.log(findRepeatedDnaSequences("AAAAAAAAAAA"));
console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));
