## Code Smell: Dispensable

Dispensables are code that is unnecessary and should be removed from the codebase. This can make the code harder to understand, maintain, and modify. Removing dispensables helps to keep the code clean and efficient. Common types of dispensables include:

### [**Comments**](comments/README.md)

Excessive or unnecessary comments that explain what the code does instead of why it does it. Well-written code should be self-explanatory.

### [**Duplicate Code**](duplicated-code/README.md)

Identical or very similar code existing in multiple places. This leads to higher maintenance costs and increased risk of inconsistencies and bugs.

### [**Data Class**]()
Classes that have fields and accessors but lack meaningful behavior. These classes should be refactored to include behavior or be eliminated.

### [**Dead Code**]()
Code that is never executed or is no longer needed. This should be removed to reduce clutter and improve readability.

### [**Lazy Class**]()
Classes that do too little, often because they were refactored and most of their responsibilities were moved elsewhere. These classes should be eliminated or merged with other classes.

### [**Speculative Generality**]()
Code that is designed to support future features that are not currently needed. This code adds unnecessary complexity and should be removed until the feature is actually needed.

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
