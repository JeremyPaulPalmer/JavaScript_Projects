function comp_Sentence() {
    var part_1 = "Click on ";
    var part_2 = "the button ";
    var part_3 = "to turn this ";
    var part_4 = "into a ";
    var part_5 = "complete sentence.";
    var complete = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("concate").innerHTML = complete;
}

function slice_dice() {
    var complete_sentence = "How much wood could a woodchuck chuck?";
    var sliced_part = complete_sentence.slice(22, 31);
    document.getElementById("slice").innerHTML = sliced_part;
}

function upper_case() {
    var sentence = "click the button to turn this into all caps.";
    var all_caps = sentence.toUpperCase(0, 44);
    document.getElementById("caps").innerHTML = all_caps;
}

function search_sentence() {
    var sentence2 = "Click to find the starting position of button in this sentence.";
    var mag_letter = sentence2.search("button");
    document.getElementById("search").innerHTML = mag_letter;
}

function convert_number() {
    var number = 18;
    document.getElementById("string").innerHTML = number.toString();
}

function precision() {
    var x = 1598.18002623789;
    document.getElementById("reduce").innerHTML = x.toPrecision(6);
}

function fix_number() {
    var x = 1598.18002623789;
    document.getElementById("fixed").innerHTML = x.toFixed();
}

function primitive() {
    var x = "This is a string.";
    document.getElementById("value").innerHTML = x.valueOf();
}