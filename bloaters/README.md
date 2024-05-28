## Code Smell: Bloaters

Bloaters are code that are excessively large and unwieldy, making them hard to understand, maintain, and modify. This often happens over time as new functionality is added without proper refactoring. Common types of bloaters include:

### [**Data Clumps**](data-clumps/README.md)

Groups of data items that are often used together, indicating they should be encapsulated in their own class or data structure.

### [**Large Class**](large-class/README.md)

Classes that have too many responsibilities or too much code. These should be split into smaller, more cohesive classes.

### [**Long Method**](long-method/README.md)

Methods that are too long and do too much. These methods should be broken down into smaller, more focused methods.

### [**Long Parameter List**](long-param-list/README.md)

Methods that take too many parameters. This can be reduced by using objects to encapsulate related parameters.

### [**Primitive Obsession**](primitive-obession/README.md)

Overuse of primitive data types instead of using objects or classes to represent complex concepts.

---

### About this Directory
Each subclass of this code smell can be found in the subdirectories contained in this directory. Each has a bad example, demonstrating the code smell, and a good example where the bad code has been refactored to resolve the code smell.
- Files suffixed with "-bad.js" contain the bad code examples
- Files suffixed with "-good.js" contain the good code examples

Each subdirectory contains a README.md that includes: 
- a brief description of the code smell, and a list of references for more information.
- instructions on how to un the code smell and the expected results

---

### **References**

[1] Refactoring Guru, "Bloaters" https://refactoring.guru/refactoring/smells/bloaters. Accessed: May 20, 2024.

[2] M. Fowler, with K. Beck, Refactoring: Improving the Design of Existing Code. 2nd ed., Boston, MA: Addison-Wesley, 2018.
