/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given n processes, each process has a unique PID (process id) and its PPID (parent process id).
 * Each process only has one parent process, but may have one or more children processes.
 * This is just like a tree structure. Only one process has PPID that is 0, which means this process has no parent process.
 * All the PIDs will be distinct positive integers.
 *
 * We use two list of integers to represent a list of processes,
 * where the first list contains PID for each process and the second list contains the corresponding PPID.
 *
 * Now given the two lists, and a PID representing a process you want to kill,
 * return a list of PIDs of processes that will be killed in the end.
 * You should assume that when a process is killed, all its children processes will be killed.
 * No order is required for the final answer.
 *
 * Example:
 * Input:
 * pid =  [1, 3, 10, 5]
 * ppid = [3, 0, 5, 3]
 * kill = 5
 * Output: [5,10]
 * Explanation:
           3
         /   \
        1     5
             /
            10
 * Kill 5 will also kill 10.
 *
 * 给 n 个进程，每个进程都有一个独一无二的 PID （进程编号）和它的 PPID （父进程编号）。
 * 每一个进程只有一个父进程，但是每个进程可能会有一个或者多个孩子进程
 * 它们形成的关系就像一个树状结构。只有一个进程的 PPID 是 0 ，意味着这个进程没有父进程。
 * 所有的 PID 都会是唯一的正整数。
 *
 * 我们用两个序列来表示这些进程，第一个序列包含所有进程的 PID ，第二个序列包含所有进程对应的 PPID。
 * 现在给定这两个序列和一个 PID 表示你要杀死的进程，函数返回一个 PID 序列，
 * 表示因为杀这个进程而导致的所有被杀掉的进程的编号。
 * 当一个进程被杀掉的时候，它所有的孩子进程和后代进程都要被杀掉。
 * 你可以以任意顺序排列返回的 PID 序列
 */

/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
  const result = [kill]

  const cache = ppid.reduce((dict, id, index) => {
    if (!dict[id]) dict[id] = new Set()
    dict[id].add(pid[index])
    return dict
  }, {})
  if (!cache[kill]) return result

  const queue = [...cache[kill]]
  while (queue.length) {
    const id = queue.pop()
    result.push(id)
    if (cache[id]) queue.push(...cache[id])
  }
  return result
}
