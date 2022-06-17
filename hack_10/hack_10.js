/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];

foo.name = `${foo.name.charAt(0).toUpperCase()}oo`
foo.roles = [`${foo.roles[0].toUpperCase()}`, roleSuperUser, roleUser]

foo.skills = [skills[0], skills[1], ...foo.skills, skills[3]]
foo.skills.splice(5,0, skills[2])
foo.skills[3] = foo.skills[3].toUpperCase()
foo.skills[4] = foo.skills[4].toUpperCase()
foo.skills = foo.skills.map(x => x.charAt(0).toUpperCase() + x.substring(1));

levels.splice(0,1,{LEVEL:"L1"})
levels.splice(1,1,{LEVEL:"L2"})
levels.splice(2,1,{LEVEL:"L3"})
foo.levels = levels

delete foo.alias

let result = foo

console.log(result) 
//export result
module.exports = result; 