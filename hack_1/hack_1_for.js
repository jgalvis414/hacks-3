/**
 * mediante el loop for agregar los valores
 * de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];

let len = arr.length

for (let index = 0; index < len; index++) { 
    result.push(Object.values(arr[index])) 
}
result = result.flat() 
console.log(result)
 
module.exports = result;