# closure
Using a closure in JavaScript is a powerful technique to create private variables and functions. By using closures, we can encapsulate state and behavior within a function and make them inaccessible from the outside, effectively creating private properties and methods.
To create a private counter using closures, we can define a function that returns an object with methods to manipulate the counter. The counter variable will be accessible only within the scope of the outer function, making it private. The inner functions returned by the outer function will be closures, and they will have access to the private counter variable even after the outer function has finished executing.
Thought Process:

    The function createCounter serves as the outer function that will encapsulate the private counter variable count.
    Inside createCounter, we define an object with three methods: increment, decrement, and getCount.
    The count variable is accessible only within the scope of the createCounter function, making it private.
    The inner methods (increment, decrement, and getCount) are closures and have access to the count variable even after createCounter has finished executing.
    When we call createCounter, it returns an object with the three methods that allow us to manipulate the private counter variable.

Edge Cases to Consider:

    Multiple Instances: Each time we call createCounter, a new instance of the counter with its own private count variable will be created. The private count variables will not be shared among different instances.
    Access Control: Since the count variable is private, it cannot be accessed directly from outside the returned methods. The returned methods are the only way to manipulate the counter.

Example Implementation:
In the provided example, we create a new counter instance using the createCounter function. We then increment the counter twice, decrement it once, and finally retrieve the current count using the getCount method. The output is 1, which is the result of 2 - 1, reflecting the counter's manipulation.
