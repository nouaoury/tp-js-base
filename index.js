
/*var x = 5
let y = 10
const z = 15
console.log("x=",x)
console.log(" y ==",y)
console.log(" z ==",z)
console.log(" reassignement des valeurs")
var x = 15
let y = 910
const z=4
console.log("x=",x)
console.log(" y ==",y)
console.log(" z ==",z)*/


//exercice 2
/*function testScope() {
if (true) {
var a = "var visible partout"
let b = "let visible ici seulement"
}
console.log(a);
console.log(b); 
}
testScope();*/

//exercice 3
/*function sayHello(name) {
return `Bonjour ${name}`;
}
const sayHelloArrow = (name) => `Bonjour ${name}`;

console.log(sayHello('anas'))
console.log(sayHelloArrow('mouquine'))

*/


//exercice 4
/*const person = {
name: "Sara",
sayHello: function () {
console.log("Bonjour " + this.name);
},
sayHelloArrow: () => {
console.log("Bonjour "  + this.name);
},
};
person.sayHello();
person.sayHelloArrow();*/

/*import message, { PI, carre } from "./mathUtils.js";
message(); // �� Module mathUtils chargé !
console.log("PI =", PI);
console.log("Carré de 5 =", carre(5));*/

//exercice 5
/*const fruits = ["pomme", "banane","orange"];
fruits.push("kiwi");
fruits.pop();
console.log(fruits);*/

//exercice 6
/*const nums = [1, 2, 3, 4, 5];
console.log(nums.map(n => n * 2));
// Garde seulement les nombres pairs
console.log(nums.filter(n => n % 2 === 0));
// Calcule la somme totale
console.log(nums.reduce((sum, n) => sum + n, 0));


//exercice 7
console.log(nums.find(n => n > 3));
console.log(nums.some(n => n < 0));
console.log(nums.every(n => n > 0));*/

//exercice 8
/*const user = { id: 1, name: "Ali", city: "Rabat" };
// Déstructuration
const { name, city } = user;
console.log(`${name} habite à ${city}`);
// Renommage
const { name: fullName, ...rest } = user;
console.log(fullName);
console.log(rest);*/

//exercice 9
/*const p = new Promise((resolve) => {
setTimeout(() => resolve("Opération terminée !"), 2000);
});
p.then(result => console.log(result));*/

//exercice 10
/*async function getUsers() {
try {
const res = await
fetch("https://jsonplaceholder.typicode.com/users");
const data = await res.json();
console.log(data);
} catch (e) {
console.error("Erreur :", e.message);
}
}
getUsers();*/


//exercice 11
/*const name = "Nadia";
const hour = new Date().getHours();
console.log(`Bonjour ${name}, il est ${hour}h`);*/


//exercice 12
/*const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);*/


//exercice 13
/*function sum(...numbers) {
return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

const settings = { theme: null };
console.log(settings.theme ?? "light"); // light
const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email); 
console.log(user2.address?.city); */


const produits = [
{ nom: "Lait", prix: 10, expireLe: "2025-12-01" },
{ nom: "Yaourt", prix: 5, expireLe: "2024-01-01" },
{ nom: "Jus", prix: 8, expireLe: "2026-02-15" },
];
const aujourdHui = new Date();
const valides = produits.filter(p => new Date(p.expireLe) >aujourdHui);
const total = valides.reduce((s, p) => s + p.prix, 0);
console.log("Produits valides :", valides);
console.log( "Total:  ", total, "DH");
