
/*
JSnack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array
*/


let arrayNumber = [];

for (let i=0; i<6; i++){
  const number = parseInt(prompt ("Inserisci un numero"));
  console.log(number);

  if(number % 2 > 0) {
    arrayNumber.push(number);
  }
  console.log(arrayNumber);
  document.querySelector("#number-inserted").innerHTML += "<span>"+number+"</span><br>";
}

const lengthArray = arrayNumber.length;

for (let i=0;i<lengthArray;i++){
  document.querySelector("#number-into-array").innerHTML += "<span>"+arrayNumber[i]+"</span><br>";
}
  
