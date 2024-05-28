## Code Smell: Primitive Obsession

### Problem

A primitive obsession code smell occurs when primitive data types are overused instead of using objects or classes to represent more complex data structures. This can lead to code that is difficult to understand and maintain.

An example of the primitive obsession code smell can be found [here](customer-bad.js).

### Refactoring

Addressing the primitive obsession code smell typically involves refactoring the code to replace primitive data types with objects or classes that encapsulate the data and behavior. This improves readability, maintainability, and adherence to object-oriented design principles.

The refactored example is shown [here](customer-good.js).

### Executing the Examples

To execute the examples, run the following commands from the root of the project directory:

#### Running the Bad Code Example

```
$ node bloaters/primitive-obsession/customer-bad.js
```

#### Expected Output

```
John Doe, 123 Main St, 555-1234, john@example.com
John Doe, 789 Elm St, 555-1234, john@example.com
```

#### Running the Good Code Example

```
$ node bloaters/primitive-obsession/customer-good.js
```

#### Expected Output

```
John Doe, 123 Main St, 555-1234, john@example.com
John Doe, 789 Elm St, 555-1234, john@example.com
```

---

### References

[3] Refactoring Guru, "Primitive Obsession" https://refactoring.guru/smells/primitive-obsession. Accessed: May 20, 2024.

---
