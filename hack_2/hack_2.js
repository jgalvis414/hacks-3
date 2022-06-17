/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [2,3,4]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
let len = arr.length

for (let i = 1; i < len-1; i++) { 
    result.push(Object.values(arr[i])) 
}
result = result.flat()

//export result
module.exports = result;
console.log(result)