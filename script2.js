let a = Number(prompt("Podaj a:"));
let b = Number(prompt("Podaj b:"));
let c = Number(prompt("Podaj c:"));
let d = Number(prompt("Podaj d:"));
 
if (b === 0 || d === 0) {
    document.write("Nie można dzielić przez zero.");
} else {
    let x = a / b + c / d;
    document.write("Wynik: " + x);
}