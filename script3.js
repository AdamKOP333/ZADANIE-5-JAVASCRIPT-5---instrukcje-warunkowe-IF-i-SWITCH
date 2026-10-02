let a = Number(prompt("Podaj a:"));
let b = Number(prompt("Podaj b:"));
 
if (b - 4 === 0) {
    document.write("Nie można dzielić przez zero.");
} else {
    let x = (a + 6) / (b - 4);
    document.write("Wynik: " + x);
}