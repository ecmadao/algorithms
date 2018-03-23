/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * Example:
 * given n = 3, a solution set is:
 * [
 *    "((()))",
 *    "(()())",
 *    "(())()",
 *    "()(())",
 *    "()()()"
 * ]
 *
 * 给一个数字，生成相应对数的括号组合，并且要求组合合法
 * 例如，n = 2 时，合法的括号组合为
 * ()(), (())
 */

/*
 * 思路：
 * 如果要求组合合法，则面对没有闭合的 m 个 (，其右侧一定有 m 个 )
 * 我们可以换一种思路，将题目转换为在 n 个 ( 中插入任意个 ) 的组合
 * 比如，n = 3 时，就是在 (*(*(* 的星号位置上插入数个 )，且各个位置上 ) 的数目受到限制：
 * 1. 假设每个 * 依次为第一层，第二层。。。
 * 2. 每层 ) 的数目不能大于其层数
 * 3. 最后一层不能为空
 * 4. 当前面总共插入 x 个 ) 后，在最后一层（第 n 层）一定是插入 n - x 个 )
 */

extension String {
    static func *(lhs: String, rhs: Int) -> String {
        if rhs < 0 {
            return "-\(lhs * abs(rhs))"
        }
        return String(repeating: lhs, count: rhs)
    }
}

class Solution {
    func generateParenthesis(_ n: Int) -> [String] {
        var result = [String]()
        let leftStr = "("
        let rightStr = ")"

        func buildParenthesisFragment(prefix: String, left: Int, right: Int, usedRight: Int) {
            guard left < n else {
                result.append("\(prefix)\(leftStr)\(rightStr * right)")
                return
            }
            for i in 0...right {
                buildParenthesisFragment(
                    prefix: "\(prefix)\(leftStr)\(rightStr * i)",
                    left: left + 1,
                    right: left + 1 - i - usedRight,
                    usedRight: usedRight + i
                )
            }
        }
        buildParenthesisFragment(
            prefix: "",
            left: 1,
            right: 1,
            usedRight: 0
        )
        return result
    }
}
