/**
 * Difficulty:
 * Hard
 *
 * Desc:
 * Given a string representing a code snippet, you need to implement a tag validator to parse the code and return whether it is valid.
 *
 * A code snippet is valid if all the following rules hold:
 * 1. The code must be wrapped in a valid closed tag. Otherwise, the code is invalid.
 * 2. A closed tag (not necessarily valid) has exactly the following format : <TAG_NAME>TAG_CONTENT</TAG_NAME>. Among them, <TAG_NAME> is the start tag, and </TAG_NAME> is the end tag. The TAG_NAME in start and end tags should be the same. A closed tag is valid if and only if the TAG_NAME and TAG_CONTENT are valid.
 * 3. A valid TAG_NAME only contain upper-case letters, and has length in range [1,9]. Otherwise, the TAG_NAME is invalid.
 * 4. A valid TAG_CONTENT may contain other valid closed tags, cdata and any characters (see note1) EXCEPT unmatched <, unmatched start and end tag, and unmatched or closed tags with invalid TAG_NAME. Otherwise, the TAG_CONTENT is invalid.
 * 5. A start tag is unmatched if no end tag exists with the same TAG_NAME, and vice versa. However, you also need to consider the issue of unbalanced when tags are nested.
 * 6. A < is unmatched if you cannot find a subsequent >. And when you find a < or </, all the subsequent characters until the next > should be parsed as TAG_NAME (not necessarily valid).
 * 7. The cdata has the following format : <![CDATA[CDATA_CONTENT]]>. The range of CDATA_CONTENT is defined as the characters between <![CDATA[ and the first subsequent ]]>.
 * 8. CDATA_CONTENT may contain any characters. The function of cdata is to forbid the validator to parse CDATA_CONTENT, so even it has some characters that can be parsed as tag (no matter valid or invalid), you should treat it as regular characters.
 * 
 * Example 1:
 * Input: "<DIV>This is the first line <![CDATA[<div>]]></DIV>"
 * Output: True
 * Explanation: 
 * The code is wrapped in a closed tag : <DIV> and </DIV>. 
 * The TAG_NAME is valid, the TAG_CONTENT consists of some characters and cdata. 
 * Although CDATA_CONTENT has unmatched start tag with invalid TAG_NAME, it should be considered as plain text, not parsed as tag.
 * So TAG_CONTENT is valid, and then the code is valid. Thus return true.
 * 
 * Example 2:
 * Input: "<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>"
 * Output: True
 * Explanation:
 * We first separate the code into : start_tag|tag_content|end_tag.
 * start_tag -> "<DIV>"
 * end_tag -> "</DIV>"
 * tag_content could also be separated into : text1|cdata|text2.
 * text1 -> ">>  ![cdata[]] "
 * cdata -> "<![CDATA[<div>]>]]>", where the CDATA_CONTENT is "<div>]>"
 * text2 -> "]]>>]"
 * 
 * The reason why start_tag is NOT "<DIV>>>" is because of the rule 6.
 * The reason why cdata is NOT "<![CDATA[<div>]>]]>]]>" is because of the rule 7.
 * 
 * Invalid Code Examples 1:
 * Input: "<A>  <B> </A>   </B>"
 * Output: False
 * Explanation: Unbalanced. If "<A>" is closed, then "<B>" must be unmatched, and vice versa.
 * 
 * Invalid Code Examples 2:
 * Input: "<DIV>  div tag is not closed  <DIV>"
 * Output: False
 * 
 * Invalid Code Examples 3:
 * Input: "<DIV>  unmatched <  </DIV>"
 * Output: False
 * 
 * Invalid Code Examples 4:
 * Input: "<DIV> closed tags with invalid tag name  <b>123</b> </DIV>"
 * Output: False
 * 
 * Invalid Code Examples 5:
 * Input: "<DIV> unmatched tags with invalid tag name  </1234567890> and <CDATA[[]]>  </DIV>"
 * Output: False
 * 
 * Invalid Code Examples 6:
 * Input: "<DIV>  unmatched start tag <B>  and unmatched end tag </C>  </DIV>"
 * Output: False
 * 
 * Note:
 * For simplicity, you could assume the input code (including the any characters mentioned above) only contain letters, digits, '<','>','/','!','[',']' and ' '
 * 
 * 给定一个表示代码片段的字符串，你需要实现一个验证器来解析这段代码，并返回它是否合法。合法的代码片段需要遵守以下的所有规则：
 * 
 * 1. 代码必须被合法的闭合标签包围。否则，代码是无效的。
 * 2. 闭合标签（不一定合法）要严格符合格式：<TAG_NAME>TAG_CONTENT</TAG_NAME>。其中，<TAG_NAME>是起始标签，</TAG_NAME>是结束标签。起始和结束标签中的 TAG_NAME 应当相同。当且仅当 TAG_NAME 和 TAG_CONTENT 都是合法的，闭合标签才是合法的。
 * 3. 合法的 TAG_NAME 仅含有大写字母，长度在范围 [1,9] 之间。否则，该 TAG_NAME 是不合法的。
 * 4. 合法的 TAG_CONTENT 可以包含其他合法的闭合标签，cdata （请参考规则7）和任意字符（注意参考规则1）除了不匹配的<、不匹配的起始和结束标签、不匹配的或带有不合法 TAG_NAME 的闭合标签。否则，TAG_CONTENT 是不合法的。
 * 5. 一个起始标签，如果没有具有相同 TAG_NAME 的结束标签与之匹配，是不合法的。反之亦然。不过，你也需要考虑标签嵌套的问题。
 * 6. 一个 <，如果你找不到一个后续的>与之匹配，是不合法的。并且当你找到一个<或</时，所有直到下一个>的前的字符，都应当被解析为 TAG_NAME（不一定合法）。
 * 7. cdata 有如下格式：<![CDATA[CDATA_CONTENT]]>。CDATA_CONTENT 的范围被定义成 <![CDATA[ 和后续的第一个 ]]>之间的字符。
 * 8. CDATA_CONTENT 可以包含任意字符。cdata 的功能是阻止验证器解析CDATA_CONTENT，所以即使其中有一些字符可以被解析为标签（无论合法还是不合法），也应该将它们视为常规字符
 * 
 * 为简明起见，你可以假设输入的代码（包括提到的任意字符）只包含数字, 字母, '<','>','/','!','[',']'和' '
 */

/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function(code) {
  let i = 0
  const tags = []

  while (i < code.length) {
    if (i === 0 && code[i] !== '<') return false
    if (i === code.length - 1 && code[i] !== '>') return false
    if (i > 0 && !tags.length) return false

    if (code[i] !== '<') {
      i += 1
      continue
    }

    if (code[i + 1] === '!') {
      if (i === 0) return false

      const exec = /<\!\[CDATA\[(.*)\]\]>/.exec(code.slice(i))

      if (!exec || exec.index !== 0) return false
      let index = i + 9
      while (index + 3 <= code.length) {
        if (code.slice(index, index + 3) === ']]>') {
          index = index + 3
          break
        }
        index += 1
      }
      i = index
    } else {
      if (code[i + 1] === '/') i += 1
      let index = i + 1
      while (index - i <= 10) {
        if (code[index] === '>') break
        if (!/[A-Z]/.test(code[index])) return false
        index += 1
      }

      if (code[index] !== '>') return false
      if (index - i < 2 || index - i > 10) return false

      const tag = code.slice(i + 1, index)
      if (code[i] === '<') {
        tags.push(tag)
      } else {
        if (tags.pop() !== tag) return false
      }
      i = index + 1
    }
  }

  return tags.length === 0
}

// Test case
// "<DIV>This is the first line <![CDATA[<div>]]></DIV>"
// "<DIV><YFSYYS><UVBNIQ><XPMXUNT><WNGMV><OJJGQREMT><Z><GEJDP><LIQS><NCVYU><RAS><UYFKCJCDN><NA><POJVYT><Z><TDC><VUIZQC><BNANGX><TOF><MR>MK</MR></TOF></BNANGX></VUIZQC></TDC></Z></POJVYT></NA></UYFKCJCDN></RAS></NCVYU></LIQS></GEJDP></Z></OJJGQREMT></WNGMV></XPMXUNT></UVBNIQ></YFSYYS></DIV>"