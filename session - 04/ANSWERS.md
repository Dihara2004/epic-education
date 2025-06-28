1.What are the three states of a Promise?
    Pending
    Fulfilled
    Rejected

2.How does the async keyword affect a function's return value?
    An async function always returns a Promise. If the function returns a value, the Promise is resolved with that value. If the function throws an error, the Promise is rejected with that error.

3.Explain the purpose of the await keyword.
    This keyword can only be used inside an async function. It pauses the execution of the async function and waits for the Promise to resolve or reject. Once the Promise is settled, it resumes the execution of the function and returns the resolved value. If the Promise is rejected, it throws the error.

4.What is a callback function and how is it used in asynchronous operations?
    A callback is a function that is passed as an argument to another function and is executed after some operation has been completed.
    Asynchronous operations allowing you to continue executing code while waiting for an operation to complete.

5.Describe the role of the event loop in JavaScript.
    The event loop enables JavaScript to perform asynchronous operations without blocking the main thread, making it possible to handle multiple tasks concurrently.

    Call Stack: This is where the code is executed. Functions are pushed onto the stack when they are called and popped off when they return.
    Web APIs: These are browser-provided APIs like setTimeout, DOM events, fetch, etc., that handle asynchronous operations.
    Callback Queue: This is where the callbacks from asynchronous operations are queued to be executed.
    This continuously checks the call stack and the callback queue. If the call stack is empty, it pushes the first callback from the queue onto the call stack for execution.

6.Write a function called delayedGreeting that takes a name as an argument and logs a greeting message to the console after a 2-second delay using setTimeout. Use a callback function to achieve this.
    
    function delayedGreeting(name) {
    setTimeout( () => {
        console.log("Hello, " + name + "!");
    }, 2000);
    }

    delayedGreeting("Dihara");
