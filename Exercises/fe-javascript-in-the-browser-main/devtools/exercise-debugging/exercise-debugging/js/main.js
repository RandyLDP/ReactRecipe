import { calculateOrderPrice } from "./lib.js";

const order = [
    { vanilla: 1 },
    { lemon: 1, chocolate: 2 },
    { strawberry: 1, lemon: 2 },
];

const price = calculateOrderPrice(order);
console.log(`🍦 The price of this order is ${price.toFixed(2)}`);