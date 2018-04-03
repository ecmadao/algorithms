/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * string convert(string text, int nRows)
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 */

/*
 * 找规律
 * "PAYPALISHIRING", 4
 * P   I   N // 3
 * A L S I G // 5
 * Y A H R // 4
 * P   I // 2

 * "PAYPALISHIRING", 2
 * P Y A I H R N
 * A P L S I I G
 */

class Solution {
    func char(s: String, row: Int, column: Int, numRows: Int) -> Character? {
        let baseBefore = numRows + max(numRows - 2, 0)
        var offset = baseBefore * (column / 2) + row
        if column % 2 != 0 {
            // 奇数列
            offset = Int(ceil(Double(column) / 2)) * baseBefore - row
        }
        if offset < s.count && offset >= 0 {
            let index = s.index(s.startIndex, offsetBy: offset)
            return s[index]
        }
        return nil
    }

    func convert(_ s: String, _ numRows: Int) -> String {
        if numRows == 1 {
            return s
        }
        var result = [Character]()
        let maxColumn = Int(ceil(Double(s.count * 2) / Double(numRows + max(numRows - 2, 0))))
        for row in 0..<numRows {
            var column = 0
            let columnOffset = row == 0 || row == numRows - 1 ? 2 : 1
            while column < maxColumn {
                let char = self.char(s: s, row: row, column: column, numRows: numRows)
                if char == nil {
                    break
                }
                result += [char!]
                column += columnOffset
            }
        }
        return String(result)
    }
}