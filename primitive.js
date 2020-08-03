let age = 32; // NUMBER INT
let firstName = "francesco"; // STRING
let lastName = "cutolo"; // STRING
let name = firstName + " " + lastName; // STRING CONCAT
let omosexual = true;
let weight = 91.4; // FLOAT (decimale)

// ARRAY
let extra = "maionese";
let listaSpesa = [
    "pollo", // 0
    "pomodori", // 1
    "peperoni", // 2
    extra // 3
];

// ACCEDO AL TERZO ELEMENTO DELLA LISTA
let terzoElemento = listaSpesa[2];

let userInput = "bicchieri"
listaSpesa.push(userInput);
listaSpesa.push("fragole");

listaSpesa

listaSpesa.pop();
listaSpesa

listaSpesa.shift();
listaSpesa

listaSpesa.splice(1, 1);
listaSpesa

let pos = listaSpesa.indexOf('bicchieri');
pos
listaSpesa.splice(pos, 1);
listaSpesa

let hoIPomodori = listaSpesa.includes('pomodori');
hoIPomodori


// OBJECT
let maioneseKcal = 100;
let kCalListaSpesa = {
    pollo: 23,
    pomodori: 2,
    peperoni: 5,
    maionese: maioneseKcal
};

let kcalPollo = kCalListaSpesa.pollo;
let kcalPollo2 = kCalListaSpesa['pollo'];