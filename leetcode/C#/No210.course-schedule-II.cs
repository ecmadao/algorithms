/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * There are a total of n courses you have to take, labeled from 0 to n-1.
 * Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
 * Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.
 * There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.
 *
 * Example 1:
 * Input: 2, [[1,0]] 
 * Output: [0,1]
 * Explanation:
 * There are a total of 2 courses to take.
 * To take course 1 you should have finished course 0. So the correct course order is [0,1] .
 *
 * Example 2:
 * Input: 4, [[1,0],[2,0],[3,1],[3,2]]
 * Output: [0,1,2,3] or [0,2,1,3]
 * Explanation:
 * There are a total of 4 courses to take.
 * To take course 3 you should have finished both courses 1 and 2.
 * Both courses 1 and 2 should be taken after you finished course 0. 
 * So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3] .
 *
 * Note:
 * The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
 * You may assume that there are no duplicate edges in the input prerequisites.
*/

public class Solution {
    public int[] FindOrder(int numCourses, int[][] prerequisites) {
        HashSet<int> courses = new HashSet<int>(
            Enumerable.Range(0, numCourses)
        );
        Dictionary<int, List<int>> dict = new Dictionary<int, List<int>>();
        HashSet<int> visited = new HashSet<int>();

        foreach (int[] prerequire in prerequisites) {
            if (!dict.ContainsKey(prerequire[1])) dict[prerequire[1]] = new List<int>();
            dict[prerequire[1]].Add(prerequire[0]);
            courses.Remove(prerequire[0]);
            courses.Remove(prerequire[1]);
        }
        Stack<int> path = new Stack<int>(courses);

        bool dfs (int course, HashSet<int> marked) {
            if (visited.Contains(course)) return true;
            visited.Add(course);
            marked.Add(course);

            if (dict.ContainsKey(course)) {
                foreach (int next in dict[course]) {
                    if (marked.Contains(next)) return false;
                    bool res = dfs(next, marked);
                    if (!res) return false;
                }
            }
            
            path.Push(course);
            marked.Remove(course);
            return true;
        }

        foreach (int course in dict.Keys) {
            if (visited.Contains(course)) continue;
            bool res = dfs(course, new HashSet<int>());
            if (!res) return new int[0];
        }

        return path.ToArray();
    }
}