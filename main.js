var y;
var x;
var erg;
var hälfte;
var i;
var von = 2; //i
var bis = 100;
var w = bis;
var rest = 0;
const result = (bis % 2  == 0) ? "even" : "odd";

if (result === 'even') {
        w=w+1
        for(i = von; i <= bis; i++) {
            w-1;
            y = bis-i;
            x = bis-y;
        }
        console.log(bis-von)
        console.log("Hälfte:", bis / 2)
        console.log("Ergebnis:", w * x/2)
}

if (result === 'odd') {
    bis = bis - 1
    rest = rest + 1
    for(i = von; i <= bis; i++) {
        w-1;
        y = bis-i;
        x = bis-y;
    }
    bis = bis+1
    console.log("Hälfte:", bis / 2)
    console.log("Rest:", rest)
    console.log("Ergebnis:", w * x/2 + w - von)
}


