let a = Number(prompt("Podaj pierwszą liczbę:"));
let b = Number(prompt("Podaj drugą liczbę:"));
let c = Number(prompt("Podaj trzecią liczbę:"));
 
let liczby = [a, b, c];
 
liczby.sort(function(x, y) {
    return x - y;
});
 
document.write("Kolejność rosnąca: " + liczby.join(", "));