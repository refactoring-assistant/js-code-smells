## Code Smell: Duplicated Code

### Problem

A duplicated code smell occurs when identical or very similar code exists in multiple places. This can lead to higher maintenance costs and increased risk of inconsistencies and bugs.

An example of the duplicated code smell can be found [here](validate-user-bad.js).

### Refactoring

Addressing the duplicated code smell typically involves refactoring the code to extract the duplicated logic into a single method or class that can be reused. This improves maintainability, reduces the potential for errors, and makes the codebase more cohesive.

The refactored example is shown [here](validate-user-good.js).

### Executing the Examples

To execute the examples, run the following commands from the root of the project directory:

#### Running the Bad Code Example

```
$ node dispensables/duplicated-code/validate-user-bad.js
```

#### Expected Output

```
Registration valid: true
Update valid: true
```

#### Running the Good Code Example

```
$ node dispensables/duplicated-code/validate-user-good.js
```

#### Expected Output

```
Registration valid: true
Update valid: true
```

---

### References

[3] Refactoring Guru, "Duplicated Code" https://refactoring.guru/smells/duplicate-code. Accessed: May 20, 2024.

---
