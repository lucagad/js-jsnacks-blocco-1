
/*
JSnack 3
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/


// Ciclo For
const btnFor = document.querySelector("#for");
btnFor.addEventListener("click", function(){

let sumNumber = 0;

for(let i=0;i<5;i++){
  const numberIns = parseInt(prompt ("Inserisci un numero (For)"));
  console.log("Numero inserito (For): ",numberIns);
  sumNumber += numberIns;
}

console.log(sumNumber);
alert("La somma dei numeri inseriti (For) è: "+sumNumber);
});


// Ciclo While
const btnWhile = document.querySelector("#while");
btnWhile.addEventListener("click", function(){

let nPrompt = 0;
let sumNumberTwo = 0;

while (nPrompt < 5){
  const numberIns = parseInt(prompt ("Inserisci un numero (While)"));
  console.log("Numero inserito (While): ",numberIns);
  sumNumberTwo += numberIns;
  nPrompt++;
}

console.log(sumNumberTwo);

alert("La somma dei numeri inseriti (While) è: "+sumNumberTwo);

});