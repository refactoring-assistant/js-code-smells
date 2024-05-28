## Code Smell: Comments

### Problem

A comments code smell occurs when there are excessive or unnecessary comments in the code. Comments should be used to explain the "why" behind complex logic, not the "what" which should be clear from the code itself. Over-reliance on comments can indicate poorly written or overly complex code.

An example of the comments code smell can be found [here]().

### Refactoring

Addressing the comments code smell typically involves refactoring the code to make it self-explanatory through meaningful variable names, method names, and proper code structure. This reduces the need for comments, making the code cleaner and easier to understand.

The refactored example is shown [here]().

### Executing the Examples

To execute the examples, run the following commands from the root of the project directory:

#### Running the Bad Code Example

```
$ node dispensables/comments/order-bad.js
```

#### Expected Output

```
Area: 50
Perimeter: 30
```

#### Running the Good Code Example

```
$ node dispensables/comments/order-good.js
```

#### Expected Output

```
Area: 50
Perimeter: 30
```

---

### References

[3] Refactoring Guru, "Comments" https://refactoring.guru/smells/comments. Accessed: May 20, 2024.

---
