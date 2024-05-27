## Code Smell: Object-Orientation Abusers -> Alternative Classes with Different Interfaces

### Problem:
Two different classes may perform identical functions but have different method names. This usually happens if the programmer did not know of the functionality of the equivalent class that already existed.

### About the folder:
Each code smell has a bad code and good code associated with it.
- The suffix "-bad.js" refers to the bad code example.
- The suffix "-good.js" refers to the good code example.

### How to run:

For running the bad examples, one can run the files associated with the suffix "-bad.js". For example:
```bash 
node alternative-classes-with-different-interfaces1-bad.js
```
Expected output:
```bash
1 + 2
+
3
2 - 1
-
3
2 * 3
*
6
6 / 2
/
3
```

For running the good examples, one can run the subsequent files with the same prefix and the suffix "-good.js". For example:
```bash
node alternative-classes-with-different-interfaces1-good.js
```

Expected output:
```bash
1 + 2
+
3
2 - 1
-
3
2 * 3
*
6
6 / 2
/
3
```

The differences can be seen in the code design of the files in the respective files.

For more information, refer to [refactoring alternative classes with different interfaces][1].

[1]: <https://refactoring.guru/smells/alternative-classes-with-different-interfaces> "Refactoring alternative classes with different interfaces"