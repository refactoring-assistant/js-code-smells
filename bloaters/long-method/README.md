## Code Smell: Long Method

### Problem

A long method code smell occurs when a method is excessively long, typically more than 10 lines long.

An example of the long method code smell can be found [here](bad/todo-bad.js).

### Refactoring

Addressing the long method code smell typically involves refactoring the method into smaller, more focused methods. This improves readability, maintainability, testability, and adherence to the single responsibility principle.

The refactored example is shown [here](good/todo-good.js).

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