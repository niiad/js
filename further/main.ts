function calculateTax(amount: number, format: boolean) : string | number {
    const calculateAmount = amount * 12;

    return format ? `$${calculateAmount.toFixed(2)}` : calculateAmount;
}

function sumPrices(...prices: number[]) : number {
    return prices.reduce((total, val) => {
        return total + (Number.isNaN(Number(val)) ? 0 : Number(val));
    }, 0);
}