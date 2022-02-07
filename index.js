
function a(from, to, callback) {
    if (!isNaN(from) || !isNaN(to)) {
        callback(true, "Bitte gebe eine gültige Zahl ein");
        return;
    }
    var num = 0;
    var i = from;
    while (i <= to) {
        num = num + i;
        i = i + 1;
        callback(false, num);
    }
}

function b(from, to, callback) {
    if (!isNaN(from) || !isNaN(to)) {
        callback(true, "Bitte gebe eine gültige Zahl ein");
        return;
    }
    var num = 0;
    for (var i = from; i <= to; i + 1) {
        num = num + i;
        i = i + 1;
        callback(false, num);
    }
}

a(1, 100, function (err, dat) {
    if (err) {
        console.error(dat);
        return;
    } else {
        console.info(dat);
    }
})

b(1, 100, function (err, dat) {
    if (err) {
        console.error(dat);
        return;
    } else {
        console.info(dat);
    }
})