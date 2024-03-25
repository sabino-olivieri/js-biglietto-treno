//chiedo quanti km deve percorrere
let kmUser = prompt("Ciao, quanti km devi percorrere?").replace(/,/g, "."); // string | null
console.log(kmUser);

//chiedo età
let ageUser = prompt("Ciao, quanti anni hai?"); // string | null
console.log(ageUser);

// converto per sicurezza in km in number
kmUser = parseFloat(kmUser); // number
console.log(kmUser, typeof kmUser);

// converto per sicurezza l'età in number
ageUser = parseInt(ageUser); // number
console.log(ageUser);

// creo variabile kmPrice in base ai km
const kmPrice = kmUser * 0.21; // number
console.log(kmPrice);

// creo variabile per lo sconto
let discount;
let discountApplied;

if (ageUser < 18) {
    discount = kmPrice * 0.20; // number
    discountApplied = 20;
} else if (ageUser > 65) {
    discount = kmPrice * 0.40; // number
    discountApplied = 40;
} else {
    discount = 0; // number
}

// creo variabile con il prezzo scontato

let totPrice = kmPrice - discount; // number
console.log(totPrice, typeof totPrice);

totPrice = totPrice.toFixed(2); // string
console.log(totPrice, typeof totPrice);

document.getElementById("text").innerHTML = "L'importo da pagare è di:";

document.getElementById("price").innerHTML = `€ ${totPrice}`;
if (discountApplied === 20 || discountApplied === 40) {
    document.getElementById("discount").innerHTML = `Scontato del ${discountApplied}%`;
}

