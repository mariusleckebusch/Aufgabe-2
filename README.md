# Aufgabe 2 (Addiere Zahlen von 1 bis 100)
Schreiben Sie ein Programm, das alle Zahlen von 1 bis 100 summiert. Wählen Sie dafür einen möglichst eleganten Ansatz, implementieren Sie zwei verschiedenee Lösungswege

Lösungsweg 1
```
var num = 0;
var i = 1;
while (i <= 100) {
    num = num + i;
    i = i + 1;
    console.log(num);
}
```
Lösungsweg 2
```
var sum = 0;
for(var i =1; i <= 100; i++) {
    sum = sum + i;
    console.log(sum)
}
```