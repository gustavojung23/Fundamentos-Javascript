//map
const products = [
    { name: 'Camisa', price: '10.99', category: 'Roupas'},
    { name: 'Regata', price: '15.99', category: 'Roupas'},
    { name: 'Tênis', price: '17.99', category: 'Tênis'},
    { name: 'Calça', price: '19.99', category: 'Roupas'},
];

//faz uma condicional de onSale para todos os produtos que estão na categoria Roupas.
products.map((product) => {
    if(product.category === "Roupas"){
        product.onSale = true;
    }
});

console.log(products);