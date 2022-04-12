
/*
JSnack 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/



// 1. Creo un arrey con gli utenti autorizzati
// 2. Chiedo d'inserire la mail
// 3. Confonto la lista degli autorizzati con il valore inserito
// 4. Stampo il risultato della verifica.

const gatsby61 = [
  "Domenico Agostino",
  "Mihai Badia",
  "Riccardo Becattini",
  "Manuel Benini",
  "Bruno Bernardini",
  "Guido Buono",
  "Pierluigi Cancellaro",
  "Francesco Cataletto",
  "Stefano Cravotta",
  "Giovanni Crispino",
  "Giancarlo Croce",
  "Enrico De Stefano",
  "Silvia Dugato",
  "Francesco Ercoli",
  "Luca Gaddini",
  "Marco Gagliano",
  "Cristina Gasperini",
  "Gabriele Giusti",
  "Chiara Grillo",
  "Manuela Ienuso",
  "Michele Iliescu",
  "Ketevan Jorjoliani",
  "Renato Lami",
  "Davide Manciucca",
  "Emanuele Mastronardi",
  "Luca Mazzarini",
  "Daniele Monteleone",
  "Salvatore Olivieri",
  "Leonardo Pellegrini",
  "Agostino Piquè",
  "Davide Pizzolla",
  "Antonio Pollo",
  "Ivan Russo",
  "Amanjit Singh",
  "Sebastiano Visco"
  ];

// Creo una variabile con valore = alla lunghezza dell'array
const numItems = gatsby61.length;

console.log(gatsby61);

// Creo una variabile in cui andrò ad inserire la mail prelevata dalla pagina HTML
let nameInserted;
const btnLogin = document.querySelector("#btn_login");

btnLogin.addEventListener("click", function(){
  const nameForm = document.querySelector("#InputName");
  console.log(InputName);

  nameInserted = nameForm.value;
  console.log("NOME INSERITO:",nameInserted);

  // Creo un flag che utilizzarò per creare il messaggio di alert in base alla presneza o meno dell'indirizzo mail inserito dall'utente
  let flagAuth = false;

  for(let i = 0; i< numItems ; i++){
    if (nameInserted === gatsby61[i]) flagAuth = true;
  }

  // Se il flag è stato variato da false a true all'interno del for significa che l'utente è autorizzato ad accedere.
  if(flagAuth===true) {
    alert("Benvenuto ad Boolean Gatsby #61")
  } else alert("Purtroppo non sei sulla lista degli invitati di Boolean Gatsby #61")

});