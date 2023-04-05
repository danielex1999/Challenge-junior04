var d1 = document.querySelector("#data-day");
var m1 = document.querySelector("#data-month");
var y1 = document.querySelector("#data-year");
var date = new Date();
var d2 = date.getDate();
var m2 = 1 + date.getMonth();
var y2 = date.getFullYear();
var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


function validacion_general() {
    /*Year*/
    if (y2 < y1.value) {
        document.getElementById("message-error-year").innerHTML = "Must be in the past";
        document.getElementById("name-year").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("data-year").style.border = "1px solid hsl(0, 100%, 67%)";
    } else {
        document.getElementById("name-year").style.color = "hsl(0, 1%, 44%)";
        document.getElementById("data-year").style.border = "1px solid hsl(0, 1%, 44%)";
        document.getElementById("message-error-year").innerHTML = "";
    }
    /*Month*/
    if (m1.value <= 12 && m1.value >= 1 || m1.value == "") {
        document.getElementById("name-month").style.color = "hsl(0, 1%, 44%)";
        document.getElementById("data-month").style.border = "1px solid hsl(0, 1%, 44%)";
        document.getElementById("message-error-month").innerHTML = "";
    } else {
        document.getElementById("message-error-month").innerHTML = "Must be a valid month";
        document.getElementById("name-month").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("data-month").style.border = "1px solid hsl(0, 100%, 67%)";
    }
    /*Days*/
    if (d1.value <= month[m1.value - 1] && d1.value >= 1 || d1.value == "") {
        document.getElementById("name-day").style.color = "hsl(0, 1%, 44%)";
        document.getElementById("data-day").style.border = "1px solid hsl(0, 1%, 44%)";
        document.getElementById("message-error-day").innerHTML = "";
    } else {
        document.getElementById("message-error-day").innerHTML = "Must be a valid day";
        document.getElementById("name-day").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("data-day").style.border = "1px solid hsl(0, 100%, 67%)";
    }
}

function calculation() {
    /*Is empty*/
    if (d1.value == "") {
        document.getElementById("name-day").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("data-day").style.border = "1px solid hsl(0, 100%, 67%)";
        document.getElementById("message-error-day").innerHTML = "This field is required";
    } else {
        document.getElementById("name-day").style.color = "hsl(0, 1%, 44%)";
        document.getElementById("data-day").style.border = "1px solid hsl(0, 1%, 44%)";
        document.getElementById("message-error-day").innerHTML = "";
    }
    if (m1.value == "") {
        document.getElementById("name-month").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("data-month").style.border = "1px solid hsl(0, 100%, 67%)";
        document.getElementById("message-error-month").innerHTML = "This field is required";
    } else {
        document.getElementById("name-month").style.color = "hsl(0, 1%, 44%)";
        document.getElementById("data-month").style.border = "1px solid hsl(0, 1%, 44%)";
        document.getElementById("message-error-month").innerHTML = "";
    }
    if (y1.value == "") {
        document.getElementById("name-year").style.color = "hsl(0, 100%, 67%)";
        document.getElementById("data-year").style.border = "1px solid hsl(0, 100%, 67%)";
        document.getElementById("message-error-year").innerHTML = "This field is required";
    } else {
        document.getElementById("name-year").style.color = "hsl(0, 1%, 44%)";
        document.getElementById("data-year").style.border = "1px solid hsl(0, 1%, 44%)";
        document.getElementById("message-error-year").innerHTML = "";
    }

    /*Calculadora*/
    if (d1.value > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1.value > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - d1.value;
    var m = m2 - m1.value;
    var y = y2 - y1.value;


    if ((d <= 0 || m <= 0 || y <= 0)) {
    } else if (d1.value == "" || m1.value == "" || y1.value == "") {
    } else {
        document.getElementById("result-year").innerHTML = y;
        document.getElementById("result-month").innerHTML = m;
        document.getElementById("result-days").innerHTML = d;
    }
}