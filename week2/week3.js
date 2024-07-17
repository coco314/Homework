//Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["hamburger", "peperoni", "sausage", "cheese"];
console.log(pizzaToppings);

// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...numberoftoppings) {
  let name = `one ${size}, ${crust} pizza with`;

  for (let topping of numberoftoppings) {
    name += topping;
  }
  console.log(name);
  return [size, crust, numberoftoppings];
}

let order = getPizzaOrder(
  "large",
  "thick",
  "hamburger",
  "peperoni",
  "cheese",
  "canadian bacon"
);
// Create a preparePizza function
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking izza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
function preparePizza([size, crust, toppings]) {
  console.log("I like to cook pizza");

  let object = {
    size: size,
    crust: crust,
    toppings: toppings
  };

  return object;
}
let broad = preparePizza(order);
// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
// Call each function and (starting with preparePizza) use the returned value from the previous function as its input
function servePizza(pizzaobject) {
  let pizzaname = `Order up! Here's your pizza with ${pizzaobject.size}, and  ${pizzaobject.crust}`;

  for (let topps of pizzaobject.toppings) {
    pizzaname += topps;
  }
  console.log(pizzaname);
  return pizzaobject;
}

servePizza(broad);

// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished.
// NOTE: Please refrain from utilizing the Array.toString() method or inadvertently employing string coercion when constructing template literals. The primary objective of this exercise is to provide you with an opportunity to hone your skills in array traversal. Focus on utilizing while, for, and for...of loops to transform the array of toppings into the required output strings.

// The following is not an acceptable solution for Week 3 homework: let pizzaToppings = [" peperoni", " bacon"]; console.log(The pizza toppings are ${pizzaToppings}); After Week 3 this would be a perfectly acceptable solution but not for this assignment. Thank you.
