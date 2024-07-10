// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// Synchronous Programming
// Program is executed by the computer is a sequential order from top to bottom so each task is completed before next one begins

// console.log("This is the first step");
// console.log("This is the second step");
// prompt("are you having a good day? Yes or No");
// console.log("This is the third step");

// Asynchronous Programming
// multiple tasks in a program are executed simultaneously rather than executing them one after the other.

// console.log("This is the first step");
// console.log("This is the second step");
// setTimeout(() => {
// 	prompt("are you having a good day? Yes or No");
// }, 5000);
// console.log("This is the third step");

// What are the disadvantages of using callbacks to handle asynchronous operations in JavaScript
  //Error handling in callback-based code can become cumbersome.
  //Testing asynchronous code involving callbacks can be more challenging.
  //When dealing with multiple asynchronous operations nested within each other (e.g., fetching data A, then using data A to fetch data B, and so on), 
  //   callbacks can lead to deeply nested code structures.
  //Composing asynchronous operations, meaning combining them into reusable functions or patterns, can be trickier with callbacks.