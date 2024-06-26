/*
    Common values in two objects:
        Given two objects, return an array of values that are present in both objects

    const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const bunny = {color: 'white', favoriteFood: 'carrots'};
    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
    const vehicle = { wheels: 4, color: 'red'};

    console.log(commonValues(cat, bunny)); // prints ['white']
    console.log(commonValues(cat, human)); // prints [4, 'sushi']
    console.log(commonValues(human, vehicle)); // prints [4]

*/

function commonValues(obj1, obj2) {
    let ans = []
    let arr1 = Object.values(obj1)
    let arr2 = Object.values(obj2)

    for(let key of arr1){
        if(arr2.includes(key)) ans.push(key)
    }
    return ans
}


const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
const bunny = {color: 'white', favoriteFood: 'carrots'};
const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
const vehicle = { wheels: 4, color: 'red'};

console.log(commonValues(cat, bunny)); // prints ['white']
console.log(commonValues(cat, human)); // prints [4, 'sushi']
console.log(commonValues(human, vehicle)); // prints [4]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = commonValues;
} catch (e) {
    module.exports = null;
}
