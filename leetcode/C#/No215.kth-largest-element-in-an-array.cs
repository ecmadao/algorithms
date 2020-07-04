/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Find the kth largest element in an unsorted array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 *
 * Example 1:
 * Input: [3,2,1,5,6,4] and k = 2
 * Output: 5
 *
 * Example 2:
 * Input: [3,2,3,1,2,4,5,5,6] and k = 4
 * Output: 4
 *
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

public interface IBinaryHeapEntity
{
    public int Value { get; }
}

public interface IBinaryHeap<T>
{
    public int Count { get; }

    public void Push(T item);

    public T Pop();

    public T Top();

    public void Exchange(T item, int pos);
}

public class BinaryHeapEntity : IBinaryHeapEntity
{
    private int Val;

    public BinaryHeapEntity(int value)
    {
        this.Val = value;
    }

    public int Value
    {
        get
        {
            return this.Val;
        }
    }
}

// 最小堆
class BinaryHeap<T> : IBinaryHeap<T>
        where T : IBinaryHeapEntity
{
    private readonly List<T> heap;

    public BinaryHeap()
    {
        this.heap = new List<T>();
    }

    public int Count
    {
        get
        {
            return this.heap.Count;
        }
    }

    public void Push(T entity)
    {
        this.heap.Add(entity);
        this.SortWithFather(this.Count);
    }

    public T Top()
    {
        if (this.Count == 0)
        {
            return default;
        }

        return this.heap[0];
    }

    public T Pop()
    {
        if (this.Count == 0)
        {
            return default;
        }

        T lastEntity = this.heap[this.Count - 1];
        this.heap[this.Count - 1] = this.heap[0];
        this.heap[0] = lastEntity;

        T res = this.heap[this.Count - 1];
        this.heap.RemoveAt(this.Count - 1);
        if (this.Count > 0)
        {
            this.SortWithChildren(1);
        }

        return res;
    }

    public void Exchange(T entity, int pos)
    {
        this.heap[pos] = entity;
        this.SortWithChildren(pos + 1);
    }

    private int GetValue(int index)
    {
        return this.heap[index].Value;
    }

    private void SortWithFather(int cPos)
    {
        int fPos = cPos / 2;
        T target = this.heap[cPos - 1];

        while (cPos > 1 && target.Value < this.GetValue(fPos - 1))
        {
            this.heap[cPos - 1] = this.heap[fPos - 1];
            cPos = fPos;
            fPos = cPos / 2;
        }

        this.heap[cPos - 1] = target;
    }

    private void SortWithChildren(int fPos)
    {
        int cPos = fPos * 2;
        T target = this.heap[fPos - 1];

        while (cPos - 1 < this.Count)
        {
            if (cPos < this.Count && this.GetValue(cPos - 1) > this.GetValue(cPos))
            {
                cPos += 1;
            }

            if (this.GetValue(cPos - 1) >= target.Value)
            {
                break;
            }

            this.heap[fPos - 1] = this.heap[cPos - 1];
            fPos = cPos;
            cPos = fPos * 2;
        }

        this.heap[fPos - 1] = target;
    }
}

public class Solution {
    public int FindKthLargest(int[] nums, int k) {
        IBinaryHeap<IBinaryHeapEntity> heap = new BinaryHeap<IBinaryHeapEntity>();

        for (int i = 0; i < k; i += 1) {
            heap.Push(new BinaryHeapEntity(nums[i]));
        }

        for (int i = k; i < nums.Length; i += 1) {
            if (nums[i] > heap.Top().Value) {
                heap.Exchange(new BinaryHeapEntity(nums[i]), 0);
            }
        }
        return heap.Top().Value;
    }
}