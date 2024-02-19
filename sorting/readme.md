# Sorting

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
    - Check 2nd element and if let then first element move that to first position
    - Check 3rd element and if less then first and second element move that item to first element
    - Then move to 4th element and if item is bigger then 2nd but less then 3rd element move 4th element to between 2nd and 3rd
    - Move until all time are covered
- Time complexity  - Best: O(n)   Worst: O(n ^ 2)
- Space complexity - O(1)
## Merge sort
- Provides better efficiency then other three
- Uses divide and conquer techniques
- Start from dividing the list half
    - divide the list again until everything divided till 1
    - compare and conquer again
    - Until compare full list
- Complicated than other search
- Time complexity  - Best: O(n log(n))   Worst: O(n log(n))
- Space complexity - O(n)
## Quick sort 
- Uses divide and conquer techniques
- Time complexity  - Best: O(n log(n))   Worst: O(n ^ 2)
- Space complexity - O(log(n))
- Pick any pivot value
 - move all higher value to its right and lesser to its left
 - Then divide the list from its pivot value
 - Do the same for both let and right list 
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