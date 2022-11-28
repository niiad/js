
let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);

function sumPrices(...prices) : number {
    return prices.reduce((total, val) => total + val, 0);
}

let names = ["Sam", "Paul", "Logan"];
let [first, second] = names;
let [ , , logan] = names;

let Product = function(name: string, price: number) {
    this.name = name;
    this.price = price;
}

let hat = new Product("hat", 100);

class NewProduct {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

class TaxedNewProduct extends NewProduct {
    private taxRate: number;

    constructor(name: string, price: number, taxRate = 1.2) {
        super(name, price);
        this.taxRate = taxRate;
    }

    static process(...products: TaxedNewProduct[]) : void {
        products.forEach(product => console.log(product.taxRate));
    }
}