/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * You have n binary tree nodes numbered from 0 to n - 1 where node i has two children leftChild[i] and rightChild[i], return true if and only if all the given nodes form exactly one valid binary tree.
 * If node i has no left child then leftChild[i] will equal -1, similarly for the right child.
 * Note that the nodes have no values and that we only use the node numbers in this problem.
 *
 * Example 1:
 * Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]
 * Output: true
 *
 * Example 2:
 * Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,3,-1,-1]
 * Output: false
 *
 * Example 3:
 * Input: n = 2, leftChild = [1,0], rightChild = [-1,-1]
 * Output: false
 *
 * Example 4:
 * Input: n = 6, leftChild = [1,-1,-1,4,-1,-1], rightChild = [2,-1,-1,5,-1,-1]
 * Output: false
 *
 * Constraints:
 * 1 <= n <= 10^4
 * leftChild.length == rightChild.length == n
 * -1 <= leftChild[i], rightChild[i] <= n - 1
*/

public class Solution {
    public bool ValidateBinaryTreeNodes(int n, int[] leftChild, int[] rightChild) {
        int[] father = Enumerable.Range(0, n).ToArray();

        for (int i = 0; i < leftChild.Length; i += 1) {
            int left = leftChild[i];
            if (left == -1) continue;
            
            if (father[left] != left) return false;
            int f = findFather(i);
            if (f == left) return false;
            father[left] = f;
        }

        for (int i = 0; i < rightChild.Length; i += 1) {
            int right = rightChild[i];
            if (right == -1) continue;
            
            
            if (father[right] != right) return false;
            int f = findFather(i);
            if (f == right) return false;
            father[right] = f;
        }
        
        int findFather(int i) {
            while (father[i] != i) i = father[i];
            return i;
        }
        
        int head = 0;
        for (int i = 0; i < father.Length; i += 1) {
            if (father[i] == i) head += 1;
            if (head > 1) return false;
        }
        return head == 1;
    }
}