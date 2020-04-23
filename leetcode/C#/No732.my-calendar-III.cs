/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Implement a MyCalendarThree class to store your events. A new event can always be added.
 * Your class will have one method, book(int start, int end). Formally, this represents a booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.
 * A K-booking happens when K events have some non-empty intersection (ie., there is some time that is common to all K events.)
 * For each call to the method MyCalendar.book, return an integer K representing the largest integer such that there exists a K-booking in the calendar.
 * Your class will be called like this: MyCalendarThree cal = new MyCalendarThree(); MyCalendarThree.book(start, end)
 *
 * Example 1:
 * MyCalendarThree();
 * MyCalendarThree.book(10, 20); // returns 1
 * MyCalendarThree.book(50, 60); // returns 1
 * MyCalendarThree.book(10, 40); // returns 2
 * MyCalendarThree.book(5, 15); // returns 3
 * MyCalendarThree.book(5, 10); // returns 3
 * MyCalendarThree.book(25, 55); // returns 3
 * Explanation: 
 * The first two events can be booked and are disjoint, so the maximum K-booking is a 1-booking.
 * The third event [10, 40) intersects the first event, and the maximum K-booking is a 2-booking.
 * The remaining events cause the maximum K-booking to be only a 3-booking.
 * Note that the last event locally causes a 2-booking, but the answer is still 3 because
 * eg. [10, 20), [10, 40), and [5, 15) are still triple booked.
 *
 * Note:
 * The number of calls to MyCalendarThree.book per test case will be at most 400.
 * In calls to MyCalendarThree.book(start, end), start and end are integers in the range [0, 10^9].
*/

public class MyCalendarThree {
    
    private List<int[]> times;

    public MyCalendarThree() {
        times = new List<int[]>();
    }
    
    private int Search(int target) {
        int i = 0;
        int j = times.Count - 1;
        while (i <= j) {
            int mid = (i + j) / 2;
            if (times[mid][0] == target) return mid;
            if (times[mid][0] < target) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
        return i;
    }
    
    public int Book(int start, int end) {
        int i = Search(start);        
        if (i >= times.Count || times[i][0] != start) {
            times.Insert(i, new int[]{ start, 1 });
        } else {
            times[i][1] += 1;
        }
        
        int j = Search(end);
        if (j >= times.Count || times[j][0] != end) {
            times.Insert(j, new int[]{ end, -1 });
        } else {
            times[j][1] -= 1;
        }
        
        int res = 0;
        int total = 0;
        
        foreach (int[] data in times) {
            total += data[1];
            if (total > res) res = total;
        }
        return res;
    }
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * MyCalendarThree obj = new MyCalendarThree();
 * int param_1 = obj.Book(start,end);
 */