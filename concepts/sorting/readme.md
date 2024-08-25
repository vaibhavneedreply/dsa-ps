# Sorting

- Sorting is a fundamental algorithm design problem. Many efficient algorithms use sorting as a subroutine, because it is often easier to process data if the elements are in a sorted order.
- For example, the problem ”does an array contain two equal elements?” is easy to solve using sorting. If the array contains two equal elements, they will be next to each other after sorting, so it is easy to find them. Also, the problem ”what is the most frequent element in an array?” can be solved similarly.
- There are many algorithms for sorting, and they are also good examples of how to apply different algorithm design techniques. The efficient general sorting algorithms work in O(n log n) time, and many algorithms that use sorting as a subroutine also have this time complexity.

# Inversions
- A useful concept when analyzing sorting algorithms is an inversion: a pair of array elements (array[a],array[b]) such that a < b and array[a]>array[b], i.e., the elements are in the wrong order.
- For eg: 1 2 2 6 3 5 9 8 has three inversions {6,3} {6,5} {9,8}
- The number of inversions indicates how much work is needed to sort the array.
- An array is completely sorted when there are no inversions. On the other hand, if the array elements are in the reverse order, the number of inversions is the largest possible:

- sort() function
    - Good for small numbers
    - Sorting of alphabetic works fine but for number it necessary not as this coverts the number first in string and then get charCode 
        eg: 34 -> 50
             7 -> 55 so our sorting won't be as expected
    - Doesn't work with unicode
    - Sort doesn't not guaranty of space and time complexity
    - In mozilla sort function implemented using merge sort
    - In v8 sort function implement using quick sort


# Elementary/Comparison sorts  
## Bubble sort
 - Bubble up the highest one
 - Start from the first position and compare with the second element
    - If first element is greater then second element swap
    - If not move next
    - Do it until all element has not been compared
- Least efficient 
- Time complexity  - Best: O(n)   Worst: O(n ^ 2)
- Space complexity - O(1)

## Selection sort
- Consider first element as min and find next min
- Search for the smallest one
- Swap the smallest item with the respective/current index
- Until all list has not been compared
- Time complexity  - Best: O(n ^ 2)   Worst: O(n ^ 2)
- Space complexity - O(1)
- Least efficient 

## Insertion sort
- Least efficient but in some case works very fast
- Good when we know list is almost sorted
- Start form the first position 
    - let that be on the same place   
    - Check 2nd element and if less then first element move that to first position
    - Check 3rd element and if less then first and second element move that item to first element
    - Then move to 4th element and if item is bigger then 2nd but less then 3rd element move 4th element to between 2nd and 3rd
    - Move until all time are covered
- Time complexity  - Best: O(n)   Worst: O(n ^ 2)
- Space complexity - O(1)

## Merge sort
# Merging:
- before understanding merge sort we need to understand merging. Process of combining two sorted list into single sorted list.
- list can be array or linkedlist
eg:
A       B       C (New list)
2       5       2 < 5 => 2
8       9       8 > 5 => 5
15      12      8 < 9 => 8
18      17      9 < 15 => 9
                15 > 12 => 12
                15 < 17 => 15
                17 < 18 => 17
Remaining add to the C so ans 2,5,8,9,12,15,17,18
- Time taken => n log n
# Iterative algo:
merge(a,b,m,n){
    i = 1;
    j = 1;
    k = 1;
    if(a[i] < b[j]) {
        c[k++] = a[i++]
    } else {
        c[k++] = b[j++]
    }
    for(; i <= m; i++) { // start from where ever is i this is to add reamining a elemenet if any
        c[k++] = a[i]
    } 
    for(; j <= n; j++) { // start from where ever is j this is to add reamining b elemenet if any
        c[k++] = b[j]
    } 
}

- what if there are more then two list how to merge for eg:
eg:
A       B       C       D
2       5       2       1
8       9       8       5
15      12      8       6
18      17      9       10

ans: first sort A => B > n than C => D > m than sort n => m => E sorted list
note: we can also choose to go with A => C than B => D and than result or A => B => result => C => result => D
hance there any many ways we can choose any of them

- this is called 4 way merging // m way merging 
- there are two way of merge sort 1. 2-way mergesort (Iterative process using loop) 2. normal mergesort (Recursive method)

eg:
    9   3   7   5   6   4   8   2
    \   /   \   /   \   /   \   /
    3   9   5   7   4   6   2   8
    \           /   \           /
    3   5   7   9   2   4   6   8
    \                           /
    2   3   4   5   6   7   8   9

-> in unsorted single list wanted to do merge sort consider each element as a list 
-> start comparing with each list

# Recursive algo:
RecursiveMerge(l, h) {
    while(l < h) {
        mid = floor(l + h / 2)
        RecursiveMerge(l, mid)
        RecursiveMerge(mid + 1, h)
        merge(l, mid, h)
    }
}

- Provides better efficiency then other three
- Uses divide and conquer techniques
- Start from dividing the list half
    - divide the list again until everything divided till 1
    - compare and conquer again
    - Until compare full list
- Complicated than other search
- Time complexity  - Best: O(n log(n))   Worst: O(n log(n))
- Space complexity - O(n)

Pros:
- Good for large size list (no other sort method can support large size data)
- Linked List (Can merge two linked list without creating new list)
- Stable (if elements are duplicate sorting will maintain the order)
- Recursive => it its recursive its uses stack to store data => Tracing tree of given number will be O(log n) => O(n)

Cons:
- Extra space (not inplace sort)
- No small problem (small problem is only having single element and we dont do anything). For merge sort it has observed that for small size list merge sort takes more time than insertion sort or bubble sort. But we should use insertion sort as it support linkedlist as well its stable in nature.



## Quick sort 
- Uses divide and conquer techniques
- Time complexity  - Best: O(n log(n))   Worst: O(n ^ 2)
- Space complexity - O(log(n))
- Pick any pivot value
 - move all higher value to its right and lesser to its left
 - Then divide the list from its pivot value
 - Do the same for both left and right list 
 - then combine full list
- Picking pivot point is really important it can make time complexity to O(n ^ 2)


# Which sort is best: (When to use what)
- When input is very small or item is mostly sorted use insertion sort.
- Selection and bubble sort we should not use as they are not efficient and mostly uses for education purposes
- Merge sort is good as best avg and worst is always O(n log n). Use when time matters but not the space as space complexity is high 
- Reverse of it if space matters we should go with quick sort.

# Non comparison Sort
- Can beat O(n log n)

## Counting sort
The lower bound n log n does not apply to algorithms that do not compare array elements but use some other information. counting sort that sorts an array in O(n) time assuming that every element in the array is an integer between 0...c and c=O(n).
The algorithm creates a bookkeeping array, whose indices are elements of the original array. The algorithm iterates through the original array and calculates how many times each element appears in the array.

for eg given arr: 1 3 6 9 9 3 5 9
the bookkeeping array: (count of numbers min = 1 and max = 9)
max = 9
1 2 3 4 5 6 7 8 9
1 0 2 0 1 1 0 0 3

- Construction of the bookkeeping array takes O(n) time. After this, the sorted array can be created in O(n) time because the number of occurrences of each element can be retrieved from the bookkeeping array. Thus, the total time complexity of counting sort is O(n). 
- Counting sort is a very efficient algorithm but it can only be used when the constant c is small enough, so that the array elements can be used as indices in the bookkeeping array.


## Radix sort

- Pretty complex
- Does based on binaries
- Only works with numbers


## Sorting interview questions:

- Sort 10 schools around your house by distance: insertion sort // Could use bubble or selection sort as well
- eBay sorts listing by the current big amount: Redix or counting sort (As bid will be in amount and will be under $1 to $100)
- Sport scores of ESPN: Quick sort or Merge Sort
- Massive Database (can't fit all into memory) need to sort through past year's user data: Merge sort
- Almost sorted Udemy review data needs to update and add 2 new reviews: Insertion sort
- Temperature records for the past 10yr in china: Redix and counting sort, Quick if not decimal
- Large user name database needs to be sorted. Data is very random: Merge/Quick sort
- You want to teach sorting for the first time: Bubble or selection sort