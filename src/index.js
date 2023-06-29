import fruits from "./foods";
import { choice, remove } from "./helpers";

// Randomly draw a fruit from the array
let fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please`)
console.log(`Here you go: ${fruit}`)
console.log(`Delicious! May I have another?`)

// Remove the fruit from the array of fruits
let remaining = remove(fruit, fruits);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`)
