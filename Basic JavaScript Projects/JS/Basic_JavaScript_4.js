function my_Dictionary() {
    var Animal = {
        Species:"Cat",
        Color:"Mixed",
        Breed:"Mixed",
        Age:1,
        Sound:"Meow!"
    };
    delete Animal.Species;
    document.getElementById("Dictionary").innerHTML = Animal.Species;
}