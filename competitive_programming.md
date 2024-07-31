# Competitive programming combines with two topic:
    1. Design of algorithms
    2. Implementation of algorithms

# Mathematics

1. Sum formulas: (Check imp. mathematics formula to calculate complextiy)
```
x = 1 + 2 + 3 + .... + n = n(n + 1) / 2   || x = 1 ^ 2 + 2 ^ 2  + 3 ^ 2 + .... + n ^ 2 = n(n + 1)(2n + 1) / 6
```
2. Arithmetic progression: (is a sequence of numbers where the difference between any two consecutive numbers is constant.)
```
3,7,11,15

n(a + b) / 2
```
3. Geometric progression: (is a sequence of numbers where the ratio between any two consecutive numbers is constant)
```
3,6,12,24

a+ak+ak2+···+b = bk - a / k - 1
```

# Set Theory:

1. <b>intersection</b> A∩B consists of elements that are in both A and B.
2. <b>union</b> A∪B consists of elements that are in A or B or both.
3. <b>complement</b> A consists of elements that are not in A. The interpretation of a complement depends on the universal set, which contains all possible elements.
For example, if A ={1,2,5,7} and the universal set is {1,2,...,10}, then ¯ A ={3,4,6,8,9,10}.
4. <b>difference</b> A\B= A∩ ¯ B consists of elements that are in A but not in B.
5. <b>Subset</b> if each element of A belongs to S. A⊂S

# Time Complexity:

- The time complexity of an algorithm is denoted O(···) where the three dots represent some function.

1. Loops: 
- A common reason why an algorithm is slow is that it contains many loops that go through the input. The more nested loops the algorithm contains, the slower it is.
- If there are k nested loops, the time complexity is O(nk).

```
for(let i = 0; i < n; i++) {

}     // O(n)

for(let i = 0; i < n; i++) {
    for(let i = 0; i < n; i++) {

    }
}     // O(n2)
```

2. Order of magnitude
- A time complexity does not tell us the exact number of times the code inside a loop is executed, but it only shows the order of magnitude.

```
# the code inside the loop is executed 3n, n+5 and n/2 times, but the time complexity of each code is O(n).
for (int i = 1; i <= 3*n; i++) { // code }
for (int i = 1; i <= n+5; i++) { // code }
for (int i = 1; i <= n; i += 2) { // code }
```

3. Phases
- If the algorithm consists of consecutive phases, the total time complexity is the largest time complexity of a single phase.

```
# For example, the following code consists of three phases with time complexities O(n), O(n2) and O(n). Thus, the total time complexity is O(n2).
for (int i = 1; i <= n; i++) { // code } 
for (int i = 1; i <= n; i++) { 
    for (int j = 1; j <= n; j++) { 
        // code 
    } 
} 
for (int i = 1; i <= n; i++) { // code }
```

4. Several variables
Sometimes the time complexity depends on several factors. In this case, the time complexity formula contains several variables.
```
# the time complexity of the following code is O(nm)
for (int i = 1; i <= n; i++) { 
    for (int j = 1; j <= m; j++) { 
        // code 
    } 
}
```

5. Recursion
The time complexity of a recursive function depends on the number of times the function is called and the time complexity of a single call.
```
# The call f(n) causes n function calls, and the time complexity of each call is O(1). Thus, the total time complexity is O(n).
void f(int n) { 
    if (n == 1) return; 
    f(n-1); 
}
```
```
void g(int n) { 
    if (n == 1) return; 
    g(n-1); 
    g(n-1); 
}
The following table shows the function calls produced by this single call: 
function call   number of calls 
g(n)            1 
g(n−1)          2
g(n−2)          4    
···             ...
g(1)            2^n-1

Based on this, the time complexity is 1+2+4+···+2n−1=2n−1=O(2n).
```

# Complexity classes
The following list contains common time complexities of algorithms: 

O(1) The running time of a constant-time algorithm does not depend on the input size. A typical constant-time algorithm is a direct formula that calculates the answer. 

O(logn) A logarithmic algorithm often halves the input size at each step. The running time of such an algorithm is logarithmic, because log2n equals the number of times n must be divided by 2 to get 1. 

O( n) A square root algorithm is slower than O(logn) but faster than O(n). Aspecial property of square roots is that n=n/ lies, in some sense, in the middle of the input.

O(n) A linear algorithm goes through the input a constant of times. This is often the best possible time complexity, because it is usually necessary to access each input element at least once before reporting the answer.

O(n log n) This time complexity often indicates that the algorithm sorts the input, because the time complexity of efficient sorting algorithms is O(nlogn). Another possibility is that the algorithm uses a data structure where each operation takes O(logn) time. 

O(n^2) A quadratic algorithm often contains two nested loops. It is possible to go through all pairs of the input elements in O(n2) time. 

O(n^3) A cubic algorithm often contains three nested loops. It is possible to go through all triplets of the input elements in O(n3) time. 

O(2^n) This time complexity often indicates that the algorithm iterates through all subsets of the input elements. For example, the subsets of {1,2,3} are , {1}, {2}, {3}, {1,2}, {1,3}, {2,3} and {1,2,3}. 

O(n!) This time complexity often indicates that the algorithm iterates through all permutations of the input elements. For example, the permutations of {1,2,3} are (1,2,3), (1,3,2), (2,1,3), (2,3,1), (3,1,2) and (3,2,1).

* An algorithm is polynomial if its time complexity is at most O(nk) where k is a constant. All the above time complexities except O(2n) and O(n!) are polynomial.

# Approaching a problem to solve efficient: <Check Maximum subarray sum problem>
