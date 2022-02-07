document.getElementsByTagName('button')[0].addEventListener('click', fromto);
function fromto() {
    var b = document.createElement('p');
    var num = 0;
    var i = 1;
    while (i <= 100) {
        num = num + i;
        i = i + 1;
        b.appendChild('div');
        b.innerText = num;
    }
}