## Code Smell: Large Class

### Problem

The Large Class code smell occurs when a class tries to include too functionality. As a class grows in size, it often accumulates multiple responsibilities that should be handled by separate, more focused classes. This can lead to several issues:

- **Reduced Readability:** A large class with many methods and attributes becomes difficult to read and understand, making it harder for developers to comprehend its purpose and functionality.
- **Maintenance Difficulties:** With more code concentrated in a single class, maintaining and updating the class becomes more challenging. Changes are more likely to introduce bugs or have unintended side effects.
- **Poor Reusability:** A class with many responsibilities is less reusable because it is tightly coupled with various aspects of the system. It is difficult to extract and reuse specific functionality without bringing along unrelated methods and attributes.
- **Testing Challenges:** Testing a large class thoroughly is more complex. The interdependencies within the class can make it harder to isolate and test individual pieces of functionality.
- **Violation of the Single Responsibility Principle:** A large class often violates the single responsibility principle, which states that a class should have only one reason to change. When a class has multiple responsibilities, changes related to one responsibility can affect other unrelated parts of the class.

An example of the data clumps code smell can be found [here](user-manager-bad.js). This example demonstrates the problem of data clumps by passing individual parameters that logically belong together.

### Refactoring

Addressing the large class code smell typically involves refactoring the class into smaller, more focused classes that each handle a specific responsibility. This improves readability, maintainability, reusability, and testability of the code.

The following techniques can be used to split up a large class:
- If part of the behavior of the large class can be spun off into a separate component, use Extract Class [4].
- If part of the behavior of the large class can be implemented in different ways or is used in rare cases, use Extract Subclass [5].
- If it’s necessary to have a list of the operations and behaviors that the client can use, Extract Interface [6] can help.

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
