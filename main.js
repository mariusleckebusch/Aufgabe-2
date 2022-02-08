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