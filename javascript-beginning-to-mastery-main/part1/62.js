// every method
// callback function krey ga true/false(boolean)

// const numbers = [2,4,6,9,10];


// const ans = numbers.every((number)=>number%2===0);

// console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


// fun declaration sy kia hai iss sawal ko practice:

function pp(cartItem){
    return cartItem.price>10000;
}
// console.log(pp(userCart))
console.log(userCart.every(pp));


// Arrow function y kia hai iss sawal ko:
// const ans = userCart.every((cartItem)=>cartItem.price < 30000);
// console.log(ans);

// every and some method return boolean values: