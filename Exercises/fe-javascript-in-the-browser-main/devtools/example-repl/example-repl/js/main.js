import {
    cookingPointCelsius,
    freezingPointCelsius,
    celsiusToFahrenheit,
} from "./lib.js";

import { countries } from "./lib2.js";

console.log(`Water boils at ${cookingPointCelsius} degrees Celsius.`);
console.log(
    `Water boils at ${celsiusToFahrenheit(
    cookingPointCelsius
  )} degrees Fahrenheit.`
);

console.log(`Water freezes at ${freezingPointCelsius} degrees Celsius.`);
console.log(
    `Water freezes at ${celsiusToFahrenheit(
    freezingPointCelsius
  )} degrees Fahrenheit.`
);

window.countries = countries;