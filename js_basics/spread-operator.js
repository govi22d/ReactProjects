// rest : ... (spread operator) 

function sumOfNos(a, b, c, ...d) { 
    console.log(a, b, c, d); 
} 

sumOfNos(1, 2, 3); 
sumOfNos(1, 2, 3, 4, 5); 
sumOfNos(1, 2, 3, 4, 5, 6, 7, "test");


//spread to extract the data or to copy the data
console.log("extarcting data");
const product = {id:100, name:'product 0', price:1200};
const cart = [product];
cart[0].qty = 3;
console.log(cart);
console.log(product);

//cloning the data
const product1 = {id:100, name:'product 1', price:1200};
const cart1 = [{...product1}];
cart1[0].qty = 2;
console.log(cart1);
console.log(product1);