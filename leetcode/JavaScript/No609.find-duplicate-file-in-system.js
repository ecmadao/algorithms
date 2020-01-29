/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given a list of directory info including directory path, and all the files with contents in this directory, you need to find out all the groups of duplicate files in the file system in terms of their paths.
 *
 * A group of duplicate files consists of at least two files that have exactly the same content.
 *
 * A single directory info string in the input list has the following format:
 * "root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"
 *
 * It means there are n files (f1.txt, f2.txt ... fn.txt with content f1_content, f2_content ... fn_content, respectively) in directory root/d1/d2/.../dm.
 * Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.
 * The output is a list of group of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:
 * "directory_path/file_name.txt"
 *
 * Example1:
 * Input:
 * ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
 * Output:
 * [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
 *
 * Example2:
 * Input:
 * ["root/a 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
 * Output:
 * [["root/a/2.txt","root/c/d/4.txt","root/4.txt"]]
 *
 * 注：
 * 1. 最终输出不需要顺序。
 * 2. 您可以假设目录名、文件名和文件内容只有字母和数字，并且文件内容的长度在 [1，50] 的范围内。
 * 3. 给定的文件数量在 [1，20000] 个范围内。
 * 4. 您可以假设在同一目录中没有任何文件或目录共享相同的名称。
 * 5. 您可以假设每个给定的目录信息代表一个唯一的目录。目录路径和文件信息用一个空格分隔。
 *
 * 超越竞赛的后续行动：
 * 1. 假设您有一个真正的文件系统，您将如何搜索文件？广度搜索还是宽度搜索？
 * 2. 如果文件内容非常大（GB级别），您将如何修改您的解决方案？
 * 3. 如果每次只能读取 1 kb 的文件，您将如何修改解决方案？
 * 4. 修改后的解决方案的时间复杂度是多少？其中最耗时的部分和消耗内存的部分是什么？如何优化？
 * 5. 如何确保您发现的重复文件不是误报？
 */

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
  const result = paths.reduce((dict, path) => {
    const [folder, ...filenames] = path.split(' ')
    return filenames.reduce((d, filename) => {
      const tmp = filename.split('.txt(')
      const content = tmp.slice(-1)[0].slice(0, -1)
      if (!d[content]) d[content] = []
      d[content].push(`${folder}/${tmp[0]}.txt`)
      return d
    }, dict)
  }, {})

  return Object.values(result).filter(files => files.length > 1)
}
