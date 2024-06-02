## Code Smell: Couplers -> Inappropriate Intimacy

### Problem:
This code smell occurs when one class depends a lot on the internal fields and methods of another class. This mainly occurs if one class accesses the instance variables of another object directly, which is a bad practice. Only the public features should be accessed over and not the private features to prevent breaking encapsulation. It is quite similar to feature envy, with the difference being this code smell is focused on preventing access of private features.

### About the folder:
Each code smell has a bad code and good code associated with it.
- The suffix "-bad.js" refers to the bad code example.
- The suffix "-good.js" refers to the good code example.

### How to run:

For running the bad examples, one can run the files associated with the suffix "-bad.js". For example:
```bash 
node inappropriate-intimacy1-bad.js
```
Expected output:
```bash
Name: John Doe
Street: 123 Main St
City: Boston
State: MA
```

For running the good examples, one can run the subsequent files with the same prefix and the suffix "-good.js". For example:
```bash
node inappropriate-intimacy1-good.js
```

Expected output:
```bash
Name: John Doe
Street: 123 Main St
City: Boston
State: MA
```

The differences can be seen in the code design of the files in the respective files.

For more information, refer to [refactoring inappropriate intimacy][1].

[1]: <https://refactoring.guru/smells/inappropriate-intimacy> "Refactoring inappropriate intimacy"