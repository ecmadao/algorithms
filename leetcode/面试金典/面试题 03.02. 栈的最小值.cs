/**
 * Difficulty:
 * Easy
 *
 * Desc:
 * 请设计一个栈，除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。执行push、pop和min操作的时间复杂度必须为O(1)。
 *
 * 示例：
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 */

public class MinStack {
    Stack<int[]> stack = new Stack<int[]>();
    int min = int.MaxValue;

    /** initialize your data structure here. */
    public MinStack() {
        stack = new Stack<int[]>();
        min = int.MaxValue;
    }
    
    public void Push(int x) {
        min = Math.Min(x, min);
        stack.Push(new int[]{ x, min });
    }
    
    public void Pop() {
        stack.Pop();
        if (stack.Count == 0) {
            min = int.MaxValue;
        } else {
            min = GetMin();
        }
    }
    
    public int Top() {
        return stack.Peek()[0];
    }
    
    public int GetMin() {
        return stack.Peek()[1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.Push(x);
 * obj.Pop();
 * int param_3 = obj.Top();
 * int param_4 = obj.GetMin();
 */