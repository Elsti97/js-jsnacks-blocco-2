// * JSnack 1
// let number = parseInt(prompt("Inserisci numero"))
// if(number % 2 == 0) {
//   console.log(number + 1)
//   risultato.innerHTML = `Il tuo numero è ${number+1}, prossima volta scegli direttamente un numero dispari dai`
// } else if (number % 2 !== 0) {
//   console.log(number)
//   risultato.innerHTML = `Il tuo numero è ${number}, bravo hai scelto un numero dispari`
// }



// * JSnack 2
let names = [ 'Franco', 'Gino', 'Aldo', 'John'];
let Nname = names.length;

let surnames = [ 'DiMarco', 'Gasby', 'BigG', 'Rossi'];
let Nsurname = surnames.length;

console.log( names[ Math.round(Math.random() * (Nname - 1))] + ' ' + surnames[Math.round(Math.random() * (Nsurname - 1))]);
