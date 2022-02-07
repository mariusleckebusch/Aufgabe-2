document.getElementById('button').addEventListener('click', fromto);
function fromto() {
    var from = document.getElementById('from').innerText;
    var to = document.getElementById('to').innerText;
    var b = document.createElement('p');
    if (!isNaN(from) || !isNaN(to)) {
        document.getElementById("result").innerText = "Bitte gebe eine gültige Zahl ein";
        return;
    } else {
        document.getElementById("result").innerText = "";
    }
    var num = 0;
    var i = from;
    while (i <= to) {
        num = num + i;
        i = i + 1;
        b.appendChild('div');
        b.innerText = num;
    }
}