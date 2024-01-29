const flavourPricesPerScoop = {
    chocolate: 1,
    vanilla: 2,
    strawberry: 1.5,
    lemon: 1.75,
};
const VATPercentage = 21;

const addVAT = amount => {
    const factor = (100 + VATPercentage) / 100;
    const amountIncludingVAT = amount * factor;
    return amountIncludingVAT;
};

const getPrice = flavour => {
    const price = flavourPricesPerScoop[flavour];
    return price;
};

const calculatePricePerFlavour = (flavour, scoops) => {
    const pricePerScoop = getPrice(flavour);
    const total = pricePerScoop * scoops;
    return total;
};

const calculateOrderPrice = order => {
    let total = 0;
    // An order is n items
    // Each item is m flavours with amount of scoops
    order.forEach(item => {
        Object.entries(item).forEach(([flavour, scoops]) => {
            const price = calculatePricePerFlavour(flavour, scoops);
            total += price;
        });
    });
    total = addVAT(total);
    return total;
};

export { calculateOrderPrice };