// Importing module
// import { 
//     addToCart,
//     totalPrice as price,
//     tq 
// } from "./shoppingCart";


console.log('Importing module');

// addToCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Typically, one should avoid mxing named and default exports.

import add, { cart } from './shoppingCart.js';

add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json()
// console.log(data);
// console.log('Something');
/*
const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);

    return {title: data.at(-1).title, text: data.at(-1).body };
}

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
/*
const ShoppingCart2 = (function(){
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity){
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart`);
    }

    const orderStock = function(product, quantity){
        console.log(`${quantity} ${product} ordered from supplier`);
    }
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    }
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/

import cloneDeep from 'lodash-es';

const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5},
    ],
    user: {loggedIn: true}
};

const stateClone = Object.assign({}, state);
console.log(stateClone);

state.user.loggedIn = false;

console.log(stateClone);
const stateDeepClone = cloneDeep(state);

console.log(stateDeepClone);

if(module.hot){
    module.hot.accept();
}