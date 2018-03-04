class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        if s.isEmpty {
            return 0
        }
        var startIndex = s.startIndex
        var endIndex = s.index(startIndex, offsetBy: 1)
        var currentMax = 1

        while endIndex <= s.endIndex {
            if endIndex == s.endIndex {
                break
            }
            let currentChar = s[endIndex]
            if startIndex < endIndex, let existIndex = s[startIndex..<endIndex].index(of: currentChar) {
                currentMax = max(currentMax, endIndex.encodedOffset - startIndex.encodedOffset)
                startIndex = s.index(existIndex, offsetBy: 1)
            }
            endIndex = s.index(endIndex, offsetBy: 1)
        }
        currentMax = max(currentMax, endIndex.encodedOffset - startIndex.encodedOffset)
        return currentMax
    }
}
