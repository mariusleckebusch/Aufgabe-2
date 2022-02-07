// 1+2+3+4+5+6

document.getElementsByTagName('button')[0].addEventListener('click', selectfunction);

function selectfunction() {
    var val = document.getElementById('select').value;
    if(val == 'FromTo') {fromto()} if(val == 'FromToArray') {fromto2()}
}


function fromto() {
    var from = parseInt(document.getElementById('from').value);
    var to = parseInt(document.getElementById('to').value);
    if (isNaN(from) || isNaN(to)) {
        document.getElementById('result').innerText = "Bitte gebe einen gültigen Wert ein";
        return;
    } else {
        document.getElementById('result').innerText = "";
        document.getElementById('result').innerHTML = "";
            var num = 0;
            var i = from;
            while (i <= to) {
                num = num + i;
                console.log(num+i)
                i = i + 1;
                var b = document.createElement('p');
                var number = document.createTextNode(num);
                b.appendChild(number)
                document.getElementById('result').appendChild(b);
            }
            
    }
}

function fromto2() {
var list = [];
var from = parseInt(document.getElementById('from').value);
    var to = parseInt(document.getElementById('to').value);
    if (isNaN(from) || isNaN(to)) {
        document.getElementById('result').innerText = "Bitte gebe einen gültigen Wert ein";
        return;
    } else {
        document.getElementById('result').innerText = "";
        document.getElementById('result').innerHTML = "";
            var num = 0;
            var i = from;
            while (i <= to) {
                num = num + i;
                i = i + 1;
                list.push(num);
            }
        document.getElementById('result').innerText = list;
    }
}

var num = 0;
var i = 1;
while (i <= 100) {
    num = num + i;
    i = i + 1;
    console.log(num);
}