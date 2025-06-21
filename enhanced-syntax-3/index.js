import Product from "./products.js";
import Cart from "./cart.js";

const product1 = new Product(1 , 'Proident excepteur' , 20 );
const product2 = new Product(2 , 'Exercitation qui' , 20 );
const product3 = new Product(3 , 'Eiusmod nostrud' , 19 );
const product4 = new Product(4 , 'Cupidatat exeercitation' , 22 );

const cart = new Cart();
cart.add(product1);
cart.add(product2);
cart.add(product3);
cart.add(product4);
cart.disPlay() ; 

cart.updateQuanity(1,3)
cart.disPlay() ; 
