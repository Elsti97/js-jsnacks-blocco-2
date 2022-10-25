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
// let names = [ 'Franco', 'Gino', 'Aldo', 'John'];
// let Nname = names.length;

// let surnames = [ 'DiMarco', 'Gasby', 'BigG', 'Rossi'];
// let Nsurname = surnames.length;

// console.log( names[ Math.round(Math.random() * (Nname - 1))] + ' ' + surnames[Math.round(Math.random() * (Nsurname - 1))]);



// * JSnack 3
let numbers = [1, 6, 8, 2, 5, 7, 9, 2]
let somma= 0;

for(let i = 1; i < numbers.length; i += 2) {
  somma += numbers[i]
}

console.log(somma)