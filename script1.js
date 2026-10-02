let a = Number(prompt("Podaj a:"));
let b = Number(prompt("Podaj b:"));
 
if (b === 0) {
    document.write("Nie można dzielić przez zero.");
} else {
    let x = a / b;
    document.write("Wynik: " + x);
}