function Pet_Function () {
    var Pet_Output;
    var Pets = document.getElementById("Pet_Input").value;
    var Pet_String = " is a great pet!";
    switch(Pets) {
        case "Dog":
            Pet_Output = "Dog" + Pet_String;
        break;
        case "Cat":
            Pet_Output = "Cat" + Pet_String;
        break;
        case "Pig":
            Pet_Output = "Pig" + Pet_String;
        break;
        case "Hamster":
            Pet_Output = "Hamster" + Pet_String;
        break;
        case "Parrot":
            Pet_Output = "Parrot" + Pet_String;
        break;
        case "Goldfish":
            Pet_Output = "Goldfish" + Pet_String;
        break;
        default:
        Pet_Output = "Please enter a pet exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Pet_Output;
}

var x = document.getElementsByClassName("ByClass");
document.getElementById("demo").innerHTML = x[1].innerHTML;

var c = document.getElementById("demoCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(190,100,80,0,4*Math.PI);
ctx.stroke();
var c2 = document.getElementById("demoCanvas2");
var ctx2 = c2.getContext("2d");
var my_gradient = ctx2.createLinearGradient(0, 0, 170, 0);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(0.5, "red");
my_gradient.addColorStop(1, "white");
ctx2.fillStyle = my_gradient;
ctx2.fillRect(20, 20, 150, 100);