namespace Ecmadao.Algorighms
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Ecmadao.Algorithms.BinaryHeap;
    using Ecmadao.Algorithms.BinaryHeap.Interfaces;

    class Program
    {
        static void Main(string[] args)
        {
            IBinaryHeap<IBinaryHeapEntity> heap = new BinaryHeap<IBinaryHeapEntity>();
            var random = new Random();
            int count = 100;

            IEnumerable<int> arr = new int[count].Select((i) => random.Next(count + 1));
            foreach (int value in arr)
            {
                heap.Push(new BinaryHeapEntity(value));
            }

            while (heap.Count > 0)
            {
                Console.WriteLine($"heap entity value: {heap.Pop().Value}");
            }
        }
    }
}