
/*
JSnack 2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const firstWord = prompt ("Inserisci la prima parola");
const secondWord = prompt ("Inserisci il seconda parola");

console.log("Prima parola:",firstWord);
console.log("Seconda parola:",secondWord);

console.log(); 

if(firstWord.length > secondWord.length){ 
  alert("Le parole inserite sono: "+secondWord+" "+firstWord);
} else alert("Le parole inserite sono: "+firstWord+" "+secondWord);