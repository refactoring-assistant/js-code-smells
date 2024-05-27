## Code Smell: Object-Orientation Abusers -> Switch Statements

### Problem:
Switch and case operators must be used sparingly in object-oriented coding styles. Often if we use switch-case, it can be scattered across multiple places in the program and when a new conditon is added, we will have to manually find the switch code and add the case to it.

### About the folder:
Each code smell has a bad code and good code associated with it.
- The suffix "-bad.js" refers to the bad code example.
- The suffix "-good.js" refers to the good code example.

### How to run:

For running the bad examples, one can run the files associated with the suffix "-bad.js". For example:
```bash 
node switch-statement1-bad.js
```
Expected output:
```bash
100
0
```

For running the good examples, one can run the subsequent files with the same prefix and the suffix "-good.js". For example:
```bash
node switch-statement1-good.js
```

Expected output:
```bash
100
0
```

The differences can be seen in the code design of the files in the respective files.

For more information, refer to [refactoring switch statements][1].

[1]: <https://refactoring.guru/smells/switch-statements> "Refactoring switch statements"