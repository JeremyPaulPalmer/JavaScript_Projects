function inf_Function() {
    var x = 3E404
    return x;
}
document.getElementById("inf").innerHTML = inf_Function();

function neg_Inf() {
    var x = -2E503
    return x;
}
document.getElementById("neg").innerHTML = neg_Inf();

document.writeln((10 > 2) + "<br>");
document.write((10 < 5) + "<br>");

console.log(18 / 2);

document.write("18" + 18 + "<br>");

console.log(18 < 2);

document.write((18==18) + "<br>");
document.write((18==15)+"<br>");
document.write((18===18)+"<br>");
document.write((18==="car")+"<br>");
document.write(("18"===18)+"<br>");
document.write(("vehicle"==="bus")+"<br>");
document.write((10>5&&18<23)+"<br>");
document.write((10<5&&18<23)+"<br>");
document.write((10<5||18>5)+"<br>");
document.write((2>222||25<23)+"<br>");
document.write(!(18 < 10)+"<br>");
document.write(!(5==5)+"<br>");