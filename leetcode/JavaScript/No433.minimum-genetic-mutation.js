/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * A gene string can be represented by an 8-character long string, with choices from "A", "C", "G", "T".
 * Suppose we need to investigate about a mutation (mutation from "start" to "end"),
 * where ONE mutation is defined as ONE single character changed in the gene string.
 *
 * For example, "AACCGGTT" -> "AACCGGTA" is 1 mutation.
 *
 * Also, there is a given gene "bank", which records all the valid gene mutations. A gene must be in the bank to make it a valid gene string.
 * Now, given 3 things - start, end, bank, your task is to determine what is the minimum number of mutations needed to mutate from "start" to "end".
 * If there is no such a mutation, return -1.
 *
 * Example:
 * start: "AACCGGTT"
 * end:   "AACCGGTA"
 * bank: ["AACCGGTA"]
 * return: 1
 *
 * start: "AACCGGTT"
 * end:   "AAACGGTA"
 * bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]
 * return: 2
 *
 * start: "AAAAACCC"
 * end:   "AACCCCCC"
 * bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]
 * return: 3
 *
 * Note:
 * - Starting point is assumed to be valid, so it might not be included in the bank.
 * - If multiple mutations are needed, all mutations during in the sequence must be valid.
 * - You may assume start and end string is not the same.
 */

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  if (!start || !end || !bank.length) return -1;
  let queue = [{
    count: 0,
    gene: start
  }];
  let loopCount = 0;
  const set = new Set(bank);
  const candidates = ['A', 'G', 'C', 'T'];

  while (queue.length) {
    const { gene, count } = queue.shift();
    if (gene === end) return count;

    for (let i = 0; i < gene.length; i += 1) {
      const dna = gene[i];
      for (const candidate of candidates) {
        if (candidate === dna) continue;
        const newGene = `${gene.slice(0, i)}${candidate}${gene.slice(i + 1)}`;
        if (set.has(newGene)) {
          if (newGene === end) {
            return count + 1;
          }
          queue.push({
            gene: newGene,
            count: count + 1
          });
          set.delete(newGene);
        }
      }
    }
  }
  return -1;
};

// Test case
console.log(minMutation("AACCGGTT", "AAACGGTA", ["AACCGATT","AACCGATA","AAACGATA","AAACGGTA"])); // 4
console.log(minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"])); // 2
console.log(minMutation("AAAAACCC", "AACCCCCC", ["AAAACCCC", "AAACCCCC", "AACCCCCC"])); // 3
console.log(minMutation("AACCGGTT", "AACCGCTA", ["AACCGGTA","AACCGCTA","AAACGGTA"])); // 2
console.log(minMutation("AAAAAAAA", "CCCCCCCC", ["AAAAAAAA","AAAAAAAC","AAAAAACC","AAAAACCC","AAAACCCC","AACACCCC","ACCACCCC","ACCCCCCC","CCCCCCCA"])); // -1
console.log(minMutation("AAAAAAAA", "CCCCCCCC", ["AAAAAAAA","AAAAAAAC","AAAAAACC","AAAAACCC","AAAACCCC","AACACCCC","ACCACCCC","ACCCCCCC","CCCCCCCA","CCCCCCCC"])); // 8
