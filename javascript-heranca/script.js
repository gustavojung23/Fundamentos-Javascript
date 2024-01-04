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


//herança - herda propriedadas de uma classe.
class ProductWithAtributes extends Product {
    constructor(name, price, colors){
        super(name, price);
        this.colors = colors;
    }

    showColors(){
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const hat = new ProductWithAtributes("Chapéu", 100, ["Preto", "Azul", "Verde"]);

console.log(hat.name);
console.log(hat.price);
console.log(hat.productWithDiscount(30));
hat.showColors();