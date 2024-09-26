# Code Review Report

## Filename: mm-example-20240709-082120-1-bad.js

### 1. Code smell no. 1
- Code smell name: Inappropriate Intimacy
- Code smell description: One class relies too heavily on the internal details of another class.
- Found in line no.: 3, 7, 11
- Possible solution: Refactor the `Customer` class to handle its own discount, total, and date information or use a different design pattern to reduce dependency.

### 2. Code smell no. 2
- Code smell name: Middle Man
- Code smell description: A class does little but delegate to another class.
- Found in line no.: 2-12 (methods in Customer class)
- Possible solution: Remove the delegating methods in `Customer` class that add little to no value and let users interact directly with the `Order` class.

### 3. Code smell no. 3
- Code smell name: Comments
- Code smell description: Presence of comments can often indicate that the code is not self-explanatory.
- Found in line no.: Not applicable (no comments present)
- Possible solution: Write self-explanatory and clear code, and avoid over-reliance on comments.

### 4. Code smell no. 4
- Code smell name: Data Class
- Code smell description: A class that only contains fields and accessors but lacks complex behavior.
- Found in line no.: 1-17 (`Customer` class) and 19-42 (`Order` class)
- Possible solution: Add meaningful behavior to these classes or consolidate them with other classes that encapsulate behavior.

# Number of files processed: 1# Code Review Report

## Filename: il-class-example-20240709-082113-1-bad.js

### 1. Code smell no. 1
- Code smell name: Large Class
- Code smell description: A class that has too many responsibilities or handles too many tasks.
- Found in line no.: 1-9
- Possible solution: Split the `MathLib` class into smaller, more focused classes that handle specific mathematical operations.

### 2. Code smell no. 2
- Code smell name: Primitive Obsession
- Code smell description: The use of primitive data types to represent domain ideas is prevalent.
- Found in line no.: 2-7 (method parameters `a` and `b`)
- Possible solution: Use more expressive types or value objects to represent integers and mathematical operations.

# Number of files processed: 1# Code Review Report

## Filename: ii-example-20240709-082109-1-bad.js

### 1. Code smell no. 1
- Code smell name: Long Parameter List
- Code smell description: A function or constructor that takes too many parameters is hard to read and maintain.
- Found in line no.: 2 (`Account` constructor), 15 (`Profile` constructor)
- Possible solution: Use parameter objects to encapsulate parameters or introduce the Builder pattern.

### 2. Code smell no. 2
- Code smell name: Data Class
- Code smell description: A class that contains fields and accessors but no complex behavior.
- Found in line no.: 1-12 (`Account` class), 14-25 (`Profile` class)
- Possible solution: Add meaningful behaviors to these classes or consolidate them with other classes.

### 3. Code smell no. 3
- Code smell name: Feature Envy
- Code smell description: A method that seems more interested in the data of other classes than in its own.
- Found in line no.: 32-42 (`User` class methods)
- Possible solution: Move methods dealing with `account` data into the `Account` class.

### 4. Code smell no. 4
- Code smell name: Inappropriate Intimacy
- Code smell description: One class relies too heavily on the internal details of another class.
- Found in line no.: 33 (`User` class accessing `account.id` directly), 36-42 (`User` class accessing and modifying `account.profile`)
- Possible solution: Use delegation or redesign classes to reduce the intimacy between them.

# Number of files processed: 1# Code Review Report

## Filename: fe-example-20240709-082058-1-bad.js

### 1. Code smell no. 1
- Code smell name: Feature Envy
- Code smell description: A method that is more interested in the data of another class than in its own.
- Found in line no.: 15-27 (methods `getUserLocation` and `getLocationCountry` in `User` class)
- Possible solution: Move these methods into the `Location` class where the data resides.

### 2. Code smell no. 2
- Code smell name: Long Parameter List
- Code smell description: Constructors or methods with too many parameters are hard to read and maintain.
- Found in line no.: 2 (constructor of `Location` class)
- Possible solution: Use parameter objects to encapsulate the address, city, and country information.

### 3. Code smell no. 3
- Code smell name: Data Class
- Code smell description: A class that contains fields and accessors but lacks complex behavior.
- Found in line no.: 1-7 (`Location` class)
- Possible solution: Add meaningful behavior related to the data encapsulated in the `Location` class.

# Number of files processed: 1# Code Review Report

## Filename: mc-example-20240709-082116-1-bad.js

### 1. Code smell no. 1
- Code smell name: Message Chains
- Code smell description: A method that requires several calls to gain the information needed is often a sign of poor encapsulation and can lead to fragile code.
- Found in line no.: 1-7
- Possible solution: Introduce intermediary methods or encapsulate the chain within a method to handle the retrieval of required information, reducing the coupling between classes.

# Number of files processed: 1# Code Review Report

## Filename: po-example-20240701-234638-1.js

### 1. Code smell no. 1
- Code smell name: Primitive Obsession
- Code smell description: The use of multiple primitive data types to represent domain ideas.
- Found in line no.: 1-2 (`getFullName` function), 5-6 (`getFormattedAddress` function)
- Possible solution: Use more expressive types or value objects to represent a `FullName` and `Address`.

### 2. Code smell no. 2
- Code smell name: Long Parameter List
- Code smell description: Methods with too many parameters are hard to read and maintain.
- Found in line no.: 5 (function `getFormattedAddress` using `street`, `city`, `state`, and `zipcode`)
- Possible solution: Use parameter objects to encapsulate the address information.

# Number of files processed: 1# Code Review Report

## Filename: po-example-20240709-081931-1-bad.js

### 1. Code smell no. 1
- Code smell name: Long Parameter List
- Code smell description: Methods with too many parameters are hard to read, maintain, and can increase the likelihood of errors.
- Found in line no.: 1 (method `createUser`)
- Possible solution: Use an object to encapsulate the parameters related to the user's address and personal information.

### 2. Code smell no. 2
- Code smell name: Primitive Obsession
- Code smell description: The use of multiple primitive data types to represent domain ideas.
- Found in line no.: 1 (`firstName`, `lastName`, `address`, `city`, `state`, `country` as string parameters)
- Possible solution: Use more expressive types or value objects to represent `FullName` and `Address`.

# Number of files processed: 1# Code Review Report

## Filename: po-example-20240706-165103-1-bad.js

### 1. Code smell no. 1
- Code smell name: Primitive Obsession
- Code smell description: The use of multiple primitive data types to represent domain ideas can make code less maintainable and harder to understand.
- Found in line no.: 6 (method `addOrder` parameters)
- Possible solution: Use more expressive types or value objects to represent `Order` information, such as a dedicated `Order` class or `Product` and `Customer` classes.

### 2. Code smell no. 2
- Code smell name: Long Parameter List
- Code smell description: Methods with too many parameters are hard to read, maintain, and can increase the likelihood of errors.
- Found in line no.: 6 (method `addOrder` with parameters `id`, `customerName`, `productName`, `quantity`, `pricePerUnit`)
- Possible solution: Use an object to encapsulate the order details.

### 3. Code smell no. 3
- Code smell name: Data Clumps
- Code smell description: Grouping primitive data items which are always used together can indicate that they belong in an object.
- Found in line no.: 6-8 (order object creation in `addOrder` method)
- Possible solution: Create a dedicated `Order` class to encapsulate the related data.

# Number of files processed: 1# Code Review Report

## Filename: po-example-20240701-234638-3.js

### 1. Code smell no. 1
- Code smell name: Primitive Obsession
- Code smell description: The use of multiple primitive data types to represent domain ideas.
- Found in line no.: 9-13 (method `describeCircle` with parameters `radius`, `diameter`, `circumference`)
- Possible solution: Use a `Circle` class or object to encapsulate properties `radius`, `diameter`, and `circumference`.

### 2. Code smell no. 2
- Code smell name: Long Parameter List
- Code smell description: Methods with too many parameters are hard to read and maintain.
- Found in line no.: 9 (method `describeCircle` with parameters `radius`, `diameter`, `circumference`)
- Possible solution: Encapsulate these parameters in a `Circle` object or class.

# Number of files processed: 1# Code Review Report

## Filename: po-example-20240701-234638-2.js

### 1. Code smell no. 1
- Code smell name: Primitive Obsession
- Code smell description: The use of multiple primitive data types to represent domain ideas.
- Found in line no.: 1 (method `createUser` parameters), 9 (method `sendWelcomeEmail` parameters)
- Possible solution: Use more expressive types or value objects to represent `FullName` and `Email` information.

### 2. Code smell no. 2
- Code smell name: Long Parameter List
- Code smell description: Methods with too many parameters are hard to read and maintain.
- Found in line no.: 1 (method `createUser` with parameters `firstName`, `lastName`, `email`, `phoneNumber`), 9 (method `sendWelcomeEmail` with parameters `firstName`, `lastName`, `email`)
- Possible solution: Use a `User` object to encapsulate the user details.

### 3. Code smell no. 3
- Code smell name: Duplicate Code
- Code smell description: Code duplication occurs when the same code exists in multiple places.
- Found in line no.: 3, 10 (concatenation of `firstName` and `lastName`)
- Possible solution: Extract the full name concatenation logic into a separate function or method.

# Number of files processed: 1# Code Review Report

## Filename: dc_example_2.js

### 1. Code smell no. 1
- Code smell name: Duplicate Code
- Code smell description: Identical or very similar code is repeated in multiple places.
- Found in line no.: 1-3 (method `getUserAddress`), 5-7 (method `getShippingAddress`), 9-11 (method `getBillingAddress`)
- Possible solution: Refactor the methods into a single generalized function to handle all address types.

### 2. Code smell no. 2
- Code smell name: Long Parameter List
- Code smell description: Functions or methods taking many parameters, which can lead to reduced readability and maintainability.
- Found in line no.: 1 (method `getUserAddress` parameters), 5 (method `getShippingAddress` parameters), 9 (method `getBillingAddress` parameters)
- Possible solution: Use an object to encapsulate the address parameters instead of passing them separately.

# Number of files processed: 1# Code Review Report

## Filename: dc_example_3.js

### 1. Code smell no. 1
- Code smell name: Duplicate Code
- Code smell description: Identical or very similar code is repeated in multiple places.
- Found in line no.: 1-7 (methods `shipProduct` and `returnProduct`)
- Possible solution: Refactor the duplicate methods into a single generalized function that can handle both shipping and returning products using an additional parameter to differentiate between actions.

### 2. Code smell no. 2
- Code smell name: Long Parameter List
- Code smell description: Functions or methods with too many parameters are hard to read and maintain.
- Found in line no.: 1 (method `shipProduct` parameters), 5 (method `returnProduct` parameters)
- Possible solution: Use an object to encapsulate the address and product details instead of passing them as separate parameters.

# Number of files processed: 1# Code Review Report

## Filename: dc_example_4.js

### 1. Code smell no. 1
- Code smell name: Long Parameter List
- Code smell description: Functions or methods with too many parameters are hard to read, maintain, and can increase the likelihood of errors.
- Found in line no.: 1 (function `registerVehicle`), 5 (function `transferVehicle`)
- Possible solution: Use parameter objects to encapsulate vehicle registration and transfer details, improving readability and maintainability.

### 2. Code smell no. 2
- Code smell name: Duplicate Code
- Code smell description: Identical or very similar code is repeated in multiple places.
- Found in line no.: 1-7 (functions `registerVehicle` and `transferVehicle`)
- Possible solution: Refactor the methods to eliminate redundancy by combining similar logic into a single function that handles both registration and transfer using an additional parameter to specify the operation type.

# Number of files processed: 1# Code Review Report

## Filename: dc-example-20240706-165411-1-bad.js

### 1. Code smell no. 1
- Code smell name: Duplicate Code
- Code smell description: Identical or very similar code is repeated in multiple places.
- Found in line no.: 1-7 (functions `shippingInfo` and `billingInfo`)
- Possible solution: Refactor the methods into a single generalized function to handle both shipping and billing information, reducing redundancy.

### 2. Code smell no. 2
- Code smell name: Long Parameter List
- Code smell description: Functions or methods with too many parameters are hard to read and maintain.
- Found in line no.: 1 (function `shippingInfo` with parameters `address`, `city`, `country`, `postal`), 5 (function `billingInfo` with parameters `address`, `city`, `country`, `postal`)
- Possible solution: Use an object to encapsulate the address details, improving readability and maintainability.

### 3. Code smell no. 3
- Code smell name: Primitive Obsession
- Code smell description: The use of multiple primitive data types to represent domain ideas is prevalent.
- Found in line no.: 9-16 (variables `AddressOne`, `CityOne`, `CountryOne`, `PostalOne`, `AddressTwo`, `CityTwo`, `CountryTwo`, `PostalTwo`)
- Possible solution: Use more expressive types or value objects to represent an address, encapsulating these details within a single object.

# Number of files processed: 1# Code Review Report

## Filename: dc-example-20240706-164801-1-bad.js

### 1. Code smell no. 1
- Code smell name: Duplicate Code
- Code smell description: Identical or very similar code is repeated in multiple places.
- Found in line no.: 1-3 (function `createCustomer`), 5-7 (function `updateCustomer`), 9-11 (function `deleteCustomer`)
- Possible solution: Refactor these functions into a single generalized function that handles different customer operations (create, update, delete) using an additional parameter to specify the operation type.

### 2. Code smell no. 2
- Code smell name: Long Parameter List
- Code smell description: Functions or methods with too many parameters are hard to read and maintain.
- Found in line no.: 1 (function `createCustomer` parameters), 5 (function `updateCustomer` parameters), 9 (function `deleteCustomer` parameters)
- Possible solution: Use an object to encapsulate the customer details instead of passing them as separate parameters.

### 3. Code smell no. 3
- Code smell name: Primitive Obsession
- Code smell description: The use of multiple primitive data types to represent domain ideas.
- Found in line no.: 13-20 (variables `customerFirstName`, `customerLastName`, `customerStreet`, `customerCity`, `customerState`, `customerZip`, `customerEmail`, `customerPhone`)
- Possible solution: Use a `Customer` class or object to encapsulate customer details, improving readability and maintainability.

# Number of files processed: 1# Code Review Report

## Filename: lc-example-20240709-081928-1-bad.js

### 1. Code smell no. 1
- Code smell name: Large Class
- Code smell description: A class that has too many responsibilities or handles too many tasks.
- Found in line no.: 1-52 (`Store` class)
- Possible solution: Split the `Store` class into smaller, more focused classes, such as `Product`, `Inventory`, and `SalesReport`. Each class should handle specific aspects of the store.

### 2. Code smell no. 2
- Code smell name: Primitive Obsession
- Code smell description: The use of multiple primitive data types to represent domain ideas.
- Found in line no.: 18-22 (method `addProduct` parameters)
- Possible solution: Use a `Product` class or object to encapsulate the product details, reducing the reliance on primitive types.

### 3. Code smell no. 3
- Code smell name: Long Parameter List
- Code smell description: Methods with too many parameters are hard to read and maintain.
- Found in line no.: 18 (method `addProduct` with parameters `id`, `name`, `price`, `stock`), 34 (method `updateInventory` with parameters `status`, `threshold`)
- Possible solution: Use parameter objects or encapsulating classes to manage these details in a more readable way.

### 4. Code smell no. 4
- Code smell name: Feature Envy
- Code smell description: A method that is more interested in the data of another class than in its own.
- Found in line no.: The class lacks this smell explicitly, but a refactor suggestion here is to ensure the class methods interact clearly within their domains after splitting.

### 5. Code smell no. 5
- Code smell name: Incomplete Library Class
- Code smell description: A class doesn't seem to be complete and possibly contains unused or undefined methods.
- Found in line no.: 60 (`store.applyPromotion` method is called but not defined in the `Store` class)
- Possible solution: Define the `applyPromotion` method or remove the call if not necessary.

# Number of files processed: 1# Code Review Report

## Filename: lc-example-20240706-164948-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Large Class
- **Code smell description**: A class that has too many responsibilities or handles too many tasks.
- **Found in line no.**: 1-53 (class `GroceryStore`)
- **Possible solution**: Split the `GroceryStore` class into smaller, more focused classes, such as `ProductManager`, `CustomerManager`, and `ReportGenerator`. Each class should handle specific aspects of the store.

### 2. Code smell no. 2
- **Code smell name**: Long Parameter List
- **Code smell description**: Methods with too many parameters are hard to read and maintain.
- **Found in line no.**: 7 (method `addProduct` with parameters `id`, `name`, `price`), 20 (method `addCustomer` with parameters `id`, `name`, `email`)
- **Possible solution**: Use parameter objects to encapsulate product and customer details, improving readability and maintainability.

### 3. Code smell no. 3
- **Code smell name**: Primitive Obsession
- **Code smell description**: The use of multiple primitive data types to represent domain ideas.
- **Found in line no.**: 7 (method `addProduct` parameters), 20 (method `addCustomer` parameters), and 38 (method `createPromotion` parameters)
- **Possible solution**: Use more expressive types or value objects to represent `Product` and `Customer`.

### 4. Code smell no. 4
- **Code smell name**: Speculative Generality
- **Code smell description**: Methods or classes created with extra functionality that is not currently needed.
- **Found in line no.**: 42 (method `cancelPromotion`), 50 (method `generateInventoryReport`)
- **Possible solution**: Remove these methods if they are not required at the moment or until their need arises.

# Number of files processed: 1# Code Review Report

## Filename: lpl-example-20240709-081934-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Long Parameter List
- **Code smell description**: Methods with too many parameters are hard to read, maintain, and can increase the likelihood of errors.
- **Found in line no.**: 1 (function `createNewUser`)
- **Possible solution**: Use an object to encapsulate the user details instead of passing them as separate parameters. This will improve readability and maintainability by grouping related parameters together.

# Number of files processed: 1# Code Review Report

## Filename: lpl-example-20240701-234136-1.js

### 1. Code smell no. 1
- **Code smell name**: Long Parameter List
- **Code smell description**: Methods with too many parameters are hard to read, maintain, and can increase the likelihood of errors.
- **Found in line no.**: 1 (function `arrayManipulator`)
- **Possible solution**: Use an object to encapsulate the parameters and pass the object instead of multiple parameters. This will improve readability and maintainability by grouping related parameters together.

# Number of files processed: 1# Code Review Report

## Filename: lpl-example-20240701-234136-2.js

### 1. Code smell no. 1
- **Code smell name**: Long Parameter List
- **Code smell description**: Methods with too many parameters are hard to read, maintain, and can increase the likelihood of errors.
- **Found in line no.**: 1 (function `updateEmployeeProfile`)
- **Possible solution**: Use an object to encapsulate the employee details instead of passing them as separate parameters. This will improve readability and maintainability by grouping related parameters together.

# Number of files processed: 1# Code Review Report

## Filename: lpl-example-20240701-234136-3.js

### 1. Code smell no. 1
- **Code smell name**: Long Parameter List
- **Code smell description**: Methods with too many parameters are hard to read, maintain, and can increase the likelihood of errors.
- **Found in line no.**: 1 (function `drawRectangle` with parameters `canvasContext, x1, y1, x2, y2, fillColor, strokeColor, lineWidth, lineJoin, lineCap, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY`)
- **Possible solution**: Use an object to encapsulate the drawing parameters instead of passing them as separate parameters. This will improve readability and maintainability by grouping related parameters together.

# Number of files processed: 1# Code Review Report

## Filename: lpl-example-20240706-164112-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Long Parameter List
- **Code smell description**: Methods with too many parameters are hard to read, maintain, and can increase the likelihood of errors.
- **Found in line no.**: 1 (function `processStudentData`)
- **Possible solution**: Use an object to encapsulate the student details instead of passing them as separate parameters. This will improve readability and maintainability by grouping related parameters together.

### 2. Code smell no. 2
- **Code smell name**: Primitive Obsession
- **Code smell description**: The use of multiple primitive data types to represent domain ideas.
- **Found in line no.**: 1 (`processStudentData` function parameters), 4 (combining `firstName` and `lastName`), 5 (grades array), 7 (concatenating `address1` and `address2`)
- **Possible solution**: Use more expressive types or value objects to represent `StudentName`, `Grades`, and `Address`.

# Number of files processed: 1# Code Review Report

## Filename: lm-example-20240701-234031-1.js

### 1. Code smell no. 1
- **Code smell name**: Feature Envy
- **Code smell description**: The function `calculatePayment` directly manipulates the DOM by interacting with HTML elements.
- **Found in line no.**: 9-11
- **Possible solution**: Separate the calculation logic from the DOM manipulation. The function should only calculate the payments and return the results, while another part of the code should handle updating the DOM.

### 2. Code smell no. 2
- **Code smell name**: Long Method
- **Code smell description**: Method exceeds 30 lines of code, making it more difficult to read and maintain.
- **Found in line no.**: All lines (1-12), although it does not exceed the line limit here, the complexity can still be broken down.
- **Possible solution**: Split the method into smaller, more focused methods such as `calculateMonthlyPayment`, `calculateTotalPayment`, and `updateDOM`.

### 3. Code smell no. 3
- **Code smell name**: Primitive Obsession
- **Code smell description**: The use of multiple primitive data types to represent domain ideas.
- **Found in line no.**: 1 (parameters `principal`, `years`, `rate`)
- **Possible solution**: Encapsulate these parameters into a `Loan` object to improve readability and maintainability.

# Number of files processed: 1# Code Review Report

## Filename: lm-example-20240709-081922-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Long Method
- **Code smell description**: The `userRegistration` function is excessively long, spanning over 50 lines, making it difficult to read and maintain.
- **Found in line no.**: 1-52
- **Possible solution**: Break this function into smaller, more focused functions. For example, create separate functions for validation checks and another to handle the registration process.

### 2. Code smell no. 2
- **Code smell name**: Primitive Obsession
- **Code smell description**: Over-reliance on primitive data types for user information.
- **Found in line no.**: 1 (`userRegistration` function parameters)
- **Possible solution**: Use a more expressive type or a `User` class to encapsulate user details.

### 3. Code smell no. 3
- **Code smell name**: Data Clumps
- **Code smell description**: The function repeatedly accesses multiple user properties that are always used together for validation.
- **Found in line no.**: 2-43 (validation of user fields such as `username`, `password`, `email`, `firstName`, `lastName`, `dob`, `address`, `zip`, `country`, `phoneNumber`, `securityQuestion`, `securityAnswer`)
- **Possible solution**: Group related fields into cohesive units, possibly using objects or adding validation methods to the `User` class.

# Number of files processed: 1# Code Review Report

## Filename: lm-example-20240701-234031-3.js

### 1. Code smell no. 1
- **Code smell name**: Long Method
- **Code smell description**: The `checkInputs` function is excessively long, spanning multiple conditional checks, making it difficult to read and maintain.
- **Found in line no.**: 1-34 (function `checkInputs`)
- **Possible solution**: Break this function into smaller, more focused functions. For example, create separate functions for validating the username, password, and confirm password.

### 2. Code smell no. 2
- **Code smell name**: Primitive Obsession
- **Code smell description**: Reliance on primitive data types rather than objects to encapsulate data.
- **Found in line no.**: 1-34 (parameters `usernameInput`, `passwordInput`, `confirmPasswordInput`)
- **Possible solution**: Use a `User` object to encapsulate these fields, then perform validation on the object.

# Number of files processed: 1# Code Review Report

## Filename: lm-example-20240701-234031-2.js

### 1. Code smell no. 1
- **Code smell name**: Long Method
- **Code smell description**: The `processData` function is long and does multiple actions such as trimming, capitalizing, removing nulls, and removing duplicates, making it difficult to read and maintain.
- **Found in line no.**: 1-23
- **Possible solution**: Break this function into smaller, more focused functions such as `removeNulls`, `trimAndCapitalize`, and `removeDuplicates`.

### 2. Code smell no. 2
- **Code smell name**: Duplicate Code
- **Code smell description**: The nested loops for removing nulls and duplicates could be merged or handled more efficiently.
- **Found in line no.**: 2-6 (removing nulls), 14-20 (removing duplicates)
- **Possible solution**: Consider refactoring the code to avoid duplicate logic and handle both operations in a single pass if possible.

### 3. Code smell no. 3
- **Code smell name**: Primitive Obsession
- **Code smell description**: The `data` array is being manipulated directly without encapsulating the trimming and formatting logic into a more comprehensive data structure or object.
- **Found in line no.**: 1-23
- **Possible solution**: Use a more expressive data structure or object to encapsulate the data and provide methods for trimming, capitalizing, and ensuring uniqueness.

# Number of files processed: 1# Code Review Report

## Filename: shots-example-20240709-082026-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Duplicate Code
- **Code smell description**: Identical or very similar code is repeated in multiple places.
- **Found in line no.**: 2-15 (methods in `User` class) and 19-32 (methods in `Admin` class)
- **Possible solution**: Reduce redundancy by creating a base class (e.g., `Account`) that contains the shared functionality (constructor, `changePassword`, `validatePassword`) and then extend this base class in `User` and `Admin`.

### 2. Code smell no. 2
- **Code smell name**: Feature Envy
- **Code smell description**: The `changePassword` method in both `User` and `Admin` classes directly relies on `hashPassword` function, indicating that the password hashing logic could be encapsulated within a more cohesive class structure.
- **Found in line no.**: 7-8 and 24-25
- **Possible solution**: Move the password hashing logic into a method within the `Account` class and call it within `changePassword`.

### 3. Code smell no. 3
- **Code smell name**: Primitive Obsession
- **Code smell description**: Direct use of primitive data types for username and password without encapsulation.
- **Found in line no.**: 2-4, 19-21
- **Possible solution**: Create a `UserData` class to encapsulate user and admin data for better structure and maintenance.

### 4. Code smell no. 4
- **Code smell name**: Divergent Change
- **Code smell description**: Multiple changes might be required for similar functionalities in `User` and `Admin` classes if changes occur in password policies.
- **Found in line no.**: 2-15 and 19-32
- **Possible solution**: Consolidate methods and data related to password policies in a base class or policy class to isolate changes.

# Number of files processed: 1# Code Review Report

## Filename: pih-example-20240914-082019-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Parallel Inheritance Hierarchies
- **Code smell description**: The class structure shows parallel inheritance hierarchies where changes to one hierarchy will require changes to the parallel structure.
- **Found in line no.**: 2 (BaseUser), 6 (AdminUser), 12 (GuestUser), 18 (MemberUser), 24 (BaseAuthentication), 28 (PasswordAuthentication), 34 (TokenAuthentication), 40 (FingerprintAuthentication)
- **Possible solution**: Combine the hierarchies or use composition instead of inheritance. For example, the user classes could contain an authentication method as a component rather than extending different authentication classes.

### 2. Code smell no. 2
- **Code smell name**: Duplicate Code
- **Code smell description**: Identical or very similar code is repeated in multiple places.
- **Found in line no.**: 6-10 (AdminUser), 12-16 (GuestUser), 18-22 (MemberUser), 46-56 (AdminPasswordLogin), 58-68 (AdminTokenLogin), 70-80 (GuestPasswordLogin), 82-92 (GuestTokenLogin), 94-104 (MemberFingerprintLogin), 106-116 (MemberPasswordLogin)
- **Possible solution**: Extract common behaviors into reusable methods or classes. For example, create a generic `login` method that accepts various authentication strategies.

### 3. Code smell no. 3
- **Code smell name**: Inappropriate Intimacy
- **Code smell description**: The specialized login classes such as `AdminPasswordLogin` and `GuestTokenLogin` show a tight coupling with their respective authentication mechanisms.
- **Found in line no.**: 46 (AdminPasswordLogin with PasswordAuthentication), 58 (AdminTokenLogin with TokenAuthentication), 70 (GuestPasswordLogin with PasswordAuthentication), 82 (GuestTokenLogin with TokenAuthentication), 94 (MemberFingerprintLogin with FingerprintAuthentication), 106 (MemberPasswordLogin with PasswordAuthentication)
- **Possible solution**: Decouple the authentication logic from the login process through the use of dependency injection or a strategy pattern.

# Number of files processed: 1# Code Review Report

## Filename: dvgchg-example-20240914-082012-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Divergent Change
- **Code smell description**: The `Product` class is modified for two different reasons: managing book details and shirt details. This makes the class complex and harder to maintain.
- **Found in line no.**: 1-34 (methods `setBookDetails`, `getBookDetails`, `setShirtDetails`, and `getShirtDetails`)
- **Possible solution**: Split the `Product` class into two separate classes, such as `Book` and `Shirt`, each handling their specific details.

### 2. Code smell no. 2
- **Code smell name**: Large Class
- **Code smell description**: The `Product` class handles multiple responsibilities related to both books and shirts.
- **Found in line no.**: 1-34
- **Possible solution**: As mentioned, create two smaller, more focused classes to handle books and shirts separately.

### 3. Code smell no. 3
- **Code smell name**: Primitive Obsession
- **Code smell description**: The class relies heavily on primitive data types for product details without encapsulating them in more expressive types or objects.
- **Found in line no.**: 2 (constructor parameters), 9 (method `setBookDetails` parameters), 22 (method `setShirtDetails` parameters)
- **Possible solution**: Use value objects to encapsulate details such as `BookDetails` and `ShirtDetails`.

### 4. Code smell no. 4
- **Code smell name**: Long Method (Borderline, but worth noting)
- **Code smell description**: Even though methods do not exceed 30 lines, the method `getBookDetails` and `getShirtDetails` contain long strings and conditional logic that can be simplified.
- **Found in line no.**: 14-20 (method `getBookDetails`), 27-33 (method `getShirtDetails`)
- **Possible solution**: Refactor these methods to use smaller helper methods to improve readability.

# Number of files processed: 1# Code Review Report

## Filename: dvgchg-example-20240709-082012-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Divergent Change
- **Code smell description**: The `Product` class is modified for two different reasons: managing book details and shirt details. This makes the class complex and harder to maintain.
- **Found in line no.**: 1-20 (class `Product` with methods `getBookDetails` and `getShirtDetails`).
- **Possible solution**: Split the `Product` class into two separate classes, such as `Book` and `Shirt`, each handling their specific details.

### 2. Code smell no. 2
- **Code smell name**: Large Class
- **Code smell description**: The `Product` class handles multiple responsibilities related to both books and shirts.
- **Found in line no.**: 2 (constructor parameters for both book details and shirt details).
- **Possible solution**: Create two smaller, more focused classes to handle books and shirts separately.

### 3. Code smell no. 3
- **Code smell name**: Primitive Obsession
- **Code smell description**: The class relies heavily on primitive data types for product details without encapsulating them in more expressive types or objects.
- **Found in line no.**: 2 (constructor parameters `author`, `pages`, `color`, `size`), 13-19 (methods `getBookDetails` and `getShirtDetails`).
- **Possible solution**: Use value objects to encapsulate details such as `BookDetails` and `ShirtDetails`.

# Number of files processed: 1# Code Review Report

## Filename: lazc-example-20240709-084630-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Lazy Class
- **Code smell description**: A class that does too little and does not justify its existence.
- **Found in line no.**: 1-10 (`MathOperations` class)
- **Possible solution**: Either merge this class's functionality into another class or add more substantial methods to justify its existence.

### 2. Code smell no. 2
- **Code smell name**: Primitive Obsession
- **Code smell description**: Using too many primitive data types instead of small objects for simple tasks.
- **Found in line no.**: 2-4 (constructor parameters `number1`, `number2`)
- **Possible solution**: Use a more expressive type or value object to represent numbers.

### 3. Code smell no. 3
- **Code smell name**: Duplicate Code
- **Code smell description**: Identical or very similar code is repeated in multiple places.
- **Found in line no.**: 7-9 (method `addNumbers`), 15-17 (direct arithmetic operation)
- **Possible solution**: Use the already defined method `addNumbers` to consolidate the code and avoid duplication.

# Number of files processed: 1# Code Review Report

## Filename: lazc-example-20240709-082049-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Lazy Class
- **Code smell description**: A class that does too little and does not justify its existence.
- **Found in line no.**: 1-9 (class `Greeting`)
- **Possible solution**: Consider whether the `Greeting` class is necessary. If it doesn't provide significant functionality beyond holding a single message, it might be better to eliminate the class and handle the message directly.

### 2. Code smell no. 2
- **Code smell name**: Primitive Obsession
- **Code smell description**: Using primitives instead of small objects for complex tasks can lead to encapsulation issues.
- **Found in line no.**: 2-4 (constructor parameter `message`)
- **Possible solution**: If additional functionality regarding the message is anticipated, such as different types of messages or formatting, consider encapsulating the message in a more descriptive object.

# Number of files processed: 1# Code Review Report

## Filename: com-example-20240706-135543-1.js

### 1. Code smell no. 1
- **Code smell name**: Comments
- **Code smell description**: The presence of comments can often indicate that the code is not self-explanatory. Over-relying on comments can make code harder to maintain, especially when the logic changes but the comments do not.
- **Found in line no.**: 1-2, 4, 7, 11-12
- **Possible solution**: Refactor the code to be self-explanatory. For example, meaningful variable names and clear logic can reduce the need for comments. The `sum` function is clear enough without the additional comments.

# Number of files processed: 1# Code Review Report

## Filename: com-example-20240706-162256-1.js

### 1. Code smell no. 1
- **Code smell name**: Comments
- **Code smell description**: The presence of comments indicates that the code is not self-explanatory and relies on comments to clarify functionality.
- **Found in line no.**: 2, 4, 6, 10
- **Possible solution**: Refactor the code to be self-explanatory. For example, use more descriptive variable names directly and remove unnecessary comments.

# Number of files processed: 1# Code Review Report

## Filename: com-example-20240709-082035-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Comments
- **Code smell description**: The presence of excessive comments indicates that the code might not be self-explanatory. Good code should be clear enough that it doesn’t require this level of commenting for basic operations.
- **Found in line no.**: 2-11
- **Possible solution**: Refactor the code to be more self-explanatory by using meaningful variable names and clear logic. Remove excessive comments.

### 2. Code smell no. 2
- **Code smell name**: Primitive Obsession
- **Code smell description**: Usage of primitive types and arrays without encapsulation.
- **Found in line no.**: 12, 14 (`series` array)
- **Possible solution**: Although suitable in this simple example, for more complex scenarios, consider using a Fibonacci series object or class to encapsulate the series generation logic.

# Number of files processed: 1# Code Review Report

## Filename: com-example-20240706-135543-2.js

### 1. Code smell no. 1
- **Code smell name**: Comments
- **Code smell description**: The presence of excessive comments. Good code should be clear enough that it doesn’t require explanatory comments for basic operations.
- **Found in line no.**: 1, 2, 4, 7, 10, 13
- **Possible solution**: Refactor the code to be more self-explanatory by using meaningful variable names and clear logic. Remove or reduce excessive comments.

### 2. Code smell no. 2
- **Code smell name**: Primitive Obsession
- **Code smell description**: Overuse of primitive types might indicate a lack of proper data encapsulation, although not severe in this simple scenario.
- **Found in line no.**: 1 (variable `x`), 2 (variable `y`), 5 (variable `sum`), 8 (variable `difference`), 11 (variable `product`), 14 (variable `quotient`)
- **Possible solution**: Although suitable in this simple context, for more complex scenarios, consider using objects to encapsulate related data and behavior.

# Number of files processed: 1# Code Review Report

## Filename: com-example-20240706-135543-3.js

### 1. Code smell no. 1
- **Code smell name**: Comments
- **Code smell description**: The presence of excessive comments can indicate that the code is not self-explanatory. Good code should be clear enough that it doesn’t require explanatory comments for basic operations.
- **Found in line no.**: 1, 3, 5, 8, 13, 14, 16, 17
- **Possible solution**: Use meaningful function and variable names to make the code self-explanatory. Remove unnecessary comments.

# Number of files processed: 1# Code Review Report

## Filename: dupc-example-20240709-082040-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Duplicate Code
- **Code smell description**: Identical or very similar code is repeated in multiple places, making the code harder to maintain.
- **Found in line no.**: 1-5 (function `calculatePrice`), 8-12 (function `computeTotal`)
- **Possible solution**: Refactor the common logic into a single reusable function to calculate the final price or amount including tax/inflation.

### 2. Code smell no. 2
- **Code smell name**: Primitive Obsession
- **Code smell description**: Overuse of primitive data types instead of encapsulating them in more expressive types or objects.
- **Found in line no.**: 1 (parameters `productPrice`, `qty`), 8 (parameters `amount`, `quantity`)
- **Possible solution**: Use a more expressive type or value object to represent the product and quantity details.

# Number of files processed: 1# Code Review Report

## Filename: dupc-example-20240706-142011-1.js

### 1. Code smell no. 1
- **Code smell name**: Duplicate Code
- **Code smell description**: Identical code for validating person details is repeated in both `addPerson` and `updatePerson` functions.
- **Found in line no.**: 2-5 (function `addPerson`), 15-18 (function `updatePerson`)
- **Possible solution**: Extract the common validation logic into a reusable function to avoid redundancy and improve maintainability.

### 2. Code smell no. 2
- **Code smell name**: Long Parameter List
- **Code smell description**: Functions with too many parameters can be hard to read and maintain.
- **Found in line no.**: 1 (function `addPerson` parameters `firstname`, `lastname`, `age`), 14 (function `updatePerson` parameters `firstname`, `lastname`, `age`)
- **Possible solution**: Use an object to encapsulate the person details instead of passing them as separate parameters.

# Number of files processed: 1# Code Review Report

## Filename: dupc-example-20240706-141355-1.js

### 1. Code smell no. 1
- **Code smell name**: Duplicate Code
- **Code smell description**: Identical validation code for `username` and `password` is repeated in both `login` and `register` functions.
- **Found in line no.**: 
  - `login` function: 2-6
  - `register` function: 11-15
- **Possible solution**: Extract the common validation logic into a reusable function to avoid redundancy, making the code easier to maintain and extend.

### 2. Code smell no. 2
- **Code smell name**: Long Method (Borderline, but worth considering)
- **Code smell description**: Although neither method exceeds 30 lines, the repetitive structure indicates that these methods can become longer if more validations or additional logic are added.
- **Found in line no.**: 
  - `login` function: 1-8
  - `register` function: 10-17
- **Possible solution**: By refactoring to remove duplicate code, you can prevent these methods from growing unnecessarily long in the future.

### 3. Code smell no. 3
- **Code smell name**: Primitive Obsession
- **Code smell description**: Direct use of primitive data types (`username` and `password`) without encapsulating validation logic within a more expressive object or class.
- **Found in line no.**:
  - `login` function parameters: 1
  - `register` function parameters: 10
- **Possible solution**: Use a `UserCredentials` object to encapsulate `username` and `password`, and perform validation within this object.

# Number of files processed: 1# Code Review Report

## Filename: specg-example-20240709-082054-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Speculative Generality
- **Code smell description**: Code includes attributes and methods that are declared but might not yet have a use, making the class more complex than necessary.
- **Found in line no.**: 6-7 (attributes `borderColor` and `backgroundColor`), 18-21 (method `setBorderColor`), 23-26 (method `setBackgroundColor`)
- **Possible solution**: Remove these attributes and methods unless they are currently required by the application. Implement them only when they become necessary to avoid complexity.

### 2. Code smell no. 2
- **Code smell name**: Lazy Class
- **Code smell description**: A class that does too little and does not justify its existence compared to the overall demands placed upon it.
- **Found in line no.**: 1-31 (class `Shape`)
- **Possible solution**: Evaluate if this class should be merged with another class or enhanced to handle more relevant functionality.

### 3. Code smell no. 3
- **Code smell name**: Comments
- **Code smell description**: Print statements within methods can indicate a reliance on console logging for development rather than self-explanatory code.
- **Found in line no.**: 11, 15, 19, 24, and 29
- **Possible solution**: Replace `console.log` statements with more meaningful code that clarifies actions. This will make the code cleaner and easier to understand.

# Number of files processed: 1# Code Review Report

## Filename: deadc-example-20240709-082045-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Dead Code
- **Code smell description**: Code that is not used or has no effect. It unnecessarily consumes resources or creates confusion.
- **Found in line no.**: 3 (`var difference = a - b;` is declared but never used)
- **Possible solution**: Remove the unused variable `difference` to clean up the code and reduce confusion.

# Number of files processed: 1# Code Review Report

## Filename: dcls-example-20240706-172709-3-bad.js

### 1. Code smell no. 1
- **Code smell name**: Data Class
- **Code smell description**: A class that contains fields and accessors but lacks complex behavior. The `Vehicle` class is simply a container for three properties without any methods or significant behavior.
- **Found in line no.**: 1-7
- **Possible solution**: Add meaningful behavior to the `Vehicle` class or consider whether it should be merged into another class that encapsulates related functionality.

# Number of files processed: 1# Code Review Report

## Filename: dcls-example-20240706-172438-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Data Class
- **Code smell description**: A class that contains fields and accessors but lacks complex behavior.
- **Found in**: Class `User` (line 1-7)
- **Possible solution**: Add meaningful behavior to the `User` class or consider merging it with another class that encapsulates related functionality. For instance, methods such as `updateEmail()`, `getAge()` or any other user-centric action could be included to enhance its behavior.

### 2. Code smell no. 2
- **Code smell name**: Primitive Obsession
- **Code smell description**: The use of multiple primitive data types to represent domain ideas.
- **Found in**: Constructor parameters of class `User` (line 2)
- **Possible solution**: Use more expressive types or value objects to encapsulate the behavior. For example, creating specific value objects for `Name`, `Email`, and `Age`.

# Number of files processed: 1# Code Review Report

## Filename: dcls-example-20240706-172709-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Data Class
- **Code smell description**: A class that contains fields and accessors but lacks complex behavior. The `Customer` class is simply a container for two properties (`name` and `address`) without any methods or significant behavior.
- **Found in line no.**: 1-6 (class `Customer`)
- **Possible solution**: Add meaningful behavior to the `Customer` class or consider whether it should be merged into another class that encapsulates related functionality.

### 2. Code smell no. 2
- **Code smell name**: Primitive Obsession
- **Code smell description**: The use of multiple primitive data types to represent domain ideas.
- **Found in line no.**: 2 (constructor parameters `name` and `address`)
- **Possible solution**: Use more expressive types or value objects to encapsulate the customer's `name` and `address`.

# Number of files processed: 1# Code Review Report

## Filename: dcls-example-20240706-172644-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Data Class
- **Code smell description**: A class that contains fields and accessors but lacks complex behavior.
- **Found in**: Entire `CustomerData` class (line 1-6)
- **Possible solution**: Add meaningful behaviors to the `CustomerData` class or consider merging it with another class that encapsulates related functionality. For instance, methods such as `updateEmail()`, `getName()`, or any other customer-centric action could be included to enhance its behavior.

### 2. Code smell no. 2
- **Code smell name**: Primitive Obsession
- **Code smell description**: The use of multiple primitive data types to represent domain ideas.
- **Found in**: Constructor parameters of `CustomerData` class (line 2)
- **Possible solution**: Use more expressive types or value objects to encapsulate the customer's `name` and `email`.

# Number of files processed: 1# Code Review Report

## Filename: dcls-example-20240706-172709-2-bad.js

### 1. Code smell no. 1
- **Code smell name**: Data Class
- **Code smell description**: A class that contains fields and accessors but lacks complex behavior.
- **Found in**: Class `Order` (line 1-7)
- **Possible solution**: Add meaningful behaviors to the `Order` class, such as methods to update quantity, calculate total price, etc. This would make the class more functional and encapsulate behaviors related to an order.

### 2. Code smell no. 2
- **Code smell name**: Primitive Obsession
- **Code smell description**: The use of multiple primitive data types to represent domain ideas.
- **Found in**: Constructor parameters of class `Order` (line 2)
- **Possible solution**: Use more expressive types or value objects to encapsulate `product` and `quantity`. For instance, creating a `Product` class to encapsulate product-related attributes and behaviors.

# Number of files processed: 1# Code Review Report

## Filename: dcls-example-20240709-082042-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Data Class
- **Code smell description**: A class that contains fields and accessors but lacks complex behavior.
- **Found in**: Class `UserData` (line 1-7)
- **Possible solution**: Add meaningful behaviors to the `UserData` class or consider merging it with another class that encapsulates related functionality. For instance, methods such as `updateEmail()`, `getName()`, or any other user-centric action could be included to enhance its behavior.

### 2. Code smell no. 2
- **Code smell name**: Primitive Obsession
- **Code smell description**: The use of multiple primitive data types to represent domain ideas.
- **Found in**: Constructor parameters of class `UserData` (line 2)
- **Possible solution**: Use more expressive types or value objects to encapsulate the user's `name`, `email`, and `phoneNumber`.

# Number of files processed: 1# Code Review Report

## Filename: rb-example-20240709-081950-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Refused Bequest
- **Code smell description**: The subclass `Motorbike` overrides methods from the superclass `Car` with significant changes, indicating improper inheritance.
- **Found in line no.**: 
  - Method `turnOnAirConditioning` in `Motorbike` class (line 38)
  - Method `openTrunk` in `Motorbike` class (line 42)
- **Possible solution**: Refactor the class hierarchy. Use composition instead of inheritance where appropriate, or introduce an `interface` for vehicles with common methods.

### 2. Code smell no. 2
- **Code smell name**: Inappropriate Intimacy
- **Code smell description**: The `Motorbike` class is intimately aware of the `Car` class's internal details and behaviors, which it needs to override.
- **Found in line no.**:
  - Class `Motorbike` (line 24)
- **Possible solution**: Redesign the class hierarchy. The `Motorbike` class should not have to know or override specific implementations of the `Car` class.

### 3. Code smell no. 3
- **Code smell name**: Parallel Inheritance Hierarchies
- **Code smell description**: The design leads to duplicated code and parallel hierarchies when different types of vehicles must override almost all the methods of the `Car` class.
- **Found in line no.**:
  - Class `Motorbike` (line 24), methods `drive`, `park`, `turnOnAirConditioning`, `openTrunk`
- **Possible solution**: Use composition or a strategy pattern to share common code across different vehicle types without inheritance.

### 4. Code smell no. 4
- **Code smell name**: Long Method
- **Code smell description**: Although individual methods are not long, the drive and park methods are very specific to the type of vehicle and overburden the `Car` class.
- **Found in line no.**:
  - Method `drive` in `Car` class (line 7), `Motorbike` class (line 30)
  - Method `park` in `Car` class (line 11), `Motorbike` class (line 34)
- **Possible solution**: Move vehicle-specific actions to their respective classes or use an abstraction.

### 5. Code smell no. 5
- **Code smell name**: Comments
- **Code smell description**: Not applicable here as there are no unnecessary comments.

### 6. Code smell no. 6
- **Code smell name**: Data Class (Borderline)
- **Code smell description**: The `Car` class, especially given how the `Motorbike` class is used, might end up being a data container with more meaningful behaviors expected elsewhere.
- **Found in line no.**:
  - Class `Car` (line 1)
- **Possible solution**: Ensure `Car` contains significant and meaningful behavior if kept for multiple vehicle types.

# Number of files processed: 1# Code Review Report

## Filename: code-acdi.js

### 1. Code smell no. 1
- **Code smell name**: Primitive Obsession
- **Code smell description**: The use of multiple primitive data types to represent domain ideas.
- **Found in line no.**: 
  - Constructor parameters for each class (Add, Subtract, Multiply, Divide):
    - `Add` class (line 2)
    - `Subtract` class (line 21)
    - `Multiply` class (line 40)
    - `Divide` class (line 59)
- **Possible solution**: Use more expressive types or objects to encapsulate the arithmetic values. For example, create an `Operand` class to encapsulate these values and provide methods for validation or other related operations.

### 2. Code smell no. 2
- **Code smell name**: Duplicate Code
- **Code smell description**: Identical or very similar code is repeated across multiple classes.
- **Found in line no.**: 
  - Symbol methods across classes:
    - `showSymbol` method in `Add` class (line 11)
    - `getSymbol` method in `Subtract` class (line 30)
    - `multiplicationSymbol` method in `Multiply` class (line 49)
    - `divisionSymbol` method in `Divide` class (line 68)
  - Operation detail methods across classes:
    - `displayOperation` method in `Add` class (line 15)
    - `operationDetails` method in `Subtract` class (line 34)
    - `multiplicationInfo` method in `Multiply` class (line 53)
    - `showDivision` method in `Divide` class (line 72)
- **Possible solution**: Extract the common behaviors into reusable methods or a base class. Consider using an abstract class `ArithmeticOperation` with common methods and then extend it for specific operations like `Add`, `Subtract`, etc.

### 3. Code smell no. 3
- **Code smell name**: Lazy Class
- **Code smell description**: Each class `Add`, `Subtract`, `Multiply`, and `Divide` does too little, mainly holding values and providing simple methods.
- **Found in line no.**: 
  - `Add` class (line 1-18)
  - `Subtract` class (line 20-37)
  - `Multiply` class (line 39-56)
  - `Divide` class (line 58-75)
- **Possible solution**: Consider whether each class's existence is justified. If they don’t provide significant functionality independently, consider merging them into a single class with parameterized operations.

### 4. Code smell no. 4
- **Code smell name**: Comments (Absence of Explanations)
- **Code smell description**: Lack of comments to explain the purpose of each class or method.
- **Found in line no.**: 
  - General code structure
- **Possible solution**: Add brief comments to explain the purpose of each class and its methods, making the code easier to understand and maintain.

# Number of files processed: 1# Code Review Report

## Filename: ss-example-20240709-081954-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Switch Statements
- **Code smell description**: Switch statements can lead to complex and hard-to-maintain code, especially with multiple cases as shown here. They often indicate that the code could benefit from refactoring into a more object-oriented or polymorphic approach.
- **Found in line no.**: 2-20 (method `processRequest`)
- **Possible solution**: Replace the switch statement with polymorphism. Create a base class or an interface for `Request` types and have each request type implement its own processing logic.

### 2. Code smell no. 2
- **Code smell name**: Long Method
- **Code smell description**: The `processRequest` function is more than 30 lines, making it harder to read and maintain.
- **Found in line no.**: 1-20 (method `processRequest`)
- **Possible solution**: Split this method by moving individual case processing into separate, specialized classes or functions.

### 3. Code smell no. 3
- **Code smell name**: Primitive Obsession
- **Code smell description**: The code relies heavily on primitive data types (such as strings for `request.type`) that represent domain concepts.
- **Found in line no.**: 
  - 2 (switch on `request.type`)
  - 43-47 (invocations of `processRequest` with hardcoded strings)
- **Possible solution**: Use enums or objects to encapsulate request types, which makes the code more robust and expressive.

### 4. Code smell no. 4
- **Code smell name**: Duplicate Code
- **Code smell description**: The logging logic is repeated in each of the processing functions (`processCreate`, `processDelete`, `processUpdate`, `processArchive`, `processRestore`).
- **Found in line no.**: 
  - 24 (method `processCreate`)
  - 28 (method `processDelete`)
  - 32 (method `processUpdate`)
  - 36 (method `processArchive`)
  - 40 (method `processRestore`)
- **Possible solution**: Extract the logging logic into a separate function that can be reused.

### 5. Code smell no. 5
- **Code smell name**: Long Parameter List (Borderline case)
- **Code smell description**: Even though the parameter list is not explicitly long, passing the whole request object instead of its properties could simplify method signatures.
- **Found in line no.**: 
  - 1 (method `processRequest` parameter `request`)
  - 23 (method `processCreate` parameter `data`)
  - 27 (method `processDelete` parameter `data`)
  - 31 (method `processUpdate` parameter `data`)
  - 35 (method `processArchive` parameter `data`)
  - 39 (method `processRestore` parameter `data`)
- **Possible solution**: Consider encapsulating related data into objects to reduce and simplify parameters.

# Number of files processed: 1# Code Review Report

## Filename: tf-example-20240709-082003-1-bad.js

### 1. Code smell no. 1
- **Code smell name**: Temporary Field
- **Code smell description**: A field that is only sometimes used or is initialized but often left empty or null.
- **Found in line no.**: 4 (`this.tempDiscount`)
- **Possible solution**: Use local variables within the method where this value is needed. Alternatively, manage discount application more explicitly by defining a method or state when a discount is active, rather than using a temporary field that might confuse future readers or maintainers.

### 2. Code smell no. 2
- **Code smell name**: Primitive Obsession
- **Code smell description**: The use of a primitive data type to represent a discount, without encapsulating behavior related to discount calculations.
- **Found in line no.**: 12 (method `applyDiscount(discount)`), 16 (property `this.tempDiscount`)
- **Possible solution**: Use a `Discount` object to encapsulate the discount logic, making the code more expressive and easier to maintain.

### 3. Code smell no. 3
- **Code smell name**: Long Method (Borderline)
- **Code smell description**: Although not excessively long, the `totalPrice` method can be simplified for better readability and maintainability.
- **Found in line no.**: 15-21 (method `totalPrice`)
- **Possible solution**: Split the discount calculation logic into a separate method or use more descriptive naming and local variables to clarify the purpose of each calculation step.

# Number of files processed: 1