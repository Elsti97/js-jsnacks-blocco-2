// * JSnack 1
// let number = parseInt(prompt("Inserisci numero"));
// if(number % 2 == 0) {
//   console.log(number + 1)
//   risultato.innerHTML = `Il tuo numero è ${number+1}, prossima volta scegli direttamente un numero dispari dai`;
// } else if (number % 2 !== 0) {
//   console.log(number);
//   risultato.innerHTML = `Il tuo numero è ${number}, bravo hai scelto un numero dispari`;
// }



// * JSnack 2
// let names = [ 'Franco', 'Gino', 'Aldo', 'John'];
// let Nname = names.length;

// let surnames = [ 'DiMarco', 'Gasby', 'BigG', 'Rossi'];
// let Nsurname = surnames.length;

// console.log( names[ Math.round(Math.random() * (Nname - 1))] + ' ' + surnames[Math.round(Math.random() * (Nsurname - 1))]);



// * JSnack 3
// let numbers = [1, 6, 8, 2, 5, 7, 9, 2];
// let somma= 0;

// for(let i = 1; i < numbers.length; i += 2) {
//   somma += numbers[i];
// }

// console.log(somma);



// * JSnack 4
let array1 = ['FrancoArmani', 'GigiFinizzio', 'Alisson', 'CHEFBruno', 'Joe', 'Jack'];
Narray1 = array1.length;

let array2 = ['Aldo', 'Giovanni', 'Giacomo'];
Narray2 = array2.length;

if (Narray1 < Narray2) {
  let differenza = Narray2 - Narray1;
  for(let i = 0; i < differenza; i++){
    let AggiuntaUtente = prompt('Aggiungi un nome');
    array1.push(AggiuntaUtente);
    
  }
  console.log(differenza, array1, array2);
  
} else if (Narray2 < Narray1) {
  let differenza = Narray1 - Narray2;
  for(let i = 0; i < differenza; i++){
    let AggiuntaUtente = prompt('Aggiunti un nome');
    array2.push(AggiuntaUtente);
    
  }
  console.log(differenza, array1, array2);

} else {
  console.log("Sono uguali")
}