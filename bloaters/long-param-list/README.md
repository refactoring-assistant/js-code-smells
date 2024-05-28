## Code Smell: Long Parameter List

### Problem

A long parameter list code smell occurs when a method or function has too many parameters. This can make the method calls difficult to read and understand, increasing the likelihood of errors. It can also make the code harder to maintain and refactor, as adding or removing parameters requires changes to multiple parts of the codebase.

An example of the long parameter list code smell can be found [here](bad/shopping-cart-bad.js).

### Refactoring

Addressing the long parameter list code smell typically involves consolidating related parameters into cohesive data structures.

The refactored example is shown [here](good/shopping-cart-good.js).

### Executing the Examples

To execute the examples, run the following commands from the root of the project directory:

#### Running the Bad Code Example

```
$ open bloaters/long-param-list/bad/index-bad.html
```

#### Expected Output

The HTML file should render a basic shopping list, with a text entry box for adding new items and their prices to the list. Each item is rendered with its name, price and a "Delete" buttons beside it.

#### Running the Good Code Example

```
$ open bloaters/long-param-list/good/index-good.html
```

#### Expected Output

The HTML file should render the same basic shopping list, with a text entry box for adding new items and their prices to the list. Each item is rendered with its name, price and a "Delete" buttons beside it.

---

### References

[3] Refactoring Guru, "Long Parameter List" https://refactoring.guru/smells/long-parameter-list. Accessed: May 20, 2024.

---
