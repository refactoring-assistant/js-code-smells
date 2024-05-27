## Code Smell: Object-Orientation Abusers -> Temporary Field

### Problem:
Temporary fields are values that exist during runtime only for a limited scope. Outside the scope they do not have much use. Often temporary fields are created when an algorithm requires a large number of inputs. And rather than creating a large parameter list for the methods, the programmer creates fields for data in the class which are only used in the algorithm and go unused other times. This kind of code looks complex and one may expect to see data in object fields but they can be empty for most of the execution.

### About the folder:
Each code smell has a bad code and good code associated with it.
- The suffix "-bad.js" refers to the bad code example.
- The suffix "-good.js" refers to the good code example.

### How to run:

For running the bad examples, one can run the files associated with the suffix "-bad.js". For example:
```bash 
node temporary-field1-bad.js
```
Expected output:
```bash
1200
```

For running the good examples, one can run the subsequent files with the same prefix and the suffix "-good.js". For example:
```bash
node temporary-field1-good.js
```

Expected output:
```bash
1200
1210.0000000000002
```

The differences can be seen in the code design of the files in the respective files.

For more information, refer to [refactoring temporary fields][1].

[1]: <https://refactoring.guru/smells/temporary-field> "Refactoring temporary fields"