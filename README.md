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
var from = 1;
var to = 101;
var a = to;

for(var i = from; i <= to+1; i++) {
    a-1;
    b = to-i;
    c = to-b;
}
console.log(c * to/2)
```

Lösungsweg 3 (Musterlösung)
```js
var _start = 1;
var _ende = 100;
var _summe = (_start + _ende) * (1 + _ende - _start) /2;
```