class Solution {
    func findWords(_ words: [String]) -> [String] {
        let keyboardSets: [Set<Character>] = [
            ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
            ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
            ["Z", "X", "C", "V", "B", "N", "M"]
        ]
        var result = [String]()

        for word in words {
            let wordSet = Set(word.uppercased())
            for keyboardSet in keyboardSets {
                if wordSet.isSubset(of: keyboardSet) {
                    result.append(word)
                    break
                }
            }
        }
        return result
    }
}
