let a = Number(prompt("Podaj pierwszą liczbę:"));
let b = Number(prompt("Podaj drugą liczbę:"));
 
if (b === 0) {
    document.write("Nie można dzielić przez zero.");
} else if (a % b === 0) {
    document.write("Pierwsza liczba jest podzielna przez drugą.");
} else {
    document.write("Pierwsza liczba nie jest podzielna przez drugą.");
}