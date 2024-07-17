//Inside your JS file, create two variables: pizzaPlace and numberOfToppings
//Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
let pizzaPlace = "Imo's";
let numberOfToppings = 13;
//Print the variables and their types.
console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

console.log(pizzaPlace);
console.log(numberOfToppings);
//Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
console.log(`Hello, this is ${pizzaPlace}, and we have ${numberOfToppings} toppings to to choose from
  . How can we help you today?`);

//Construct an if statement that prints "." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
