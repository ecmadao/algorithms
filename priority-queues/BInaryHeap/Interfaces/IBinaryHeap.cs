namespace Ecmadao.Algorighms.BinaryHeap.Interfaces
{
    public interface IBinaryHeap<T>
    {
        public int Count { get; }
        
        public void Push(T item);

        public T Pop();

        public T Top();

        public void Exchange(T item, int pos);
    }
}
