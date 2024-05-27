## Code Smell: Object-Orientation Abusers -> Refused Bequest

### Problem:
Due to very nature of inheritance, one may decide to create a subclass which imports common methods from a parent class to reduce code duplication. But if the hierarchy does not make sense in a real-world scenario, it may not utilize all the methods in the parents class. The methods not needed will be either unused or redefined to throw exceptions.

### About the folder:
Each code smell has a bad code and good code associated with it.
- The suffix "-bad.js" refers to the bad code example.
- The suffix "-good.js" refers to the good code example.

### How to run:

For running the bad examples, one can run the files associated with the suffix "-bad.js". For example:
```bash 
node refused-bequest1-bad.js
```
Expected output:
```bash
Bark
Mammal
4
~silent~
Unknown
4
```

For running the good examples, one can run the subsequent files with the same prefix and the suffix "-good.js". For example:
```bash
node refused-bequest1-good.js
```

Expected output:
```bash
Bark
Mammal
4
The methods soundMade() and typeOfAnimal() are no more associated with Chair.
4
```

The differences can be seen in the code design of the files in the respective files.

For more information, refer to [refactoring refused bequest][1].

[1]: <https://refactoring.guru/smells/refused-bequest> "Refactoring refused bequest"