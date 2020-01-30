/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a C++ program, remove comments from it. The program source is an array where source[i] is the i-th line of the source code. This represents the result of splitting the original source code string by the newline character \n.
 * In C++, there are two types of comments, line comments, and block comments.
 *
 * The string // denotes a line comment, which represents that it and rest of the characters to the right of it in the same line should be ignored.
 * The string /* denotes a block comment, which represents that all characters until the next (non-overlapping) occurrence of *\/ should be ignored. (Here, occurrences happen in reading order: line by line from left to right.) To be clear, the string /*\/ does not yet end the block comment, as the ending would be overlapping the beginning.
 *
 * The first effective comment takes precedence over others:
 * if the string // occurs in a block comment, it is ignored.
 * Similarly, if the string /* occurs in a line or block comment, it is also ignored.
 *
 * If a certain line of code is empty after removing comments, you must not output that line: each string in the answer list will be non-empty.
 * There will be no control characters, single quote, or double quote characters. For example, source = "string s = "/* Not a comment. *\/";" will not be a test case. (Also, nothing else such as defines or macros will interfere with the comments.)
 * It is guaranteed that every open block comment will eventually be closed, so /* outside of a line or block comment always starts a new comment.
 *
 * Finally, implicit newline characters can be deleted by block comments. Please see the examples below for details.
 * After removing the comments from the source code, return the source code in the same format.
 *
 * Example1:
 * Input:
 * source = ["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]
 * The line by line code is visualized as below:
 * /*Test program */
 * int main()
 * {
 * // variable declaration
 * int a, b, c;
 * /* This is a test
 * multiline
 * comment for
 * testing */
 * a = b + c;
 * }
 * Output: ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]
 * 
 * The line by line code is visualized as below:
 * int main()
 * {
 * int a, b, c;
 * a = b + c;
 * }
 * 
 * Explanation:
 * The string /* denotes a block comment, including line 1 and lines 6-9. The string // denotes line 4 as comments.
 * 
 * Example2:
 * Input:
 * source = ["a/*comment", "line", "more_comment*/b"]
 * Output: ["ab"]
 * Explanation: The original source string is "a/*comment\nline\nmore_comment*/b", where we have bolded the newline characters.  After deletion, the implicit newline characters are deleted, leaving the string "ab", which when delimited by newline characters becomes ["ab"].
 *
 * Note:
 * 1. The length of source is in the range [1, 100].
 * 2. The length of source[i] is in the range [0, 80].
 * 3. Every open block comment is eventually closed.
 * 4. There are no single-quote, double-quote, or control characters in the source code.
 */

/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
  let block = false
  const results = []
  let blockPrefix = ''

  const handleBlockStr = (str) => {
    if (!/(\/\*|\*\/)/.test(str)) return

    const index = str.indexOf(block ? '*/' : '/*')
    if (index < 0) return
    const mark = str.slice(index, index + 2)

    if (mark === '*/' && block) {
      block = false
    } else if (mark === '/*' && !block) {
      blockPrefix = `${blockPrefix}${str.slice(0, index)}`
      block = true
    }

    handleStr(str.slice(index + 2))
  }

  const handleStr = (str) => {
    if (!str) return

    if (block) {
      handleBlockStr(str)
      if (!block && blockPrefix) {
        results.push(blockPrefix)
        blockPrefix = ''
      }
    } else if (!/(\/\*|\/\/)/.test(str)) {
      results.push(`${blockPrefix}${str}`)
      blockPrefix = ''
    } else {
      const blockIndex = str.indexOf('/*') === -1 ? Infinity : str.indexOf('/*')
      const lineIndex = str.indexOf('//') === -1 ? Infinity : str.indexOf('//')
      if (lineIndex < blockIndex) {
        if (lineIndex > 0) {
          results.push(
            `${blockPrefix}${str.slice(0, lineIndex)}`
          )
          blockPrefix = ''
        } else if (blockPrefix) {
          results.push(blockPrefix)
          blockPrefix = ''
        }
      } else {
        handleBlockStr(str)
      }
    }
  }

  for (const str of source) handleStr(str)

  if (blockPrefix) results.push(blockPrefix)
  return results
}

/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments_2 = function(source) {
  let block = false
  const results = []
  let newline = []

  for (const str of source) {
    if (!block) newline = []

    let i = 0
    while (i < str.length) {
      const mark = str.slice(i, i + 2)

      if (mark === '/*' && !block) {
        block = true
        i += 1
      } else if (mark === '*/' && block) {
        block = false
        i += 1
      } else if (mark === '//' && !block) {
        break
      } else if (!block) {
        newline.push(str[i])
      }
      i += 1
    }

    if (!block && newline.length) {
      results.push(newline.join(''))
      newline = []
    }
  }
  return results
}

// test case

// Input: ["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test // test /* 123 */aaaa", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]
// Output: ["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test // test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]

// Input: ["   /*double y = 1;*/"]
// Output: ["   "]

// Input: ["class test{", "public: ", "   int x = 1;", "   /*double y = 1;*/", "   char c;", "};"]
// Output: ["class test{","public: ","   int x = 1;","   ","   char c;","};"]

// Input: ["void func(int k) {", "// this function does nothing /*", "   k = k*2/4;", "   k = k/2;*/", "}"]
// Output: ["void func(int k) {","   k = k*2/4;","   k = k/2;*/","}"]

// Input: ["a//*b/*/c","blank","d/*/e/*/f"]
// Output: ["a","blank","df"]

// Input: ["a/*/b//*c","blank","d/*/e*//f"]
// Output: ["ae*"]

// Input: ["a/*comment", "line", "more_comment*/b"]
// Output: ["ab"]

// Input: ["a/*comment", "abc/*line*/edf*/", "more_comment*/b"]
// Output: ["aedf*/","more_comment*/b"]

// Input: ["a/*comment", "line*/test/*", "more_comment*/b"]
// Output: ["atestb"]

// Input: ["a/*comment", "line*/test/*"]
// Output: ["atest/*"]
