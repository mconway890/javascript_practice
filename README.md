# CODECADEMY JAVASCRIPT LESSONS

## HIGHER-ORDER FUNCTIONS

Review:

- Abstraction allows us to write complicated code in a way that's easy to reuse, debug, and understand for human readers

- We can work with functions the same way we would any other type of data including reassigning them to new variables

- JavaScript functions are first-class objects, so they have properties and methods like any object

- Functions can be passed into other functions as parameters

- A higher-order function is a function that either accepts functions as parameters, returns a function, or both


## ITERATORS

Review:

- .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.

- .map() executes the same code on every element in an array and returns a new array with the updated elements.

- .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.

- .findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.

- .reduce() iterates through an array and takes the values of the elements and returns a single value.

- All iterator methods takes a callback function that can be pre-defined, or a function expression, or an arrow function.

## OBJECTS

Review:

- Objects store collections of key-value pairs.

- Each key-value pair is a property—when a property is a function it is known as a method.

- An object literal is composed of comma-separated key-value pairs surrounded by curly braces.

- You can access, add or edit a property within an object by using dot notation or bracket notation.

- We can add methods to our object literals using key value syntax with anonymous function expressions as values, or by using the new ES6 method syntax.

- We can navigate complex, nested objects by chaining operators.

- Objects are mutable—we can change their properties even when they're declared with const.

- Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.

- We can iterate through objects using the For...in syntax.


## ADVANCED OBJECTS

Review:

- The object that a method belongs to is called the calling object.

- The this keyword refers the calling object and can be used to access properties of the calling object.

- Methods do not automatically have access to other internal properties of the calling object.

- The value of this depends on where the this is being accessed from.

- We cannot use arrow functions as methods if we want to access other internal properties.

- JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.

- The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.

- Setters and getter methods allow for more detailed ways of accessing and assigning properties.

- Factory functions allow us to create object instances quickly and repeatedly.

- There are different ways to use object de-structuring: one way is the property value shorthand and another is de-structured assignment.
