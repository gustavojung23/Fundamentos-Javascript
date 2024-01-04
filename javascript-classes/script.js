//classes
class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Product("Camisa", 200);
console.log(shirt.name);
console.log(shirt.price);
console.log(shirt.productWithDiscount(10));

const tenis = new Product("Tênis", 300);
console.log(tenis.name);
console.log(tenis.price);
console.log(tenis.productWithDiscount(15));