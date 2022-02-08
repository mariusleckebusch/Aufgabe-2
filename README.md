# Aufgabe 2 (Addiere Zahlen von 1 bis 100)
Schreiben Sie ein Programm, das alle Zahlen von 1 bis 100 summiert. Wählen Sie dafür einen möglichst eleganten Ansatz, implementieren Sie zwei verschiedenee Lösungswege

Lösungsweg 1
```js
var num = 0;
var i = 1;
while (i <= 100) {
    num = num + i;
    i = i + 1;
    console.log(num);
}
```
Lösungsweg 2
```js
var y;
var x;
var erg;
var hälfte;
var von = 2; //i
var bis = 100;
var w = bis;
var rest = 0;
const result = (bis % 2  == 0) ? "even" : "odd";

if (result === 'even') {
        w=w+1
        for(var i = von; i <= bis; i++) {
            w-1;
            y = bis-i;
            x = bis-y;
        }
        hälfte = bis / 2;
        console.log("Hälfte:", hälfte)
        erg = w * x/2;
        console.log("Ergebnis:", erg)
}

if (result === 'odd') {
    bis = bis - 1
    rest = rest + 1
    for(var i = von; i <= bis; i++) {
        w-1;
        y = bis-i;
        x = bis-y;
    }
    bis = bis+1
    hälfte = bis / 2;
    console.log("Hälfte:", hälfte)
    console.log("Rest:", rest)
    erg = w * x/2 + w;
    console.log("Ergebnis:", erg)
}
```