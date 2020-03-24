function Call_Loop() {
    var text = "";
    var i = 0;
    while (i < 10) {
        text += "<br>The number is " + i;
        i++;
    }
    document.getElementById("Loop").innerHTML = text;
}

function string_count() {
    var string = "Click to count the number of characters in this sentence."
    var n = string.length;
    document.getElementById("count").innerHTML = n;
}

var Instruments = ["Trumpet", "Clarinet", "Flute", "Baronet", "Saxophone"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var dog_breed = [];
    dog_breed[0] = "German Shepherd";
    dog_breed[1] = "Cocker Spaniel";
    dog_breed[2] = "Australian Shepherd";
    dog_breed[3] = "Akita";
    dog_breed[4] = "Samoyed";
    document.getElementById("Array").innerHTML = "My first dog was a " + dog_breed[1] + ".";
}

function constant_function() {
    const Ryder = {Breed: "Australian Cattle Dog", color: "Black & Tan", sex: "Male"};
    Ryder.Breed = "Australian Shepherd";
    Ryder.fixed = "neutered";
    document.getElementById("Constant").innerHTML = "My dog Ryder is a " + Ryder.fixed + " " + Ryder.sex + ", " + Ryder.color + ", " + Ryder.Breed + ".";
}

var y = 18;
document.write(y);
{
    let y = 36;
    document.write("<br>" + y);
}
document.write("<br>" + y);

function return_function() {
    return Math.PI;
}
document.getElementById("return").innerHTML = return_function();

let cat = {
    name: "Maro ",
    hair: "short",
    color: "orange/white/black/grey ",
    born: "2019 ",
    description: function() {
        return "My cat, " + this.name + " was born in "  + this.born + " and has " + this.hair + "<br>" + this.color + " hair."
    }
};
document.getElementById("object").innerHTML = cat.description();

var text = "";
var j;
for (j = 0; j < 20; j++) {
    if (j === 18) { break; }
    text += "The number is " + j + "<br>";
}
document.getElementById("break").innerHTML = text;

var text = "";
var j;
for (j = 0; j < 20; j++) {
    if (j === 18) { continue; }
    text += "The number is " + j + "<br>";
}
document.getElementById("continue").innerHTML = text;