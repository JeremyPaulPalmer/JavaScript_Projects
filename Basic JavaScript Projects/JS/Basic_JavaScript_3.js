document.getElementById("ceil").innerHTML = Math.ceil(4.1);

function multFunc() {
    var multiplication = 16 * 15;
    return multiplication;
}
document.getElementById("mult").innerHTML = "16 * 15 = " + multFunc();

function divFunc() {
    var division = 16 / 15;
    return division;
}
document.getElementById("div").innerHTML = "16 / 15 = " + divFunc();

function allFunc() {
    var all = (4 + 2) / 3 * 4;
    return all;
}
document.getElementById("all").innerHTML = "Four plus two divided by three times four = " + allFunc();

function modFunc() {
    var mod = 18 % 5;
    return mod;
}
document.getElementById("mod").innerHTML = "18 divided by 5 has a remainder of = " + modFunc();
    
function negFunc() {
    var x = -18;
    return x;
}
document.getElementById("unary").innerHTML = -negFunc();

var y = 18;
y++;
document.writeln(y);

var z = 21;
z--;
document.writeln(z);