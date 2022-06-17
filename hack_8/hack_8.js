/**
* agregar las propiedades del objeto foo al array result, 
* cada propiedad dentro de un array, con 2 items, 
* que se representa con la clave y el valor
* debes utilizar for ó while
*
* 
* output => [["id",100], ["name","foo"], ["role","admin"]]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin"
};
let result = [];
let prueba = Object.entries(foo)
console.log(prueba)


for (let i= 0;i < prueba.length;i++){
    result.push(prueba[i])
}
console.log(result)


//export result
module.exports = result; 