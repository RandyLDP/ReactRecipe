console.log("Buongiorno");

const person = {
    firstName: "Rita",
    familyName: "Levi-Montalcini",
    dateOfBirth: {
        year: 1909,
        month: 4,
        day: 22,
    },
    placeOfBirth: "Turin",
};

console.dir(person);

const iceCreamPrices = [
    ["vanilla", 1],
    ["chocolate", 1.25],
    ["strawberry", 1.4],
    ["lemon", 0.9],
    ["rum and raisins", 1.1],
];
console.table(iceCreamPrices);