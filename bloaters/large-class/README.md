## Code Smell: Large Class

### Problem

The Large Class code smell occurs when a class tries to include too much functionality. As a class grows in size, it often accumulates multiple responsibilities that should be handled by separate, more focused classes. 

An example of the data clumps code smell can be found [here](user-manager-bad.js). This example demonstrates the problem of data clumps by passing individual parameters that logically belong together.

### Refactoring

Addressing the large class code smell typically involves refactoring the class into smaller, more focused classes that each handle a specific responsibility. This improves readability, maintainability, reusability, and testability of the code.

The refactored example is shown [here](user-manager-good.js). This example refactors the bad example by separating the different types of functionality into smaller, more focused classes.

### Executing the Examples

To execute the examples, run the following commands from the root of the project directory:

#### Running the Bad Code Example

```
$ node bloaters/large-class/user-manager-bad.js
```

#### Expected Output

```
User with email chika@example.com logged in with password chika@example.com.
Sending notification to chika@example.com: Welcome to the system!
Checking if user with email chika@example.com is authorized to perform delete.
true
User with email chika@example.com logged out.
```

#### Running the Good Code Example

```
$ node bloaters/large-class/user-manager-good.js
```

#### Expected Output

```
User with email chika@example.com logged in.
Sending notification to chika@example.com: Welcome to the system!
Checking if user with email chika@example.com is authorized to perform delete.
true
User with email chika@example.com logged out.
```

---

### References

[7] Refactoring Guru, "Large Class" https://refactoring.guru/smells/large-class. Accessed: May 20, 2024.

[4] Refactoring Guru, "Extract Class" https://refactoring.guru/extract-class. Accessed: May 20, 2024.

[5] Refactoring Guru, "Extract Subclass" https://refactoring.guru/extract-subclass. Accessed: May 20, 2024.

[6] Refactoring Guru, "Extract Interface" https://refactoring.guru/extract-interface. Accessed: May 20, 2024.

---
