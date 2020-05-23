/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * 栈排序。 编写程序，对栈进行排序使最小元素位于栈顶。
 * 最多只能使用一个其他的临时栈存放数据，但不得将元素复制到别的数据结构（如数组）中。
 * 该栈支持如下操作：push、pop、peek 和 isEmpty。当栈为空时，peek 返回 -1。
 *
 * 示例1:
 * 输入：
 * ["SortedStack", "push", "push", "peek", "pop", "peek"]
 * [[], [1], [2], [], [], []]
 * 输出：
 * [null,null,null,1,null,2]
 *
 * 示例2:
 * 输入： 
 * ["SortedStack", "pop", "pop", "push", "pop", "isEmpty"]
 * [[], [], [], [1], [], []]
 * 输出：
 * [null,null,null,null,null,true]
 *
 * 说明:
 * 栈中的元素数目在[0, 5000]范围内。
 */

public class SortedStack {
    Stack<int> tmp;
    Stack<int> stack;

    public SortedStack() {
        tmp = new Stack<int>();
        stack = new Stack<int>();
    }
    
    public void Push(int val) {
        while (stack.Count > 0 && stack.Peek() < val) tmp.Push(stack.Pop());
        stack.Push(val);
        while (tmp.Count > 0) stack.Push(tmp.Pop());
    }
    
    public void Pop() {
        if (stack.Count == 0) return;
        stack.Pop();
    }
    
    public int Peek() {
        if (stack.Count == 0) return -1;
        return stack.Peek();
    }
    
    public bool IsEmpty() {
        return stack.Count == 0;
    }
}

/**
 * Your SortedStack object will be instantiated and called as such:
 * SortedStack obj = new SortedStack();
 * obj.Push(val);
 * obj.Pop();
 * int param_3 = obj.Peek();
 * bool param_4 = obj.IsEmpty();
 */
 