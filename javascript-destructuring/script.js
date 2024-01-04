//destructuring array.
const frutas = ["Maçã", "Banana", "Laranja"];

const [f0, f1, f2] = frutas;

console.log(f0, f1, f2);
console.log(f0);
console.log(f1);
console.log(f2);


//destructuring objeto.
const productDetails = 
    {
        name: "Mouse",
        category: "Periféricos",
        price: 39.99,
        color: "Branco"
    }

const {
    name: productName,
    category: productCategory,
    price: productPrice,
    color: productColor
} = productDetails;

console.log(`O nome do produto é ${productName}, custa R$${productPrice}, pertence a categoria ${productCategory}, sua cor é ${productColor}`)