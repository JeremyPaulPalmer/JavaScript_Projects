function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function old_enough() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Pet(Animal, Name, Color, Sound) {
    this.Pet_Animal = Animal;
    this.Pet_Name = Name;
    this.Pet_Color = Color;
    this.Pet_Sound = Sound;
}
var Takako = new Pet("Dog", "Ryder", "Black & Tan", "Bark");
var Jeremy = new Pet("Cat", "Maro", "Mixed", "Meow");
var Soutaro = new Pet("Lizard", "Genky", "Green", "None");
function petFunction() {
    document.getElementById("New_and_This").innerHTML = "Takako has a " + Takako.Pet_Color + "-colored " + Takako.Pet_Animal + " named " + Takako.Pet_Name;
}

function subt_Function() {
    document.getElementById("Nested_Function").innerHTML = subt();
    function subt() {
        var Starting_point = 18;
        function minus_one() {Starting_point -= 1;}
        minus_one();
        return Starting_point;
    }
}