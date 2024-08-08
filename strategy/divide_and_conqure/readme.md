- If your problem is large divide them into smaller/sub problem.
- Solve those sub problems
- Combine the solutions of sub/smaller problems to get the solution of main problem.

- Main thing about divide and conqure is if sub problem has to be same as main problem. For eg: main problem is to sort then all sub problem also sort only.
- Recurisive in nature
- Should have method to combine them


Algo:
```
DAC(p) { // divide and conqure for a problem p
    if(small(p)) { // If small problem solve it directly
        s(p)
    }
    else {
        divide p into p1,p2,p3.....pk
        Apply DAC(p1), DAC(p2), DAC(p3), ..... DAC(pk)
        Combine(DAC(p1), DAC(p2), DAC(p3), ..... DAC(pk))
    }
}
```

# Below are Some problems uses divide and conqure:

1. Binary search
2. Finding maximum and minimum
3. Merge sort
4. Quick sort
5. Strassen's matrix multiplication