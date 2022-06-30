var pizza = {
    tipoCorteza:    "",
    tipoSalsa:  "",
    quesos:   [],
    salsas: []
};
    


function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
    
var p1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
var p2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
var p3 = pizzaOven("gruesa tradicional", "marinara",  ["cheddar",  "fresco"], [ "chorizo", "piña", "durazno"]);
var p4 = pizzaOven("gruesa siciliana", "picante",  ["mozzarella", "feta", "fresco"], [ "champiñones", "tomate"]);


console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

var pizzas = [p1, p2, p3, p4];
var p5 = pizzas[Math.floor(Math.random() * pizzas.length)];
console.log(p5); 
