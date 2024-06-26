/*

    Write a function using fat arrow syntax, `discountPrices` that takes in an array of prices
    and an array of discounts which correspond to each item price. The function
    should returns a new array containing strings for the new discounted prices
    formatted with a dollar sign and to two decimal places. See examples below:

    Hint: Look up `toFixed()` on MDN

    Examples:
    console.log(discountPrices([10.00, 21.99, 54.49, 60.00], [0.2, 0.15, 0.3, 0.5])) // prints [ '$8.00', '$18.69', '$38.14', '$30.00' ]
    console.log(discountPrices([4.99, 12.29, 59.00], [0.15, 0.3, 0.1])) // prints [ '$4.24', '$8.60', '$53.10' ]

*/

const discountPrices = (arr1, arr2) => {
    let arr = []
    let key1
    let key2

    for(let i = 0; i < arr1.length; i++){
        key1 = i
       for(let j = 0; j < arr2.length; j++){
        key2 = j
        if(key1 === key2){
        let discount = arr1[key1] - (arr1[key1] * arr2[key2])
        arr.push('$' + discount.toFixed(2))
        }
    }
}




    console.log(arr)
}

console.log(discountPrices([10.00, 21.99, 54.49, 60.00], [0.2, 0.15, 0.3, 0.5])) // prints [ '$8.00', '$18.69', '$38.14', '$30.00' ]
    console.log(discountPrices([4.99, 12.29, 59.00], [0.15, 0.3, 0.1])) // prints [ '$4.24', '$8.60', '$53.10' ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = discountPrices;
} catch (e) {
    module.exports = null;
}
