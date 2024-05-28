## Code Smell: Couplers -> Message Chains

### Problem:
The occurence of this code smell shows over-dependence of an object on a layer of different objects. It could be something like a call by object 1 to object 2 to object 3 to object 4 (obj1.obj2method().obj3method().obj4method()). This chain means the client object is dependent on navigation along the class structure. Any changes in the relationships requires modifying the client.

### About the folder:
Each code smell has a bad code and good code associated with it.
- The suffix "-bad.js" refers to the bad code example.
- The suffix "-good.js" refers to the good code example.

### How to run:

For running the bad examples, one can run the files associated with the suffix "-bad.js". For example:
```bash 
node message-chains1-bad.js
```
Expected output:
```bash
Brand Name: Toyota
Car Type: SUV
Tyre Material: Rubber
Tyre Brand: Michelin
```

For running the good examples, one can run the subsequent files with the same prefix and the suffix "-good.js". For example:
```bash
node message-chains1-good.js
```

Expected output:
```bash
Brand Name: Toyota
Car Type: SUV
Tyre Material: Rubber
Tyre Brand: Michelin
```

The differences can be seen in the code design of the files in the respective files.

For more information, refer to [refactoring message chains][1].

[1]: <https://refactoring.guru/smells/message-chains> "Refactoring message chains"