/*
Least and Most Expensive Toys:
    Write a function that accepts an object that represents a catalog of toys with their names and prices.
    The keys of the object are names of each toy, and the corresponding value is its price.
    The function should return an array where the first element is the name of the least expensive toy,
    and the second element is the name of the most expensive toy. You may assume there will always be
    one most and least expensive toy.

    const catalog1 = {'ball': 5, 'jumprope': 3, 'yo-yo': 10, 'trading cards': 12}
    const catalog2 = {'skateboard': 50, 'bicycle': 100, 'doll': 10, 'puzzle': 20}
    console.log(leastAndMostExpensive(catalog1)); // prints ['jumprope', 'trading cards']
    console.log(leastAndMostExpensive(catalog2)); // prints ['doll', 'bicycle']
*/

// my thinking is to compare to arrays to each other.
//and push the key into the new array by matching it with
//the index value of the corresponding number.
function leastAndMostExpensive(catalog) {
let arrVal = Object.values(catalog)
let arrKey = Object.keys(catalog)
let numMax = 0
let numMin = Infinity
let ind1
let ind2
let arr = []

for(let i = 0; i < arrVal.length; i++){
    let el = arrVal[i]
    if(numMax < el) numMax = el
    ind1 = arrVal.indexOf(numMax)
    if(numMin > el) numMin = el
    ind2 = arrVal.indexOf(numMin)
}

for(let j = 0; j < arrKey.length; j++){
    let el = arrKey[j]
    if(arrKey.indexOf(el) === ind2) arr.push(el)
}

for(let k = 0; k < arrKey.length; k++){
    let el = arrKey[k]
    if(arrKey.indexOf(el) === ind1) arr.push(el)
}
return arr
}


    const catalog1 = {'ball': 5, 'jumprope': 3, 'yo-yo': 10, 'trading cards': 12}
    const catalog2 = {'skateboard': 50, 'bicycle': 100, 'doll': 10, 'puzzle': 20}
    console.log(leastAndMostExpensive(catalog1)); // prints ['jumprope', 'trading cards']
    console.log(leastAndMostExpensive(catalog2)); // prints ['doll', 'bicycle']
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = leastAndMostExpensive;
} catch (e) {
    module.exports = null;
}
