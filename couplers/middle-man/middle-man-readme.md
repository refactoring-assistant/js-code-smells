## Code Smell: Couplers -> Middle Man

### Problem:
This code smell originates from extreme elimination of message chains. It occurs when a class is just there to perform one function, that is to delegate to another class. It has no other reason to exist.

### About the folder:
Each code smell has a bad code and good code associated with it.
- The suffix "-bad.js" refers to the bad code example.
- The suffix "-good.js" refers to the good code example.

### How to run:

For running the bad examples, one can run the files associated with the suffix "-bad.js". For example:
```bash 
node middle-man1-bad.js
```
Expected output:
```bash
Name: John Doe
Bill Amount: 100
Bill Item Count: 5
```

For running the good examples, one can run the subsequent files with the same prefix and the suffix "-good.js". For example:
```bash
node middle-man1-good.js
```

Expected output:
```bash
Name: John Doe
Bill Amount: 100
Bill Item Count: 5
```

The differences can be seen in the code design of the files in the respective files.

For more information, refer to [refactoring middle man][1].

[1]: <https://refactoring.guru/smells/middle-man> "Refactoring middle man"