//Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = [];

pizzaToppings.push("hamburger");
pizzaToppings.push("peperoni");
pizzaToppings.push("ham");
pizzaToppings.push("canadian bacon");
console.log(pizzaToppings);
console.log(pizzaToppings.length); // the total amount of values found within the array will be calculated
// or

const pizza = ["cheese", "pepper", "vegetable", "meatlovers"];
pizza.push(32, 46); // you can also push two values together at the same time.
console.log(pizza[4]); // you can select a certain value from the array. in this array no. 5 will be the number 46 that was pushed to the end of the array

// Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greetcustomer() {

}

// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings


// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings


// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in


// Call each function and (starting with preparePizza) use the returned value from the previous function as its input


// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished.
// NOTE: Please refrain from utilizing the Array.toString() method or inadvertently employing string coercion when constructing template literals. The primary objective of this exercise is to provide you with an opportunity to hone your skills in array traversal. Focus on utilizing while, for, and for...of loops to transform the array of toppings into the required output strings.

// The following is not an acceptable solution for Week 3 homework: let pizzaToppings = [" peperoni", " bacon"]; console.log(The pizza toppings are ${pizzaToppings}); After Week 3 this would be a perfectly acceptable solution but not for this assignment. Thank you.
