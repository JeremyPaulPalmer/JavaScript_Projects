var x = 5;
function mult_numbersA() {
    document.write((18 * x) + "<br>");
}
function mult_numbersB() {
    document.write((x * 45) + "<br>");
}
mult_numbersA();
mult_numbersB();

function get_time() {
    if (new Date().getHours() >= 8) {
    document.getElementById("wake_up").innerHTML = "Get outta bed!!";
    }
}

function get_sleep() {
    if (new Date().getHours() <= 20) {
    document.getElementById("sleep").innerHTML = "It's not time for bed!!";
    }
}

function Height_Function() {
    height = document.getElementById("height").value;
    if (height >= 58) {
        ride = "You are tall enough to ride this ride!!";
    }
    else {
        ride = "You are not tall enough to ride this ride.";
    }
    document.getElementById("How_tall_are_you?").innerHTML = ride;
}

function time_function() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is morning time!";
    }
    else if (time > 12 ==  time < 18) {
        reply = "It is the afternoon.";
    }
    else {
        reply = "It is evening time.";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}

function mult_numbersC() {
    var y = 5;
    document.write((18 * y) + "<br>");
}
function mult_numbersD() {
    document.write(y * 45);
}

mult_numbersC();
mult_numbersD();