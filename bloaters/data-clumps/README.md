## Code Smell: Data Clumps

### Problem

Data clumps occur when groups of variables that are frequently used together appear throughout the codebase. These groups often represent a cohesive entity, but instead of being encapsulated into a single object or data structure, they are passed around individually. This leads to several issues, including:

- **Repetition:** The same sets of variables are repeatedly declared and passed around, making the code verbose and harder to maintain.
- **Errors:** It's easy to make mistakes when handling multiple related variables separately, such as passing them in the wrong order or forgetting one of them.
- **Changes:** When the data structure needs to change, every function that uses the clump of variables must be updated, increasing the likelihood of introducing bugs.
- **Readability:** The code becomes harder to read and understand, as the relationships between the variables are not explicitly stated.

An example of the data clumps code smell can be found [here](db-connect-bad.js). This example demonstrates the problem of data clumps by passing individual parameters that logically belong together.

### Refactoring

To address the data clumps code smell, we can encapsulate the related variables into a single object or class. This not only reduces repetition but also makes the code more maintainable and readable.

The refactored example is shown [here](db-connect-good.js). This example refactors the bad example by creating a DatabaseConfig class to encapsulate the related variables.

### Executing the Examples

To execute the examples, run the following commands from the root of the project directory:

#### Running the Bad Code Example

```
$ node bloaters/data-clumps/db-connect-bad.js
```

#### Expected Output

```
Connecting to database at localhost:1234 with user admin
Executing query on database at localhost:1234 with user admin: SELECT * FROM users
Disconnecting from database at localhost:1234 with user admin
```

#### Running the Good Code Example

```
$ node bloaters/data-clumps/db-connect-good.js
```

#### Expected Output

```
Connecting to database at localhost:1234 with user admin
Executing query on database at localhost:1234 with user admin: SELECT * FROM users
Disconnecting from database at localhost:1234 with user admin
```

---

### References

[3] Refactoring Guru, "Data Clumps" https://refactoring.guru/smells/data-clumps. Accessed: May 20, 2024.

[4] Refactoring Guru, "Extract Class" https://refactoring.guru/extract-class. Accessed: May 20, 2024.

[7] Refactoring Guru, "Introduce Parameter Object" https://refactoring.guru/introduce-parameter-object. Accessed: May 20, 2024.

[8] Refactoring Guru, "Preserve Whole Object" https://refactoring.guru/preserve-whole-object. Accessed: May 20, 2024.

---
