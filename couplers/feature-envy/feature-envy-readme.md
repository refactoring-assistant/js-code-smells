## Code Smell: Couplers -> Feature Envy

### Problem:
The feature envy code smell occurs when one class accesses data of another object more than its own data. In this scenario the current class is envious of the other class, like the saying goes, grass is always greener on the other side.

### About the folder:
Each code smell has a bad code and good code associated with it.
- The suffix "-bad.js" refers to the bad code example.
- The suffix "-good.js" refers to the good code example.

### How to run:

For running the bad examples, one can run the files associated with the suffix "-bad.js". For example:
```bash 
node feature-envy1-bad.js
```
Expected output:
```bash
Name: John Doe
Age: 25
CC Number: 1234567890
CC Expiry: 12/25
CC Network: VISA
```

For running the good examples, one can run the subsequent files with the same prefix and the suffix "-good.js". For example:
```bash
node feature-envy1-good.js
```

Expected output:
```bash
Name: John Doe
Age: 25
CC Number: 1234567890
CC Expiry: 12/25
CC Network: VISA
```

The differences can be seen in the code design of the files in the respective files.

For more information, refer to [refactoring feature envy][1].

[1]: <https://refactoring.guru/smells/feature-envy> "Refactoring feature envy"