let a = Number(prompt("Podaj pierwszą liczbę:"));
let b = Number(prompt("Podaj drugą liczbę:"));
let c = Number(prompt("Podaj trzecią liczbę:"));
 
let najwieksza = a;
 
if (b > najwieksza) {
    najwieksza = b;
}
 
if (c > najwieksza) {
    najwieksza = c;
}
 
document.write("Największa liczba to: " + najwieksza);