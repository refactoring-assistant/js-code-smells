## Code Smell: Long Method

### Problem

A long method code smell occurs when a method is excessively long, typically more tha . This can lead to several issues:

- **Reduced Readability:** Long methods are hard to read and understand. As the method grows, it becomes increasingly difficult for developers to grasp its logic and flow.
- **Maintenance Difficulties:** Long methods are harder to maintain. When a method contains many lines of code, it is more prone to bugs and errors. Changes to one part of the method can inadvertently affect other parts.
- **Testing Challenges:** Testing long methods is more complex. It is difficult to write unit tests that cover all the different branches and scenarios within a long method.
- **Violation of the Single Responsibility Principle:** Long methods often violate the single responsibility principle, which states that a method should have only one reason to change. When a method tries to handle multiple tasks, changes related to one task can impact other unrelated tasks.
- **Duplication of Code:** Long methods often contain duplicated code, which leads to redundancy and increases the potential for inconsistencies and errors.
- **Difficulty in Reuse:** Long methods are less reusable because they contain too much specific logic. Breaking them into smaller, more focused methods can make the code more modular and easier to reuse.

### Refactoring

Addressing the long method code smell typically involves refactoring the method into smaller, more focused methods. This improves readability, maintainability, testability, and adherence to the single responsibility principle.

### Executing the Examples

To execute the examples, run the following commands from the root of the project directory:

#### Running the Bad Code Example

```
$ open bloaters/long-method/bad/index-bad.html
```

#### Expected Output

The HTML file should render a basic todo list, with a text entry box for adding new items to the list. Each item is rendered with its name, as well as "Complete" and "Delete" buttons beside it.

#### Running the Good Code Example

```
$ open bloaters/long-method/good/index-good.html
```

#### Expected Output

The HTML file should render the same basic todo list as the bad example, with a text entry box for adding new items to the list. Each item is rendered with its name, as well as "Complete" and "Delete" buttons beside it.

---

### References

[3] Refactoring Guru, "Long Method" https://refactoring.guru/smells/long-method. Accessed: May 20, 2024.

---