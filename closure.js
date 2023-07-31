function createCounter() {
    let count = 0; // Private counter variable

    // Return an object with methods to manipulate the counter
    return {
        increment: function () {
            count++;
        },

        decrement: function () {
            count--;
        },

        getCount: function () {
            return count;
        },
    };
}

// Create a new counter instance
const counter = createCounter();

// Manipulate the counter using the returned methods
counter.increment();
counter.increment();
counter.decrement();

// Access the current count
console.log(counter.getCount()); // Output: 1
