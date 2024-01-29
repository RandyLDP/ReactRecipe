const cookingPointCelsius = 100;
const freezingPointCelsius = 0;

const fahrenheitToCelsius = celsius => (celsius - 32) * (5 / 9);
const celsiusToFahrenheit = fahrenheit => fahrenheit * (9 / 5) + 32;

export {
    celsiusToFahrenheit,
    cookingPointCelsius,
    fahrenheitToCelsius,
    freezingPointCelsius,
};