/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a list of folders, remove all sub-folders in those folders and return in any order the folders after removing.
 * If a folder[i] is located within another folder[j], it is called a sub-folder of it.
 * The format of a path is one or more concatenated strings of the form: / followed by one or more lowercase English letters.
 * For example, /leetcode and /leetcode/problems are valid paths while an empty string and / are not.
 *
 * Example 1:
 * Input: folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
 * Output: ["/a","/c/d","/c/f"]
 * Explanation: Folders "/a/b/" is a subfolder of "/a" and "/c/d/e" is inside of folder "/c/d" in our filesystem.
 *
 * Example 2:
 * Input: folder = ["/a","/a/b/c","/a/b/d"]
 * Output: ["/a"]
 * Explanation: Folders "/a/b/c" and "/a/b/d/" will be removed because they are subfolders of "/a".
 *
 * Example 3:
 * Input: folder = ["/a/b/c","/a/b/ca","/a/b/d"]
 * Output: ["/a/b/c","/a/b/ca","/a/b/d"]
 *
 * Constraints:
 * 1. 1 <= folder.length <= 4 * 10^4
 * 2. 2 <= folder[i].length <= 100
 * 3. folder[i] contains only lowercase letters and '/'
 * 4. folder[i] always starts with character '/'
 * 5. Each folder name is unique.
 *
 * 你是一位系统管理员，手里有一份文件夹列表 folder，你的任务是要删除该列表中的所有 子文件夹，并以 任意顺序 返回剩下的文件夹。
 * 我们这样定义「子文件夹」：
 * - 如果文件夹 folder[i] 位于另一个文件夹 folder[j] 下，那么 folder[i] 就是 folder[j] 的子文件夹。
 * 文件夹的「路径」是由一个或多个按以下格式串联形成的字符串：
 * - / 后跟一个或者多个小写英文字母。
 * 例如，/leetcode 和 /leetcode/problems 都是有效的路径，而空字符串和 / 不是。
 */

/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  folder.sort()
  const queue = []

  for (const fold of folder) {
    if (!queue.length || !new RegExp(`^${queue[queue.length - 1]}/`).test(fold)) {
      queue.push(fold)
    }
  }
  return queue
}
