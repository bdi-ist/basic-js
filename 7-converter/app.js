



function convertMoney(sum, currency) {
    if (currency === 'USD-RUB') {
        const countRate_USD_IN_RUB = 88;
        return result_IN_USD = sum * countRate_USD_IN_RUB;
        console.log(result_IN_USD);
    } else if (currency === 'EUR-RUB') {
        const countRate_EUR_IN_RUB = 95;
        return result_IN_EUR = sum * countRate_EUR_IN_RUB;
        console.log(result_IN_EUR);
    } else if (currency === 'RUB-USD') {
        const countRate_RUB_IN_USD = 0.01135;
        return result_IN_RUB = sum * countRate_RUB_IN_USD;
        console.log(result_IN_RUB);
    } else if (currency === 'RUB-EUR') {
        const countRate_RUB_IN_EUR = 0.01046;
        return result_IN_RUB = sum * countRate_RUB_IN_EUR;
        console.log(result_IN_RUB);
    }
    else return console.log(null);

}
console.log(convertMoney(10, 'RUB-EUR'));

