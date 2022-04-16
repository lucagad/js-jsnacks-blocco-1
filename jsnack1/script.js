
/*
JSnack 1
L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/


const firstNumber = parseInt(prompt ("Inserisci il primo numero"));
const secondNumber = parseInt(prompt ("Inserisci il secondo numero"));

console.log("Primo numero:",firstNumber);
console.log("Secondo numero:",secondNumber);


if(firstNumber > secondNumber){ 
  alert("Il numero maggiore è: "+firstNumber);
} else alert("Il numero maggiore è: "+secondNumber);